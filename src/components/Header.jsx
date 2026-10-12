import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react';
import { useState } from 'react';

export default function Header({ copy, language, setLanguage, theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { label: copy.nav.work, href: '#work' },
    { label: copy.nav.about, href: '#about' },
    { label: copy.nav.internship, href: '#internship' },
    { label: copy.nav.contact, href: '#contact' },
  ];
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#top" className="brand" aria-label="16alves02 home" onClick={closeMenu}>
          <img className="brand-logo" src="/logo.svg" alt="" />
          <span className="brand-wordmark">16alves02<span>.</span></span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link, index) => (
            <a key={link.href} href={link.href}><span className="nav-index mono">0{index + 1}</span>{link.label}</a>
          ))}
        </nav>

        <div className="header-actions">
          <button className="icon-button" type="button" aria-label={theme === 'dark' ? copy.themeLight : copy.themeDark} title={theme === 'dark' ? copy.themeLight : copy.themeDark} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button className="language-button mono" type="button" onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')} aria-label={language === 'en' ? 'Mudar idioma para português' : 'Switch language to English'}>{copy.language}</button>
          <a className="header-contact" href="#contact">{copy.nav.sayHello}<ArrowUpRight size={14} /></a>
          <button className="mobile-toggle" type="button" aria-expanded={menuOpen} aria-label={menuOpen ? copy.closeMenu : copy.openMenu} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </div>

      {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{links.map((link, index) => <a key={link.href} href={link.href} onClick={closeMenu}><span className="nav-index mono">0{index + 1}</span>{link.label}<ArrowUpRight size={15} /></a>)}<a href="#contact" onClick={closeMenu} className="mobile-nav-cta">{copy.nav.sayHello}<ArrowUpRight size={15} /></a></nav>}
    </header>
  );
}
