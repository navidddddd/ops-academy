import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header style={{ 
        background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)', 
        padding: '6rem 2rem', 
        textAlign: 'center', 
        borderBottom: '1px solid #334155' 
    }}>
      <div className="container">
        <h1 style={{ fontWeight: '900', fontSize: '3.5rem', marginBottom: '1rem', color: '#f8fafc' }}>
          🚀 آکادمی تخصصی زیرساخت و DevOps
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#94a3b8', maxWidth: '700px', margin: '0 auto 2.5rem auto', lineHeight: '1.8' }}>
          مرجع آموزش‌های سناریو محور، کاربردی و منطبق بر چالش‌های واقعی محیط‌های پروداکشن (Production)
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
          <Link
            className="button button--primary button--lg"
            to="/docs/rhcsa/topic-1-1"
            style={{ borderRadius: '8px', padding: '12px 35px', fontSize: '1.1rem', fontWeight: 'bold' }}>
            شروع مسیر لینوکس
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
      <main style={{ padding: '4rem 20px', maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.2rem', color: '#f8fafc', marginBottom: '1rem' }}>چرا آکادمی عملیات؟</h2>
            <p style={{ fontSize: '1.1rem', color: '#94a3b8', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                ما در اینجا تئوری نمی‌خوانیم. تمام مسیرهای یادگیری بر اساس چالش‌های واقعی شرکت‌های بزرگ فناوری و با رویکرد <strong>حل مسئله (Troubleshooting)</strong> تدوین شده‌اند.
            </p>
        </div>

        <h3 style={{ fontSize: '1.8rem', color: '#f8fafc', borderBottom: '2px solid #334155', paddingBottom: '10px', marginBottom: '20px' }}>
          🧭 مسیرهای یادگیری فعال
        </h3>

        <div className="course-grid">
            {/* کارت اول: لینوکس */}
            <div className="course-card">
                <div>
                    <div className="course-title">🐧 مسیر Linux RHCSA</div>
                    <div className="course-desc">
                        آموزش ادمینی لینوکس از صفر مطلق تا سطح آزمون بین‌المللی. ورود به دنیای خط فرمان و مدیریت سرور.
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                    <span className="course-status status-active">🟢 در حال برگزاری</span>
                    <Link to="/docs/rhcsa/topic-1-1" className="button button--sm button--primary" style={{borderRadius: '6px'}}>ورود به دوره</Link>
                </div>
            </div>

            {/* کارت دوم: داکر */}
            <div className="course-card">
                <div>
                    <div className="course-title">🐳 مسیر CNCF Docker</div>
                    <div className="course-desc">
                        درک عمیق کانتینرسازی، شبکه‌سازی داکر و استقرار معماری میکروسرویس‌ها در محیط‌های واقعی.
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                    <span className="course-status status-soon">⏳ به زودی...</span>
                    <span className="button button--sm button--secondary disabled" style={{borderRadius: '6px', opacity: 0.5, cursor: 'not-allowed'}}>قفل است</span>
                </div>
            </div>

            {/* کارت سوم: هاشی‌کورپ */}
            <div className="course-card">
                <div>
                    <div className="course-title">⚙️ ابزارهای HashiCorp</div>
                    <div className="course-desc">
                        اتوماسیون همه‌چیز! مدیریت زیرساخت به عنوان کد (IaC) و پایپ‌لاین‌های CI/CD مدرن.
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                    <span className="course-status status-draft">🔒 در حال تدوین</span>
                    <span className="button button--sm button--secondary disabled" style={{borderRadius: '6px', opacity: 0.5, cursor: 'not-allowed'}}>قفل است</span>
                </div>
            </div>
        </div>

      </main>
    </Layout>
  );
}