import { html } from 'lit';
import '../src/define.js';
import { withTheme, Story } from './utils.js';

export default {
  title: 'Internal/ToggleButton',
  component: 'lvi-toggle-button',
};

const UncheckedTemplate: Story = () =>
  withTheme(html`
    <sl-card class="card-basic">
      <lvi-toggle-button> Toggle me! </lvi-toggle-button>
    </sl-card>
  `);

const CheckedTemplate: Story = () =>
  withTheme(html`
    <sl-card class="card-basic">
      <lvi-toggle-button checked> Toggle me! </lvi-toggle-button>
    </sl-card>
  `);

export const Unchecked = UncheckedTemplate.bind({});
export const Checked = CheckedTemplate.bind({});
