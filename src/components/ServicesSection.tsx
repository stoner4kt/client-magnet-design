import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Code, Palette, Lightbulb, Bot, Layers, MessageSquare } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom-built, responsive websites that perform flawlessly across all devices and drive conversions.',
  },
  {
    icon: Bot,
    title: 'AI Websites',
    description: 'Cutting-edge AI-powered web applications with intelligent features and automation capabilities.',
  },
  {
    icon: Palette,
    title: 'Logo Design',
    description: 'Memorable brand identities that capture your vision and resonate with your target audience.',
  },
  {
    icon: Lightbulb,
    title: 'Technical Consulting',
    description: 'Strategic guidance to optimize your technology stack and accelerate digital transformation.',
  },
  {
    icon: Layers,
    title: 'Custom Solutions',
    description: 'Bespoke software tailored to your unique business requirements and operational needs.',
  },
  {
    icon: MessageSquare,
    title: 'Right Advice',
    description: 'Objective, expert recommendations ensuring your tech strategy aligns with your business goals.',
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id="services" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span
            className={`inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            What We Offer
          </span>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Our <span className="text-gradient">Services</span>
          </h2>
          <p
            className={`text-muted-foreground text-lg max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Transforming ideas into digital reality with our comprehensive suite of technology services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`group glass-card p-8 hover-lift transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 text-foreground group-hover:text-gradient transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
