import React from 'react';
import SocialLink from './index';
import { Meta, StoryObj } from '@storybook/react';
import { SocialName } from 'types/enums';

const meta: Meta<typeof SocialLink> = {
    title: 'Components/SocialLink',
    component: SocialLink,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
        name: {
            control: 'radio',
            options: Object.values(SocialName),
        },
        href: { control: 'text' },
        external: { control: 'boolean' },
    },
};

export default meta;

type Story = StoryObj<typeof SocialLink>;

export const Facebook: Story = {
    args: {
        name: SocialName.FACEBOOK,
    },
};

export const Twitter: Story = {
    args: {
        name: SocialName.TWITTER,
    },
};

export const Instagram: Story = {
    args: {
        name: SocialName.INSTAGRAM,
    },
};
