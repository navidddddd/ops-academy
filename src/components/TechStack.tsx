export default function TechStack() {
  // لیست ابزارها (شما می‌تونید هر چیزی به این لیست اضافه کنید)
  const technologies = [
    "Linux (RHEL/Ubuntu)",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Ansible",
    "Prometheus",
    "Grafana",
    "Git & GitHub",
    "CI/CD Pipelines",
    "Bash Scripting",
    "Python",
    "AWS",
  ];

  // برای اینکه اسکرول بی‌نهایت بدون پرش کار کنه، آرایه رو دو بار تکرار می‌کنیم
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <section className="py-10 border-y border-slate-200 bg-slate-50 overflow-hidden relative my-16">
      {/* افکت محو شدگی (Fading) در سمت راست و چپ برای زیبایی بیشتر */}
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>

      {/* کانتینر متحرک */}
      <div className="flex items-center gap-12 w-max animate-scroll pr-12">
        {duplicatedTechs.map((tech, index) => (
          <div
            key={index}
            dir="ltr"
            className="flex items-center gap-3 text-slate-400 font-extrabold text-xl opacity-70 hover:opacity-100 hover:text-blue-600 transition-all cursor-default"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
            <span className="whitespace-nowrap">{tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
