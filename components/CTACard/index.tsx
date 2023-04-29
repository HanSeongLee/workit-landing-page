import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Button from 'components/commons/Button';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    avatarUrl: string;
    title: string;
    description: string;
    onApplyClick: () => void;
}

const CTACard: React.FC<IProps> = ({
                                       avatarUrl, title, description, onApplyClick,
                                       className, ...props
                                   }) => {
    return (
        <article className={cn(styles.ctaCard, className)}
                 {...props}
        >
            <img className={styles.avatar}
                 src={avatarUrl}
                 alt={''}
            />

            <div className={styles.body}>
                <h3 className={styles.title}>
                    {title}
                </h3>
                <p className={styles.description}>
                    {description}
                </p>

                <div className={styles.buttonContainer}>
                    <Button onClick={onApplyClick}>
                        Apply for access
                    </Button>
                </div>
            </div>
        </article>
    );
};

export default CTACard;
