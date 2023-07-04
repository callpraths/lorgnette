import '../src/define.js';
import { htmlStory, Story } from './utils.js';

export default {
  title: 'SearchBox',
  component: 'lv-search-box',
};

const Template: Story = () => htmlStory`
  <lv-search-box>
  </lv-search-box>
`;

export const Regular = Template.bind({});
