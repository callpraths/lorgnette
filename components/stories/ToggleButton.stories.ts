import '../src/define.js';
import { htmlStory, Story } from './utils.js';

export default {
  title: 'ToggleButton',
  component: 'lv-toggle-button',
};

const UncheckedTemplate: Story = () => htmlStory`
  
<sl-card class="card-basic">
  <lv-toggle-button>
    Toggle me!
  </lv-toggle-button>
  </sl-card>
`;

const CheckedTemplate: Story = () => htmlStory`
<sl-card class="card-basic">
  <lv-toggle-button checked>
    Toggle me!
  </lv-toggle-button>
  </sl-card>
`;

export const Unchecked = UncheckedTemplate.bind({});
export const Checked = CheckedTemplate.bind({});
