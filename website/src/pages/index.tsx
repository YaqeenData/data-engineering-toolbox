import type {ReactNode} from 'react';
import clsx from 'clsx';
import Head from '@docusaurus/Head';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

import styles from './index.module.css';

// Homepage learning destinations
const learningPaths = [
  {
    title: 'Data Engineer Roadmap',
    description:
      'Your complete learning journey, from computing fundamentals to designing and maintaining production data systems.',
    href: '/docs/roadmaps/careers/data-engineer',
    label: 'Full learning path',
  },
  {
    title: 'SQL Roadmap',
    description:
      'Start with your first SQL query and progress toward advanced concepts, query optimization, and engineering trade-offs.',
    href: '/docs/roadmaps/tools/sql',
    label: 'Tool roadmap',
  },
  {
    title: 'Start Here',
    description:
      'Discover how to use the Toolbox, navigate learning paths, and approach hands-on experiments.',
    href: '/docs/intro',
    label: 'Getting started',
  },
];

// Hero section
function HomepageHeader(): ReactNode {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <p className={styles.heroEyebrow}>
          LEARN · EXPERIMENT · ENGINEER
        </p>

        <Heading as="h1" className="hero__title">
          Data Engineering, beyond the basics.
        </Heading>

        <p className="hero__subtitle">
          From the fundamentals to real-world engineering
          decisions. Explore concepts, understand trade-offs,
          investigate common errors, and learn through
          practical experiments.
        </p>

        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/roadmaps/careers/data-engineer"
          >
            Explore the Roadmap
          </Link>

          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Start Here
          </Link>
        </div>
      </div>
    </header>
  );
}

// Learning path cards
function LearningPaths(): ReactNode {
  return (
    <section
      className={styles.pathsSection}
      aria-labelledby="learning-paths-title"
    >
      <Heading
        as="h2"
        id="learning-paths-title"
        className={styles.sectionTitle}
      >
        Choose where to begin
      </Heading>

      <p className={styles.sectionDescription}>
        Follow the complete Data Engineering roadmap,
        focus on a particular tool, or explore the Toolbox
        at your own pace.
      </p>

      <div className={styles.cardGrid}>
        {learningPaths.map((path, index) => (
          <Link
            key={path.href}
            to={path.href}
            className={clsx(
              styles.learningCard,
              index === 0 && styles.featuredCard,
            )}
          >
            <span className={styles.cardLabel}>
              {path.label}
            </span>

            <Heading as="h3" className={styles.cardTitle}>
              {path.title}
            </Heading>

            <p className={styles.cardDescription}>
              {path.description}
            </p>

            <span className={styles.cardAction}>
              Explore →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

// Main homepage
export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  return (

  <Layout
    title="Home"
    description="Datum — Data Engineering, Beyond the Basics."
  >

      <main>
        <HomepageHeader />
        <LearningPaths />
      </main>
    </Layout>
  );
}