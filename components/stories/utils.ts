import { html, TemplateResult } from 'lit';

export interface Story<T = unknown> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

export const htmlStory = (
  strings: TemplateStringsArray,
  ...values: unknown[]
): TemplateResult => html`
  <div class="sl-theme-dark">${html(strings, values)}</div>
`;
