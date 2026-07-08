export default function Features() {
  const features = [
    {
      title: "یادگیری مبتنی بر سناریو",
      description:
        "خداحافظی با تئوری‌های خسته‌کننده! تمام آموزش‌های ما بر اساس چالش‌ها و سناریوهای واقعی در محیط Production طراحی شده‌اند.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
          />
        </svg>
      ),
      color: "from-blue-500 to-cyan-400",
    },
    {
      title: "مستندات ساختاریافته",
      description:
        "دقیقاً مثل سایت‌های مرجع جهانی، مفاهیم پیچیده زیرساخت را به صورت طبقه‌بندی شده، قدم‌به‌قدم و با کدهای آماده و رنگی یاد می‌گیرید.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
          />
        </svg>
      ),
      color: "from-indigo-500 to-purple-400",
    },
    {
      title: "کاملاً رایگان و متن‌باز",
      description:
        "ما معتقدیم دانش باید آزاد باشد. تمام دوره‌ها، آزمایشگاه‌ها و مقالات آکادمی برای همیشه رایگان و در دسترس همه متخصصان ایرانی خواهد بود.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
          />
        </svg>
      ),
      color: "from-emerald-500 to-teal-400",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
          چرا <span className="text-blue-600">Ops Academy</span>؟
        </h2>
        <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto">
          ما مسیر تبدیل شدن به یک مهندس زیرساخت و دواپس را برای شما هموار
          کرده‌ایم.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1"
          >
            <div
              className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
            >
              {feature.icon}
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 mb-3">
              {feature.title}
            </h3>
            <p className="text-slate-500 leading-relaxed font-medium">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
