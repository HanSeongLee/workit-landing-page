import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Container from 'components/commons/Container';
import FeatureContainer from 'containers/FeatureContainer';

interface IProps extends HTMLAttributes<HTMLDivElement> {

}

const FeatureSection: React.FC<IProps> = ({ className, ...props }) => {
    const featureItems: FeatureItemType[] = [
        {
            title: 'Actionable insights',
            description: 'Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.',
        },
        {
            title: 'Data-driven decisions',
            description: 'Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.',
        },
        {
            title: 'Always affordable',
            description: 'Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.',
        },
    ];

    return (
        <section className={cn(styles.featureSection, className)}
                 {...props}
        >
            <Container className={styles.container}>
                <FeatureContainer className={styles.featureContainer}
                                  items={featureItems}
                />
            </Container>
        </section>
    );
};

export default FeatureSection;
