import React from 'react';
import CTACard from './index';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CTACard> = {
    title: 'Components/CTACard',
    component: CTACard,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
        avatarUrl: { control: 'text' },
        title: { control: 'text' },
        description: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof CTACard>;

export const Default: Story = {
    args: {
        avatarUrl: '/img/image-founder.webp',
        title: 'Be the first to test',
        description: 'Hi, I\'m Louis Graham, the founder of the company. Book a demo call with me to become a beta tester for our app and kickstart your company. Apply for access below and I’ll be in touch to schedule a call.',
    },
};
