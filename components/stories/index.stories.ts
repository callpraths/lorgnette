import '../src/define.js';
import { htmlStory, Story } from './utils.js';

export default {
  title: 'LvMain',
  component: 'lv-main',
  argTypes: {
    header: { control: 'text' },
    counter: { control: 'number' },
    textColor: { control: 'color' },
  },
};

const Template: Story = () => htmlStory`
  <lv-main>
  </lv-main>
`;

export const Regular = Template.bind({});

/*
export const CustomHeader = Template.bind({});
CustomHeader.args = {
  header: 'My header',
};
*/
