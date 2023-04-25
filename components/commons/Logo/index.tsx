import React, { AnchorHTMLAttributes } from 'react';
import styles from './style.module.scss';
import Link from 'next/link';

interface IProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    dark?: boolean;
}

const Logo: React.FC<IProps> = ({ dark, ...props }) => {
    const suffix = dark ? 'dark' : 'light';

    return (
        <Link href={'/'}
              {...props}
        >
            <h1 className={styles.logo}>
                <img src={`/logo-${suffix}.svg`}
                     alt={'workit'}
                />
            </h1>
        </Link>
    );
};

export default Logo;
