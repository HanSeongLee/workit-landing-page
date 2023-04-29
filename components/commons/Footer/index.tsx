import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Container from 'components/commons/Container';
import Logo from 'components/commons/Logo';
import SocialContainer from 'containers/SocialContainer';
import { SocialLinkItem } from 'types/social';
import { SocialName } from 'types/enums';

interface IProps extends HTMLAttributes<HTMLDivElement> {

}

const Footer: React.FC<IProps> = ({ className, ...props }) => {
    const socialLinkItems: SocialLinkItem[] = [
        { name: SocialName.FACEBOOK, url: '#facebook' },
        { name: SocialName.TWITTER, url: '#twitter' },
        { name: SocialName.INSTAGRAM, url: '#instagram' },
    ];

    return (
        <footer className={cn(styles.footer, className)}
                {...props}
        >
            <Container className={styles.container}>
                <Logo dark />
                <SocialContainer className={styles.socialContainer}
                                 items={socialLinkItems}
                />
            </Container>
        </footer>
    );
};

export default Footer;
