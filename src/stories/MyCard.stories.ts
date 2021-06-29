import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import { MyButtonComponent } from '../app/my-button/my-button.component';
import { MyCardComponent } from '../app/my-card/my-card.component';

export default {
    title: 'My Examples/MyCard',
    component: MyCardComponent,
    decorators: [
        moduleMetadata({
            declarations: [MyButtonComponent, MyCardComponent],
            imports: [CommonModule],
        }),
    ],
} as Meta;

const Template: Story<MyCardComponent> = (args: MyCardComponent) => ({
    props: args,
    template: `<app-my-card [title]="title"> This is inserted using content projection.<br>Test </app-my-card>`
});

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    title: 'Demo for small'
};

export const Medium = Template.bind({});
Medium.args = {
    size: 'medium',
    title: 'Demo for medium'
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
};
