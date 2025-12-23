import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const highlights = [
  'Problem solver passionate about helping businesses thrive',
  'Proven track record with a focus on quality',
  'Custom-first approach for unique business needs',
  'Strategic design and development expertise',
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image/Visual */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-transparent rounded-3xl blur-2xl" />
              <div className="absolute inset-4 glass-card rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-6 flex items-center justify-center shadow-lg">
                      <span className="text-5xl font-display font-bold text-primary-foreground">TJ</span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-foreground mb-2">Tashreeq Jones</h3>
                    <p className="text-muted-foreground">Founder & Lead Developer</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 glass-card rounded-2xl flex items-center justify-center animate-float">
                <span className="text-3xl">💡</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 glass-card rounded-2xl flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-2xl">🚀</span>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <span
                className={`inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                About Me
              </span>
              <h2
                className={`text-4xl md:text-5xl font-display font-bold mb-6 transition-all duration-700 delay-100 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                Building Your <span className="text-gradient">Digital Future</span>
              </h2>
              <p
                className={`text-muted-foreground text-lg leading-relaxed mb-6 transition-all duration-700 delay-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                Hello, I'm <strong className="text-foreground">Tashreeq Jones</strong> — a dedicated professional 
                providing expert solutions to help bring your ideas to life. I believe knowledge should be 
                accessible to every individual.
              </p>
              <p
                className={`text-muted-foreground text-lg leading-relaxed transition-all duration-700 delay-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                Ever have an idea and the funding, just not the information or resources to initiate 
                your vision? I'm here to bridge that gap and help you fulfill your goals.
              </p>
            </div>

            <ul className="space-y-4">
              {highlights.map((item, index) => (
                <li
                  key={index}
                  className={`flex items-start gap-3 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                  }`}
                  style={{ transitionDelay: `${(index + 4) * 100}ms` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <div
              className={`transition-all duration-700 delay-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <Button variant="hero" size="lg" asChild>
                <a href="#contact" className="group">
                  Let's Work Together
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
