import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Container from 'components/commons/Container';
import Button from 'components/commons/Button';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    onLearnMoreClick: () => void;
}

const HeroSection: React.FC<IProps> = ({ onLearnMoreClick, className, ...props }) => {
    return (
        <section className={cn(styles.heroSection, className)}
                 {...props}
        >
            <Container className={styles.container}>
                <h2 className={styles.title}>
                    Data <strong>tailored</strong> to {` 
                    your needs.`}
                </h2>
                <Button onClick={onLearnMoreClick}>
                    Learn more
                </Button>

                <img className={styles.heroImage}
                     src={'/img/image-hero.webp'}
                     alt={'Hero Image'}
                />
            </Container>
        </section>
    );
};

export default HeroSection;
