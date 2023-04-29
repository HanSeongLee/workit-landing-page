import React, { HTMLAttributes } from 'react';
import { SocialLinkItem } from 'types/social';
import SocialLink from 'components/commons/SocialLink';

interface IProps extends HTMLAttributes<HTMLUListElement> {
    items: SocialLinkItem[];
}

const SocialContainer: React.FC<IProps> = ({ items, ...props }) => {
    return (
        <ul {...props}>
            {items.map(({ name, url }) => (
                <li key={name}>
                    <SocialLink name={name}
                                aria-label={name}
                                href={url}
                    />
                </li>
            ))}
        </ul>
    );
};

export default SocialContainer;
