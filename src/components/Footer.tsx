import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-border/30 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-1 group">
            <span className="text-xl font-display font-bold text-foreground transition-all duration-300 group-hover:text-primary">
              Conext
            </span>
            <span className="text-xl font-display font-bold text-gradient">Sol</span>
          </a>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {['Home', 'Services', 'About', 'Testimonials', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-secondary border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-border/20 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ConextSol. All rights reserved. Built with passion by{' '}
            <span className="text-gradient font-medium">Tashreeq Jones</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
