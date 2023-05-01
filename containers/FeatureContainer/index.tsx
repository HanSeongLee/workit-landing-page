import React, { ElementType } from 'react';
import FeatureCard from 'components/FeatureCard';

interface IProps<T extends ElementType = 'ol' | 'ul'> {
    as?: T;
    className?: string;
    items: FeatureItemType[];
}

const FeatureContainer: React.FC<IProps> = ({ as='ol', items, ...props }) => {
    return (
        React.createElement(
            as,
            props,
            (
                <>
                    {items.map(({ title, description }, index) => (
                        <li key={index}>
                            <FeatureCard title={title}
                                         description={description}
                            />
                        </li>
                    ))}
                </>
            )
        )
    );
};

FeatureContainer.defaultProps = {
    as: 'ol',
};

export default FeatureContainer;
