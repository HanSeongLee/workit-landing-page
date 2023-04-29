import React from 'react';
import Footer from './index';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Footer> = {
    title: 'Components/Footer',
    component: Footer,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
    render: () => <Footer />,
};
