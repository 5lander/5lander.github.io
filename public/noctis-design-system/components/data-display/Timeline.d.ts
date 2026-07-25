import * as React from 'react';

export type TimelineStatus = 'done' | 'current' | 'pending';

export interface TimelineStep {
  label: React.ReactNode;
  /** Fecha/hora u otro metadato (mono). */
  meta?: React.ReactNode;
  status: TimelineStatus;
}

/**
 * Stepper vertical de estados de proceso (draft → in_transit → received). Los
 * estados terminales alternos (cancelled) se muestran aparte como Badge terminal.
 *
 */
export interface TimelineProps {
  steps: TimelineStep[];
}

export function Timeline(props: TimelineProps): React.JSX.Element;
