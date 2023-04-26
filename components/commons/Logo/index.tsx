import React, { AnchorHTMLAttributes } from 'react';
import styles from './style.module.scss';
import Link from 'next/link';
import LogoLight from 'public/logo-light.svg';
import LogoDark from 'public/logo-dark.svg';

interface IProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    dark?: boolean;
}

const Logo: React.FC<IProps> = ({ dark, ...props }) => {
    return (
        <Link href={'/'}
              {...props}
        >
            <h1 className={styles.logo}
                title={'workit'}
            >
                {!dark ? (<LogoLight />) : (<LogoDark />)}
            </h1>
        </Link>
    );
};

Logo.defaultProps = {
    dark: false,
};

export default Logo;
