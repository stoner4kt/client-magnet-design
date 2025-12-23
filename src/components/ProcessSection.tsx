import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { MessageCircle, Lightbulb, Code, Rocket } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    step: '01',
    title: 'Tell Us Your Goal',
    description: 'Share your project idea, technical challenge, or business objective via our contact form or a quick call.',
  },
  {
    icon: Lightbulb,
    step: '02',
    title: 'Strategic Planning',
    description: 'Receive tailored, objective advice ensuring your technical strategy aligns perfectly with your goals.',
  },
  {
    icon: Code,
    step: '03',
    title: 'Development',
    description: 'We build your custom solution with precision, keeping you informed at every milestone.',
  },
  {
    icon: Rocket,
    step: '04',
    title: 'Launch & Support',
    description: 'Your project goes live with our full support, ensuring smooth deployment and ongoing optimization.',
  },
];

const ProcessSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden bg-secondary/20">
      {/* Background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span
            className={`inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Our Process
          </span>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            How We <span className="text-gradient">Work</span>
          </h2>
          <p
            className={`text-muted-foreground text-lg max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            A streamlined approach that takes you from idea to launch with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <article
              key={step.step}
              className={`relative group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              <div className="glass-card p-8 text-center hover-lift h-full">
                <div className="relative w-20 h-20 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-accent opacity-20 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute inset-0 rounded-2xl border border-primary/30 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xs font-bold text-primary-foreground">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-display font-semibold mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
