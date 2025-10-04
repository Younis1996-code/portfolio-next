import Link from 'next/link';
import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';

interface FooterLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

const footerSocialLinks: FooterLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/Younis1996-code',
    icon: <FaGithub />,
  },
  {
    name: 'Telegram',
    url: 'https://t.me/YounisIssa96',
    icon: <FaTelegram />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/younis-issa',
    icon: <FaLinkedin />,
  },
  {
    name: 'Email',
    url: 'https://younisissa205@gmail.com',
    icon: <FaEnvelope />,
  },

];

const Footer = () => {
  return (
    <footer className="w-full flex justify-center items-center bg-transparent mt-25 lg:mt-40 mb-6 lg:mb-8">
      <nav aria-label="Social media links">
        <ul className="flex gap-6 border-t border-Grey-20 pt-6 lg:pt-8">
          {footerSocialLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                title={link.name}
                className="text-Grey-60/60 text-2xl md:text-3xl lg:text-4xl xl:text-5xl transition-colors hover:text-Grey-60"
              >
                {link.icon}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  )
}

export default Footer



// className="w-18 h-18 md:w-20 md:h-20 lg:w-21 lg:h-21 xl:w-25 xl:h-25"
