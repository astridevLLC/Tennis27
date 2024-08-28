import Link from 'next/link'

import { Container } from 'src/components/Container'
import { FadeIn } from 'src/components/FadeIn'
import { socialMediaProfiles } from 'src/components/SocialMedia'

import tennis27Logo from 'src/images/tennis27-logo-full.png';
import Image from "next/image";

const navigation = [
  {
    title: 'Tennis27',
    links: [
      { title: 'Home', href: '/' },
      { title: 'Specials', href: '/specials' },
      { title: 'Stringing', href: '/stringing' },
      { title: 'Gallery', href: '/gallery' },
    ],
  },
  {
    title: 'Connect',
    links: socialMediaProfiles,
  },
]

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
              {section.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-700">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-neutral-950"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function Footer() {
  // @ts-ignore
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <Navigation />
        </div>
        <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href="/" aria-label="Home">
            <div className="relative h-32 w-32">
              <Image
                  src={tennis27Logo}
                  alt="Tennis27 Logo"
                  fill
                  style={{objectFit: 'contain'}}
                  priority
              />
            </div>
          </Link>
          <p className="text-sm text-neutral-700">
            © Tennis27 LLC. {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
