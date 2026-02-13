import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useColorMode} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HeroContent(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  const {colorMode} = useColorMode();
  const labLogo = colorMode === 'dark' ? '/img/LabLogoWhite.png' : '/img/LabLogoBlack.png';
  return (
    <main className={styles.heroContainer}>
      <div className={styles.heroInner}>
        <div className={styles.photoSide}>
          <img
            src="/img/profile.jpg"
            alt="Liang Lee"
            className={styles.profilePhoto}
          />
        </div>
        <div className={styles.bioSide}>
          <Heading as="h1">{siteConfig.title}</Heading>
          <p className={styles.tagline}>{siteConfig.tagline}</p>
          <p className={styles.bioText}>
            Hi! I'm a PhD student at TU Darmstadt{' '}
            <a href="https://www.tu-darmstadt.de/" target="_blank" rel="noopener noreferrer">
              <img src="/img/tuda_logo_RGB.svg" alt="TU Darmstadt" className={styles.inlineIcon} />
            </a>,
            <br/>
            where I'm supervised by <a href="https://hmc-lab.com/people/charley_wu/index.md">Charley Wu</a> 
            <br/>
            in the <a href="https://hmc-lab.com/">Human and Machine Cognition Lab</a>{' '}
            <a href="https://hmc-lab.com/" target="_blank" rel="noopener noreferrer">
              <img src={labLogo} alt="HMC Lab" className={styles.inlineIcon} />
            </a>.
          </p>
        </div>
      </div>
    </main>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout title="Home" description="Personal website of Liang Lee">
      <HeroContent />
    </Layout>
  );
}
