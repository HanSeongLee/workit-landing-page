import React from 'react';
import Button from './index';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        as: {
            control: {
                type: 'select',
                options: ['button', 'a']
            }
        },
        variant: {
            control: {
                type: 'select',
                options: ['primary', 'link'],
            },
        },
        className: { control: 'text' },
        href: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Primary',
    },
};

export const Link: Story = {
    args: {
        variant: 'link',
        href: 'https://google.com',
        children: 'Link',
    },
};
