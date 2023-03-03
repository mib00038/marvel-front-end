import { ComponentStory, ComponentMeta } from '@storybook/react';

import Page from './Page';

export default {
  title: 'Example/Page',
  component: Page,
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page />;

export const Default = Template.bind({});