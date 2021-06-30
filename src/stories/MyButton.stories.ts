import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import { MyButtonComponent } from '../app/my-button/my-button.component';

export default {
    title: 'My Examples/MyButton',
    component: MyButtonComponent,
    decorators: [
        moduleMetadata({
            declarations: [MyButtonComponent],
            // imports: [CommonModule], //not needed
        }),
    ],
} as Meta;

const Template: Story<MyButtonComponent> = (args: MyButtonComponent) => ({
    props: args
});

export const Example = Template.bind({});
