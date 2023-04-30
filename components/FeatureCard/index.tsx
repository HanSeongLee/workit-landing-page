import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    description: string;
}

const FeatureCard: React.FC<IProps> = ({ title, description, className, ...props }) => {
    return (
        <article className={cn(styles.featureCard, className)}
                 {...props}
        >
            <h3 className={styles.title}>
                {title}
            </h3>
            <p className={styles.description}>
                {description}
            </p>
        </article>
    );
};

export default FeatureCard;
