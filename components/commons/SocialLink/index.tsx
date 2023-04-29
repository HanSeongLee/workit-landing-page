import React, { AnchorHTMLAttributes, ReactNode } from 'react';
import styles from './style.module.scss';
import { SocialName } from 'types/enums';
import cn from 'classnames';
import FacebookIcon from 'public/icons/icon-facebook.svg';
import TwitterIcon from 'public/icons/icon-twitter.svg';
import InstagramIcon from 'public/icons/icon-instagram.svg';

interface IProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    name: SocialName;
    external?: boolean;
}

const icons: { [key in SocialName]: ReactNode } = {
    [SocialName.FACEBOOK]: <FacebookIcon />,
    [SocialName.TWITTER]: <TwitterIcon />,
    [SocialName.INSTAGRAM]: <InstagramIcon />,
};

const SocialLink: React.FC<IProps> = ({ name, external, className, ...props }) => {
    return (
        <a className={cn(styles.socialLink, className)}
           target={props.target || external ? '_blank' : undefined}
           {...props}
        >
            {icons[name]}
        </a>
    );
};

SocialLink.defaultProps = {
    external: true,
};

export default SocialLink;
