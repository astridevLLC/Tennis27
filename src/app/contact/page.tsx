import { useId } from 'react'
import { type Metadata } from 'next'
import Link from 'next/link'

import { Border } from 'src/components/Border'
import { Button } from 'src/components/Button'
import { Container } from 'src/components/Container'
import { FadeIn } from 'src/components/FadeIn'
import { Offices } from 'src/components/Offices'
import { PageIntro } from 'src/components/PageIntro'
import { SocialMedia } from 'src/components/SocialMedia'
import {Locations} from "@/components/Locations";

function TextInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}


function ContactForm() {
  return (
    <FadeIn className="lg:order-last">
      <form>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Contact us with any questions
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" autoComplete="name" />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
          />
          <TextInput className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl" label="Message" name="message" />
        </div>
        <Button type="submit" className="mt-10">
            Send message
        </Button>
      </form>
    </FadeIn>
  )
}

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        Our Shop Location
      </h2>
      <p className="mt-6 text-base text-neutral-600">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
        Can't wait to hear back? Visit us in person at our shop location.
      </p>

      <Locations className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />

      <Border className="mt-10 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Email us directly
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ['Tennis27', 'tennis27@mail.com'],
          ].map(([label, email]) => (
            <div key={email}>
              <dt className="font-semibold text-neutral-950">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-neutral-600 hover:text-neutral-950"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Follow us
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  )
}

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with us to learn more about our shop.',
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact us" title="Get in touch to learn more.">
        <p>We can’t wait to hear from you.</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
