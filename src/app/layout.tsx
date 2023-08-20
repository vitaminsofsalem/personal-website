import { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: `TypeScript starter for Next.js`,
  description: `TypeScript starter for Next.js that includes all you need to build amazing apps`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="nav-wrapper">
          <Link className="logo" href="/">
            Amr Shawki
          </Link>
          <ul className="navbar">
            <li>
              <Link className="navItem" href="/aboutme">
                About Me
              </Link>
            </li>
            <li>
              <Link className="navItem" href="/portfolio">
                Portfolio
              </Link>
            </li>
            <li>
              <Link className="navItem" href="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className="navItem" href="/contactme">
                Contact Me
              </Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
