import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import FeatureCard from './index';

const meta: Meta<typeof FeatureCard> = {
    title: 'Components/FeatureCard',
    component: FeatureCard,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
        title: { control: 'text' },
        description: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof FeatureCard>;

export const Default: Story = {
    args: {
        title: 'Actionable insights',
        description: 'Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.',
    },
};
