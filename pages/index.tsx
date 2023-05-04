import type { NextPage } from 'next'
import styles from './style.module.scss';
import Header from 'components/commons/Header';
import HeroSection from 'components/HeroSection';
import FeatureSection from 'components/FeatureSection';
import Footer from 'components/commons/Footer';
import CTASection from 'components/CTASection';

const Home: NextPage = () => {

    const onApplyClick = () => {
        alert('Apply button clicked!');
    };

    const handleLearnMoreClick = () => {
        const featureSection = document.getElementById('feature-section');
        if (!featureSection) {
            return ;
        }
        const offset = 60;
        window.scrollTo({
            top: featureSection.offsetTop + offset,
            behavior: 'smooth',
        });
    };

    return (
        <div className={styles.home}>
            <Header onApplyClick={onApplyClick} />
            <main>
                <HeroSection onLearnMoreClick={handleLearnMoreClick} />
                <FeatureSection id={'feature-section'} />
                <CTASection onApplyClick={onApplyClick} />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
