import { css } from 'lit';

/**
 * Hihglight color styles for consistent highlighting across components.
 *
 * Design tokens from:
 * https://github.com/shoelace-style/shoelace/blob/current/src/themes/dark.css
 */
export const highlightColorStyles = css`
  .highlight-none {
    background-color: var(--sl-color-gray-500);
  }
  .highlight-soft-none {
    background-color: var(--sl-color-gray-300);
  }
  .highlight-0 {
    background-color: var(--sl-color-emerald-300);
  }
  .highlight-soft-0 {
    background-color: var(--sl-color-emerald-100);
  }
  .highlight-1 {
    background-color: var(--sl-color-amber-300);
  }
  .highlight-soft-1 {
    background-color: var(--sl-color-amber-100);
  }
  .highlight-2 {
    background-color: var(--sl-color-lime-300);
  }
  .highlight-soft-2 {
    background-color: var(--sl-color-lime-100);
  }
  .highlight-3 {
    background-color: var(--sl-color-blue-300);
  }
  .highlight-soft-3 {
    background-color: var(--sl-color-blue-100);
  }
  .highlight-4 {
    background-color: var(--sl-color-red-300);
  }
  .highlight-soft-4 {
    background-color: var(--sl-color-red-100);
  }
  .highlight-5 {
    background-color: var(--sl-color-yellow-500);
  }
  .highlight-soft-5 {
    background-color: var(--sl-color-yellow-300);
  }
  .highlight-6 {
    background-color: var(--sl-color-teal-300);
  }
  .highlight-soft-6 {
    background-color: var(--sl-color-teal-100);
  }
  .highlight-7 {
    background-color: var(--sl-color-fuchsia-300);
  }
  .highlight-soft-7 {
    background-color: var(--sl-color-fuchsia-100);
  }
  .highlight-8 {
    background-color: var(--sl-color-violet-300);
  }
  .highlight-soft-8 {
    background-color: var(--sl-color-violet-100);
  }
  .highlight-9 {
    background-color: var(--sl-color-cyan-500);
  }
  .highlight-soft-9 {
    background-color: var(--sl-color-cyan-300);
  }
`;

export const NUM_HIGHLIGHTS = 10;

export const highlightClassName = (
  ordinal: number,
  opacity: 'solid' | 'soft' = 'solid'
): string =>
  `highlight${opacity === 'soft' ? '-soft' : ''}-${ordinal % NUM_HIGHLIGHTS}`;

export const noHighlightClassName = (
  opacity: 'solid' | 'soft' = 'solid'
): string => `highlight${opacity === 'soft' ? '-soft' : ''}-none`;
