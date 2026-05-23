import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () =>
      window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }

    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-background/90 border-b border-border shadow-md'
          : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          onClick={(e) =>
            scrollToSection(e, '#home')
          }
          className="text-xl font-bold text-cyan-400"
        >
          SAURAV.OS
        </a>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex items-center gap-8">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) =>
                scrollToSection(
                  e,
                  link.href
                )
              }
              className="text-sm text-muted-foreground hover:text-primary transition"
            >
              {link.name}
            </a>
          ))}

          <ThemeToggle />
        </nav>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">

          <ThemeToggle />

          <button
            onClick={() =>
              setIsOpen(!isOpen)
            }
            className="p-2"
          >
            {isOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed top-16 inset-x-0 bg-background z-[9999] border-b border-border shadow-xl md:hidden">

          <ul className="flex flex-col p-5 gap-5">

            {navLinks.map((link) => (
              <li key={link.name}>

                <a
                  href={link.href}
                  onClick={(e) =>
                    scrollToSection(
                      e,
                      link.href
                    )
                  }
                  className="block text-base font-medium hover:text-primary"
                >
                  {link.name}
                </a>

              </li>
            ))}

          </ul>

        </div>
      )}
    </header>
  );
}