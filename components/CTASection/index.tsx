import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Container from 'components/commons/Container';
import CTACard from 'components/CTACard';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    onApplyClick: () => void;
}

const CTASection: React.FC<IProps> = ({ onApplyClick, className, ...props }) => {
    return (
        <section className={cn(styles.ctaSection, className)}
                 {...props}
        >
            <Container className={styles.container}>
                <CTACard avatarUrl={'/img/image-founder.webp'}
                         title={'Be the first to test'}
                         description={'Hi, I\'m Louis Graham, the founder of the company. Book a demo call with me to become a beta tester for our app and kickstart your company. Apply for access below and I’ll be in touch to schedule a call.'}
                         onApplyClick={onApplyClick}
                />
            </Container>
        </section>
    );
};

export default CTASection;
