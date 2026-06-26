import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

function HomepageHeader() {
  return (
    <header style={{ 
        background: 'linear-gradient(180deg, var(--ifm-background-color) 0%, var(--ifm-background-surface-color) 100%)', 
        padding: '5rem 2rem', 
        textAlign: 'center', 
        borderBottom: '1px solid var(--ifm-color-emphasis-200)' 
    }}>
      <div className="container">
        <h1 style={{ fontWeight: '900', fontSize: '3.2rem', marginBottom: '1rem', color: 'var(--ifm-heading-color)' }}>
          آکادمی تخصصی زیرساخت و DevOps
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--ifm-color-content-secondary)', maxWidth: '750px', margin: '0 auto 2.5rem auto', lineHeight: '1.8' }}>
          مرجع آموزش‌های سناریو محور، کاربردی و منطبق بر چالش‌های واقعی محیط‌های پروداکشن. ورود به دنیای خط فرمان از اینجا آغاز می‌شود.
        </p>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout title="خانه" description="پایگاه دانش مهندسی زیرساخت و DevOps">
      <HomepageHeader />
      <main style={{ padding: '4rem 20px', maxWidth: '1000px', margin: '0 auto', direction: 'rtl' }}>
        
        <h3 style={{ fontSize: '1.6rem', borderBottom: '2px solid var(--ifm-color-emphasis-200)', paddingBottom: '15px', marginBottom: '30px', color: 'var(--ifm-heading-color)' }}>
          🧭 مسیرهای یادگیری
        </h3>

        {/* دوره اول */}
        <div className="course-row">
            <div className="course-icon">🐧</div>
            <div className="course-content">
                <div className="course-title">مسیر Linux RHCSA</div>
                <div className="course-desc">آموزش ادمینی لینوکس از صفر تا سطح آزمون بین‌المللی RedHat. قلب تپنده تمام سیستم‌های زیرساختی.</div>
            </div>
            <div className="course-action">
                <span style={{color: '#10b981', fontWeight: 'bold', fontSize: '0.95rem'}}>🟢 در حال برگزاری</span>
                <Link to="/docs/rhcsa/topic-1-1" className="button button--primary" style={{borderRadius: '6px', minWidth: '130px'}}>ورود به دوره</Link>
            </div>
        </div>

        {/* دوره دوم */}
        <div className="course-row">
            <div className="course-icon">🐳</div>
            <div className="course-content">
                <div className="course-title">مسیر CNCF Docker</div>
                <div className="course-desc">درک عمیق کانتینرسازی، مدیریت Imageها و استقرار معماری میکروسرویس‌ها در محیط‌های واقعی.</div>
            </div>
            <div className="course-action">
                <span style={{color: '#3b82f6', fontWeight: 'bold', fontSize: '0.95rem'}}>⏳ به زودی</span>
                <span className="button button--secondary disabled" style={{borderRadius: '6px', opacity: 0.5, minWidth: '130px'}}>قفل است</span>
            </div>
        </div>

        {/* دوره سوم */}
        <div className="course-row">
            <div className="course-icon">☸️</div>
            <div className="course-content">
                <div className="course-title">مسیر Kubernetes CKA</div>
                <div className="course-desc">ارکستریشن کانتینرها، مدیریت کلاسترها و دیپلوی اپلیکیشن‌های مقیاس‌پذیر در محیط ابری.</div>
            </div>
            <div className="course-action">
                <span style={{color: '#3b82f6', fontWeight: 'bold', fontSize: '0.95rem'}}>⏳ به زودی</span>
                <span className="button button--secondary disabled" style={{borderRadius: '6px', opacity: 0.5, minWidth: '130px'}}>قفل است</span>
            </div>
        </div>

        {/* دوره چهارم */}
        <div className="course-row">
            <div className="course-icon">⚙️</div>
            <div className="course-content">
                <div className="course-title">ابزارهای HashiCorp</div>
                <div className="course-desc">اتوماسیون همه‌چیز! مدیریت زیرساخت به عنوان کد (IaC) با Terraform و امنیت با Vault.</div>
            </div>
            <div className="course-action">
                <span style={{color: '#3b82f6', fontWeight: 'bold', fontSize: '0.95rem'}}>⏳ به زودی</span>
                <span className="button button--secondary disabled" style={{borderRadius: '6px', opacity: 0.5, minWidth: '130px'}}>قفل است</span>
            </div>
        </div>

      </main>
    </Layout>
  );
}