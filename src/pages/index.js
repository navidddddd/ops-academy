import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header style={{ 
        background: 'linear-gradient(180deg, #0b1121 0%, #162032 100%)', 
        padding: '5rem 2rem', 
        textAlign: 'center', 
        borderBottom: '1px solid #1e293b' 
    }}>
      <div className="container">
        <h1 style={{ fontWeight: '900', fontSize: '3rem', marginBottom: '1rem', color: '#f8fafc' }}>
          آکادمی تخصصی زیرساخت و DevOps
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: '750px', margin: '0 auto 2.5rem auto', lineHeight: '1.8' }}>
          مرجع آموزش‌های سناریو محور، کاربردی و منطبق بر چالش‌های واقعی محیط‌های پروداکشن. ورود به دنیای خط فرمان از اینجا آغاز می‌شود.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
          <Link
            className="button button--primary button--lg"
            to="/docs/rhcsa/topic-1-1"
            style={{ borderRadius: '6px', padding: '10px 30px', fontSize: '1.1rem', fontWeight: 'bold' }}>
            شروع مسیر لینوکس 🚀
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
      <main style={{ padding: '4rem 20px', maxWidth: '1200px', margin: '0 auto', direction: 'rtl' }}>
        
        <h3 style={{ fontSize: '1.6rem', color: '#f8fafc', borderBottom: '2px solid #1e293b', paddingBottom: '15px', marginBottom: '30px' }}>
          🧭 مسیرهای یادگیری
        </h3>

        <div className="course-grid">
            {/* کارت ۱: لینوکس */}
            <div className="course-card">
                <div>
                    <div className="course-title">🐧 مسیر Linux RHCSA</div>
                    <div className="course-desc">
                        آموزش ادمینی لینوکس از صفر تا سطح آزمون بین‌المللی RedHat. قلب تپنده تمام سیستم‌های زیرساختی.
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                    <span className="status-badge status-active">در حال برگزاری</span>
                    <Link to="/docs/rhcsa/topic-1-1" className="button button--sm button--primary" style={{borderRadius: '4px'}}>ورود به دوره</Link>
                </div>
            </div>

            {/* کارت ۲: داکر */}
            <div className="course-card">
                <div>
                    <div className="course-title">🐳 مسیر CNCF Docker</div>
                    <div className="course-desc">
                        درک عمیق کانتینرسازی، مدیریت Imageها و استقرار معماری میکروسرویس‌ها در محیط‌های واقعی.
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                    <span className="status-badge status-soon">به زودی</span>
                    <span className="button button--sm button--secondary disabled" style={{borderRadius: '4px', opacity: 0.4}}>قفل است</span>
                </div>
            </div>

            {/* کارت ۳: کوبرنیتیز (اضافه شده برای ۴ تایی شدن) */}
            <div className="course-card">
                <div>
                    <div className="course-title">☸️ مسیر Kubernetes CKA</div>
                    <div className="course-desc">
                        ارکستریشن کانتینرها، مدیریت کلاسترها و دیپلوی اپلیکیشن‌های مقیاس‌پذیر در محیط ابری.
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                    <span className="status-badge status-soon">به زودی</span>
                    <span className="button button--sm button--secondary disabled" style={{borderRadius: '4px', opacity: 0.4}}>قفل است</span>
                </div>
            </div>

            {/* کارت ۴: هاشی‌کورپ */}
            <div className="course-card">
                <div>
                    <div className="course-title">⚙️ ابزارهای HashiCorp</div>
                    <div className="course-desc">
                        اتوماسیون همه‌چیز! مدیریت زیرساخت به عنوان کد (IaC) با Terraform و امنیت با Vault.
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                    <span className="status-badge status-soon">به زودی</span>
                    <span className="button button--sm button--secondary disabled" style={{borderRadius: '4px', opacity: 0.4}}>قفل است</span>
                </div>
            </div>
        </div>

      </main>
    </Layout>
  );
}