import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title="خانه" description="پایگاه دانش مهندسی زیرساخت و DevOps">
      
      {/* هدر اصلی با گرادیان مشکی عمیق */}
      <header style={{ background: 'linear-gradient(180deg, #030712 0%, #111827 100%)', padding: '6rem 2rem', textAlign: 'center', borderBottom: '1px solid #1f2937' }}>
        <div className="container">
          <h1 style={{ fontWeight: '900', fontSize: '3.5rem', marginBottom: '1rem', color: '#f9fafb', textShadow: '0 4px 20px rgba(139, 92, 246, 0.3)' }}>
            آکادمی تخصصی زیرساخت و DevOps
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#9ca3af', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
            مرجع آموزش‌های سناریو محور و مبتنی بر محیط‌های پروداکشن واقعی.
          </p>
        </div>
      </header>

      {/* بخش دوره‌ها */}
      <main style={{ padding: '5rem 20px', maxWidth: '1100px', margin: '0 auto', direction: 'rtl' }}>
        <h3 style={{ fontSize: '1.6rem', borderBottom: '2px solid var(--ifm-color-emphasis-200)', paddingBottom: '15px', marginBottom: '40px', color: 'var(--ops-heading-color)' }}>
          🧭 مسیرهای یادگیری
        </h3>

        <div className="course-row-container">
          
          {/* ردیف اول: لینوکس */}
          <div className="course-row">
            <div className="course-icon">🐧</div>
            <div className="course-details">
              <div className="course-title">مسیر جامع Linux RHCSA</div>
              <div className="course-desc">
                لینوکس شوخی‌بردار نیست! در این دوره از صفر مطلق تا سطح آزمون بین‌المللی RedHat پیش می‌رویم. یاد می‌گیریم چگونه سرورها را مدیریت کنیم، دسترسی‌ها را کنترل کنیم و اسکریپت‌های حیاتی بنویسیم.
              </div>
            </div>
            <div className="course-action">
              <div style={{color: '#06b6d4', fontWeight: 'bold', marginBottom: '12px', letterSpacing: '1px'}}>⚡ در حال برگزاری</div>
              <Link to="/docs/rhcsa/topic-1-1" className="button button--primary button--lg" style={{width: '100%', borderRadius: '8px', boxShadow: '0 4px 15px rgba(139,92,246,0.4)'}}>ورود به دوره</Link>
            </div>
          </div>

          {/* ردیف دوم: داکر */}
          <div className="course-row">
            <div className="course-icon">🐳</div>
            <div className="course-details">
              <div className="course-title">مسیر CNCF Docker</div>
              <div className="course-desc">
                خداحافظی با مشکل "روی سیستم من کار میکرد!". درک عمیق کانتینرسازی، مدیریت Volumeها، شبکه‌سازی بین کانتینرها و استقرار معماری میکروسرویس‌ها در محیط‌های واقعی.
              </div>
            </div>
            <div className="course-action">
              <div style={{color: '#8b5cf6', fontWeight: 'bold', marginBottom: '12px'}}>⏳ به زودی...</div>
              <span className="button button--secondary button--lg disabled" style={{width: '100%', borderRadius: '8px', opacity: 0.3}}>قفل است</span>
            </div>
          </div>

          {/* ردیف سوم: کوبرنیتیز */}
          <div className="course-row">
            <div className="course-icon">☸️</div>
            <div className="course-details">
              <div className="course-title">مسیر Kubernetes CKA</div>
              <div className="course-desc">
                زمانی که تعداد کانتینرها زیاد می‌شود، به یک رهبر نیاز داریم. آموزش ارکستریشن کانتینرها، مدیریت کلاسترها، تامین امنیت و دیپلوی اپلیکیشن‌های مقیاس‌پذیر در محیط‌های ابری.
              </div>
            </div>
            <div className="course-action">
              <div style={{color: '#8b5cf6', fontWeight: 'bold', marginBottom: '12px'}}>⏳ به زودی...</div>
              <span className="button button--secondary button--lg disabled" style={{width: '100%', borderRadius: '8px', opacity: 0.3}}>قفل است</span>
            </div>
          </div>

          {/* ردیف چهارم: هاشی‌کورپ */}
          <div className="course-row">
            <div className="course-icon">⚙️</div>
            <div className="course-details">
              <div className="course-title">جعبه‌ابزار HashiCorp</div>
              <div className="course-desc">
                اتوماسیون همه‌چیز! ورود به دنیای مدیریت زیرساخت به عنوان کد (IaC) با Terraform، مدیریت امن و متمرکز پسوردها با Vault و ایجاد یکپارچگی در سرویس‌ها با Consul.
              </div>
            </div>
            <div className="course-action">
              <div style={{color: '#8b5cf6', fontWeight: 'bold', marginBottom: '12px'}}>⏳ به زودی...</div>
              <span className="button button--secondary button--lg disabled" style={{width: '100%', borderRadius: '8px', opacity: 0.3}}>قفل است</span>
            </div>
          </div>

        </div>
      </main>
    </Layout>
  );
}