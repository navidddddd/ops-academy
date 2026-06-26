import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header style={{ backgroundColor: 'var(--ifm-background-surface-color)', padding: '6rem 0', textAlign: 'center', borderBottom: '1px solid var(--ifm-color-emphasis-200)' }}>
      <div className="container">
        <h1 style={{ fontWeight: '900', fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--ifm-color-primary)' }}>
          {siteConfig.title}
        </h1>
        <p style={{ fontSize: '1.5rem', color: 'var(--ifm-color-emphasis-700)', marginBottom: '2.5rem' }}>
          {siteConfig.tagline}
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
          <Link
            className="button button--primary button--lg"
            to="/docs/rhcsa/topic-1-1"
            style={{ borderRadius: '50px', padding: '12px 30px', fontSize: '1.2rem', fontWeight: 'bold', boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)' }}>
            شروع مسیر لینوکس 🐧
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="#"
            style={{ borderRadius: '50px', padding: '12px 30px', fontSize: '1.2rem', fontWeight: 'bold' }}>
            دوره CNCF Docker 🐳
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="خانه"
      description="پایگاه دانش مهندسی زیرساخت و DevOps">
      <HomepageHeader />
      <main style={{ padding: '5rem 20px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>چرا آکادمی عملیات؟</h2>
        <p style={{ fontSize: '1.15rem', lineHeight: '2', color: 'var(--ifm-color-emphasis-800)' }}>
          ما در اینجا تئوری نمی‌خوانیم. تمام مسیرهای یادگیری بر اساس چالش‌های واقعی در شرکت‌های بزرگ فناوری و با رویکرد <strong>حل مسئله (Troubleshooting)</strong> تدوین شده‌اند. ورود به دنیای خط فرمان از اینجا آغاز می‌شود.
        </p>
      </main>
    </Layout>
  );
}