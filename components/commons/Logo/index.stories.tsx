import React from 'react';
import Logo from './index';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Logo> = {
    title: 'Logo',
    component: Logo,
    tags: ['autodocs'],
    argTypes: {
        dark: { control: 'boolean' },
        className: { control: 'text' },
        href: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof Logo>;
export const Light: Story = {
    render: () => (
        <Logo />
    ),
};

export const Dark: Story = {
    render: () => (
        <Logo dark />
    ),
};
