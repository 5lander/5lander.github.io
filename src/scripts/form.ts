/* =========================================================================
   Contact form — progressive enhancement over a native Web3Forms POST.
   With JS: validate on blur + on submit, show the error next to each field
   (role="alert" + aria-invalid), submit via fetch, report send status inline.
   Without JS: the native <form action=… method=POST> submits and Web3Forms
   shows its own thank-you page. Localized strings ride in on data-* attributes.
   ========================================================================= */
const form = document.querySelector<HTMLFormElement>('.contact-form');

if (form) {
  const status = form.querySelector<HTMLElement>('.form-status')!;
  const btn = form.querySelector<HTMLButtonElement>('button[type="submit"]')!;
  const sendLabel = btn.textContent || '';
  const d = form.dataset;
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  type Rule = { name: 'name' | 'email' | 'message'; msg: string; ok: (v: string) => boolean };
  const rules: Rule[] = [
    { name: 'name', msg: d.errName || '', ok: (v) => v.trim().length > 0 },
    { name: 'email', msg: d.errEmail || '', ok: (v) => emailRe.test(v.trim()) },
    { name: 'message', msg: d.errMessage || '', ok: (v) => v.trim().length > 0 },
  ];

  const fieldOf = (r: Rule) =>
    form.elements.namedItem(r.name) as HTMLInputElement | HTMLTextAreaElement;

  const setStatus = (msg: string, kind: 'ok' | 'err' | '') => {
    status.textContent = msg;
    status.dataset.kind = kind;
  };

  const validate = (r: Rule): boolean => {
    const input = fieldOf(r);
    const errEl = document.getElementById(`err-${r.name}`)!;
    const valid = r.ok(input.value);
    input.setAttribute('aria-invalid', valid ? 'false' : 'true');
    errEl.textContent = valid ? '' : r.msg;
    return valid;
  };

  // Validate on blur; once a field is flagged, re-check on every keystroke so
  // the error clears the moment the user fixes it.
  rules.forEach((r) => {
    const input = fieldOf(r);
    input.addEventListener('blur', () => validate(r));
    input.addEventListener('input', () => {
      if (input.getAttribute('aria-invalid') === 'true') validate(r);
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Validate everything at once and focus the first invalid field — no
    // one-error-at-a-time round trips.
    let firstInvalid: HTMLElement | null = null;
    rules.forEach((r) => {
      if (!validate(r) && !firstInvalid) firstInvalid = fieldOf(r);
    });
    if (firstInvalid) return (firstInvalid as HTMLElement).focus();

    btn.disabled = true;
    btn.textContent = d.sending || sendLabel;
    setStatus('', '');

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      rules.forEach((r) => fieldOf(r).setAttribute('aria-invalid', 'false'));
      setStatus(d.ok || '', 'ok');
    } catch {
      setStatus(d.errSend || '', 'err');
    } finally {
      btn.disabled = false;
      btn.textContent = sendLabel;
    }
  });
}
