// NavMenuItems.tsx
import React from 'react';

export interface NavItem {
  id: number;
  label: string;
  link: string;
}

const navItems: NavItem[] = [
    { id: 1, label: 'Home', link: '/' },
    { id: 2, label: 'About', link: '/about' },
    { id: 3, label: 'Services', link: '/services' },
    { id: 4, label: 'Contact', link: '/contact' },
    { id: 5, label: 'Products', link: '/products' },
    { id: 6, label: 'Blog', link: '/blog' },
    { id: 7, label: 'Portfolio', link: '/portfolio' },
    { id: 8, label: 'Team', link: '/team' },
    { id: 9, label: 'FAQ', link: '/faq' },
    { id: 10, label: 'Support', link: '/support' },
    
    // Repeat the pattern for more items
  ];

const NavMenuItems: React.FC = () => {
  return (
    <nav>
      {navItems.map((item) => (
        <a key={item.id} href={item.link} className="block py-2 px-6 hover:bg-primary hover:text-primary-foreground hover:rounded-lg hover:mx-3">
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default NavMenuItems;
