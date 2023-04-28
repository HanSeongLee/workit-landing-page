import React, { HTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './style.module.scss';
import Container from 'components/commons/Container';
import Logo from 'components/commons/Logo';
import Button from 'components/commons/Button';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    onApplyClick: () => void;
}

const Header: React.FC<IProps> = ({ onApplyClick, className, ...props }) => {
    return (
        <header className={cn(styles.header, className)}
                {...props}
        >
            <Container className={styles.container}>
                <Logo />

                <nav>
                    <Button variant={'link'}
                            onClick={onApplyClick}
                    >
                        Apply for access
                    </Button>
                </nav>
            </Container>
        </header>
    );
};

export default Header;
