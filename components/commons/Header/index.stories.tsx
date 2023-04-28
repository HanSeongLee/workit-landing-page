import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Header from './index';

const meta: Meta<typeof Header> = {
    title: 'Components/Header',
    component: Header,
    tags: ['autodocs'],
    argTypes: {
        onApplyClick: { action: 'apply clicked' },
        className: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
    render: () => (
        <Header onApplyClick={() => alert('Apply clicked')} />
    ),
};
