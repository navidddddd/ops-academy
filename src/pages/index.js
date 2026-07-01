import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout title="Home" description="Ops Academy Infrastructure and DevOps Knowledge Base">
      
      {/* Hero Section */}
      <header style={{ 
          background: 'linear-gradient(180deg, var(--ifm-background-color) 0%, var(--ifm-background-surface-color) 100%)', 
          padding: '8rem 2rem', textAlign: 'center', borderBottom: '1px solid var(--ops-border-color)' 
      }}>
        <div className="container">
          <h1 style={{ fontWeight: '900', fontSize: '3.5rem', marginBottom: '1.5rem', color: 'var(--ops-heading-color)', letterSpacing: '-1px' }}>
            پایگاه دانش مهندسی زیرساخت و DevOps
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--ops-text-color)', maxWidth: '750px', margin: '0 auto', lineHeight: '2' }}>
            ما در اینجا تئوری نمی‌خوانیم. تمام مسیرهای یادگیری بر اساس چالش‌های واقعی در شرکت‌های بزرگ فناوری و با رویکرد <strong>حل مسئله (Troubleshooting)</strong> تدوین شده‌اند. ورود به دنیای خط فرمان از اینجا آغاز می‌شود.
          </p>
        </div>
      </header>

      {/* Courses Section */}
      <main style={{ padding: '5rem 20px', maxWidth: '1200px', margin: '0 auto', direction: 'rtl' }}>
        <h3 style={{ fontSize: '1.4rem', borderBottom: '2px solid var(--ops-border-color)', paddingBottom: '15px', marginBottom: '30px', color: 'var(--ops-heading-color)' }}>
          مسیرهای آموزشی
        </h3>

        <div className="course-row-container">
          
          {/* Course 1: Linux */}
          <div className="course-row">
            <div className="course-icon">🐧</div>
            <div className="course-details">
              <div className="course-title">مسیر جامع Linux RHCSA</div>
              <div className="course-desc">
                لینوکس شوخی‌بردار نیست! در این دوره از صفر مطلق تا سطح آزمون بین‌المللی RedHat پیش می‌رویم. یاد می‌گیریم چگونه سرورها را در محیط‌های پروداکشن مدیریت کنیم، پرمیشن‌ها را کنترل کنیم و اسکریپت‌های حیاتی بنویسیم.
              </div>
            </div>
            <div className="course-action">
              <div style={{color: '#10b981', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '10px'}}>🟢 در حال برگزاری</div>
              <Link to="/docs/rhcsa/topic-1-1" className="button button--primary button--lg" style={{width: '100%', borderRadius: '6px', fontSize: '1rem'}}>ورود به دوره</Link>
            </div>
          </div>

          {/* Course 2: Docker */}
          <div className="course-row">
            <div className="course-icon">🐳</div>
            <div className="course-details">
              <div className="course-title">مسیر CNCF Docker</div>
              <div className="course-desc">
                خداحافظی با مشکل "روی سیستم من کار می‌کرد!". درک عمیق معماری کانتینرها، مدیریت Volumeها، شبکه‌سازی ایزوله و استقرار میکروسرویس‌ها با استفاده از Docker Compose در محیط‌های واقعی.
              </div>
            </div>
            <div className="course-action">
              <div style={{color: '#6366f1', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '10px'}}>⏳ به زودی...</div>
              <span className="button button--secondary button--lg disabled" style={{width: '100%', borderRadius: '6px', opacity: 0.5, fontSize: '1rem'}}>قفل است</span>
            </div>
          </div>

          {/* Course 3: Kubernetes */}
          <div className="course-row">
            <div className="course-icon">☸️</div>
            <div className="course-details">
              <div className="course-title">مسیر Kubernetes CKA</div>
              <div className="course-desc">
                زمانی که تعداد کانتینرها سر به فلک می‌کشد، به یک رهبر نیاز داریم. آموزش تخصصی ارکستریشن، مدیریت کلاسترها، تامین امنیت و دیپلوی اپلیکیشن‌های مقیاس‌پذیر در زیرساخت‌های Cloud-Native.
              </div>
            </div>
            <div className="course-action">
              <div style={{color: '#6366f1', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '10px'}}>⏳ به زودی...</div>
              <span className="button button--secondary button--lg disabled" style={{width: '100%', borderRadius: '6px', opacity: 0.5, fontSize: '1rem'}}>قفل است</span>
            </div>
          </div>

          {/* Course 4: HashiCorp */}
          <div className="course-row">
            <div className="course-icon">⚙️</div>
            <div className="course-details">
              <div className="course-title">جعبه‌ابزار HashiCorp</div>
              <div className="course-desc">
                اتوماسیون همه‌چیز! ورود به دنیای Infrastructure as Code (IaC) با Terraform، مدیریت امنیتی و متمرکز Secretها با Vault و ایجاد Service Mesh قدرتمند با Consul.
              </div>
            </div>
            <div className="course-action">
              <div style={{color: '#6366f1', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '10px'}}>⏳ به زودی...</div>
              <span className="button button--secondary button--lg disabled" style={{width: '100%', borderRadius: '6px', opacity: 0.5, fontSize: '1rem'}}>قفل است</span>
            </div>
          </div>

        </div>
      </main>
    </Layout>
  );
}