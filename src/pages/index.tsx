import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title="Home" description="Personal website of Liang Lee">
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
              I am a PhD student at the Institute of Neuroscience, National Yang
              Ming Chiao Tung University (NYCU), working in the Brain
              Connectivity Lab and Brain Plasticity Lab. My research lies at the
              intersection of cognitive neuroscience and artificial intelligence,
              with interests spanning large language models, explainable AI,
              Bayesian inference, and deep learning applied to neural and
              behavioral data.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
