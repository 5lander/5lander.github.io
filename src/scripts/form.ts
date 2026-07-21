/* =========================================================================
   Contact form — progressive enhancement over a native Web3Forms POST.
   With JS: validate inline, submit via fetch, report status without leaving
   the page. Without JS: the <form action=… method=POST> submits natively and
   Web3Forms shows its own thank-you page. Localized strings ride in on the
   form's data-* attributes so this file stays language-neutral.
   ========================================================================= */
const form = document.querySelector<HTMLFormElement>('.contact-form');

if (form) {
  const status = form.querySelector<HTMLElement>('.form-status')!;
  const btn = form.querySelector<HTMLButtonElement>('button[type="submit"]')!;
  const sendLabel = btn.textContent || '';
  const d = form.dataset;
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const setStatus = (msg: string, kind: 'ok' | 'err' | '') => {
    status.textContent = msg;
    status.dataset.kind = kind;
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim();

    if (!name) return setStatus(d.errName || '', 'err');
    if (!emailRe.test(email)) return setStatus(d.errEmail || '', 'err');
    if (!message) return setStatus(d.errMessage || '', 'err');

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
      setStatus(d.ok || '', 'ok');
    } catch {
      setStatus(d.errSend || '', 'err');
    } finally {
      btn.disabled = false;
      btn.textContent = sendLabel;
    }
  });
}
