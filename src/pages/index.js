import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout title="Home" description="Ops Academy Infrastructure and DevOps Knowledge Base">
      
      {/* Hero Section */}
      <header className="hero-gradient" style={{ padding: '7rem 2rem', textAlign: 'center', borderBottom: '1px solid var(--ops-border-color)' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontWeight: '900', fontSize: '3.8rem', marginBottom: '1.5rem', color: 'var(--ops-heading-color)' }}>
            آکادمی تخصصی زیرساخت و DevOps
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--ops-text-color)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.9' }}>
            مرجع آموزش‌های سناریو محور و مبتنی بر چالش‌های محیط‌های پروداکشن واقعی.
            <br/> این‌جا نقطه پایان تئوری‌ها و آغاز ورود به خط فرمان است.
          </p>
        </div>
      </header>

      {/* Courses Section (Removed forced inline RTL to let Docusaurus handle it) */}
      <main style={{ padding: '5rem 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <h3 style={{ fontSize: '1.6rem', borderBottom: '2px solid var(--ops-border-color)', paddingBottom: '15px', marginBottom: '40px', color: 'var(--ops-heading-color)' }}>
          🧭 مسیرهای یادگیری
        </h3>

        <div className="course-row-container">
          
          {/* Course 1: Linux RHCSA */}
          <div className="course-row">
            <div className="course-icon">🐧</div>
            <div className="course-details">
              <div className="course-title">مسیر جامع Linux RHCSA</div>
              <div className="course-desc">
                لینوکس شوخی‌بردار نیست! در این دوره از صفر مطلق تا سطح آزمون بین‌المللی RedHat پیش می‌رویم. یاد می‌گیریم چگونه سرورها را مدیریت کنیم، دسترسی‌ها را کنترل کنیم و اسکریپت‌های حیاتی بنویسیم.
              </div>
            </div>
            <div className="course-action">
              <div style={{color: '#10b981', fontWeight: 'bold', marginBottom: '12px', letterSpacing: '1px'}}>⚡ در حال برگزاری</div>
              <Link to="/docs/rhcsa/topic-1-1" className="button button--primary button--lg" style={{width: '100%', borderRadius: '8px'}}>ورود به دوره</Link>
            </div>
          </div>

          {/* Course 2: Docker */}
          <div className="course-row">
            <div className="course-icon">🐳</div>
            <div className="course-details">
              <div className="course-title">مسیر CNCF Docker</div>
              <div className="course-desc">
                خداحافظی با مشکل "روی سیستم من کار میکرد!". درک عمیق کانتینرسازی، مدیریت Volumeها، شبکه‌سازی بین کانتینرها و استقرار معماری میکروسرویس‌ها در محیط‌های واقعی.
              </div>
            </div>
            <div className="course-action">
              <div style={{color: '#6366f1', fontWeight: 'bold', marginBottom: '12px'}}>⏳ به زودی...</div>
              <span className="button button--secondary button--lg disabled" style={{width: '100%', borderRadius: '8px', opacity: 0.5}}>قفل است</span>
            </div>
          </div>

          {/* Course 3: Kubernetes */}
          <div className="course-row">
            <div className="course-icon">☸️</div>
            <div className="course-details">
              <div className="course-title">مسیر Kubernetes CKA</div>
              <div className="course-desc">
                زمانی که تعداد کانتینرها زیاد می‌شود، به یک رهبر نیاز داریم. آموزش ارکستریشن کانتینرها، مدیریت کلاسترها، تامین امنیت و دیپلوی اپلیکیشن‌های مقیاس‌پذیر در محیط‌های ابری.
              </div>
            </div>
            <div className="course-action">
              <div style={{color: '#6366f1', fontWeight: 'bold', marginBottom: '12px'}}>⏳ به زودی...</div>
              <span className="button button--secondary button--lg disabled" style={{width: '100%', borderRadius: '8px', opacity: 0.5}}>قفل است</span>
            </div>
          </div>

        </div>
      </main>
    </Layout>
  );
}