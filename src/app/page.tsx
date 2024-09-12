import {type Metadata} from 'next'
import Image from 'next/image'
import Link from 'next/link'

import React from 'react';

import {ContactSection} from 'src/components/ContactSection'
import {Container} from 'src/components/Container'
import {FadeIn, FadeInStagger} from 'src/components/FadeIn'
import {List, ListItem} from 'src/components/List'
import {SectionIntro} from 'src/components/SectionIntro'
import {type CaseStudy, type MDXEntry, loadCaseStudies} from 'src/lib/mdx'

import fs from 'fs';
import path from 'path';

import {ImageSlideshow} from 'src/components/ImageSlideshowProps'
import YelpReviewTicker from 'src/components/YelpReviewTicker';

import {Clients} from 'src/components/Clients'
import {Tennis27Info} from 'src/components/Tennis27Info'
import {Information} from 'src/components/Information'




interface ServerRenderedImageSlideshowProps {
    images: string[];
}




function CaseStudies({
                         caseStudies,
                     }: {
    caseStudies: Array<MDXEntry<CaseStudy>>
}) {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-24 sm:mt-32 lg:mt-40">
                <div className="relative w-full aspect-square ml-2">
                    <Image
                        src="/images/outside-store.webp" // Update this path to your image
                        alt="Tennis Store Interior"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                </div>
                <SectionIntro
                    title="Your Trusted Partner in Tennis"
                    className="md:mt-0"
                >
                    <p className="mt-6 text-xl leading-8 text-gray-600">
                        At Tennis27, we combine cutting-edge technology with decades of tennis expertise
                        to elevate your game. From precision racket fitting to advanced stringing techniques,
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        we're committed to providing every player - beginner to pro - with the tools and
                        knowledge to excel on the court.
                    </p>
                    <p className="mt-4 text-xl leading-8 text-gray-600">
                        Experience the difference that passionate expertise and innovative solutions can
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        make in your tennis journey. Visit us and discover why we're Chicago's premier
                        destination for all things tennis.
                    </p>
                </SectionIntro>
            </div>
            <Container className="mt-16">
                <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {caseStudies.map((caseStudy) => (
                        <FadeIn key={caseStudy.href} className="flex">
                            <article
                                className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                                <h3>
                                    <Link href={caseStudy.href}>
                                        <span className="absolute inset-0 rounded-3xl"/>
                                        <Image
                                            src={caseStudy.logo}
                                            alt={caseStudy.client}
                                            className="h-16 w-16"
                                            unoptimized
                                        />
                                    </Link>
                                </h3>
                                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                                    <time
                                        dateTime={caseStudy.date.split('-')[0]}
                                        className="font-semibold"
                                    >
                                        {caseStudy.date.split('-')[0]}
                                    </time>
                                    <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                                    <span>Case study</span>
                                </p>
                                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                                    {caseStudy.title}
                                </p>
                                <p className="mt-4 text-base text-neutral-600">
                                    {caseStudy.description}
                                </p>
                            </article>
                        </FadeIn>
                    ))}
                </FadeInStagger>
            </Container>
        </>
    )
}

function Services() {
    return (
        <>
            <SectionIntro
                eyebrow="Services"
                title="We serve up excellence in every aspect of tennis."
                className="mt-24 sm:mt-32 lg:mt-40"
            >
                <p>
                    From beginner to pro, we offer a wide range of services to elevate your game
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    and ensure you're equipped with the best gear on the court.
                </p>
            </SectionIntro>
            <Container className="mt-16">
                <div className="lg:flex lg:items-center lg:justify-end">
                    <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
                        <FadeIn className="w-full max-w-[33.75rem] lg:max-w-[45rem]">
                            <div className="relative w-full aspect-square">
                                <Image
                                    src="/images/Logo-2-Tennis27.webp"
                                    alt="Tennis Rackets"
                                    objectFit="contain"
                                    width={500}
                                    height={500}
                                />
                            </div>
                        </FadeIn>
                    </div>
                    <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
                        <ListItem title="Racket Stringing">
                            Our expert technicians use state-of-the-art equipment to provide
                            precise stringing tailored to your playing style and preferences.
                            Same-day service available.
                        </ListItem>
                        <ListItem title="Custom Fitting">
                            Experience our comprehensive fitting process to find the perfect
                            racket, shoes, and gear that match your game. We analyze your
                            play style to recommend the best equipment.
                        </ListItem>
                        <ListItem title="Equipment Demos">
                            Try before you buy! Our demo program allows you to test the latest
                            rackets and gear on the court, ensuring you make the right choice
                            for your game.
                        </ListItem>
                        <ListItem title="Find Tennis Partners">
                            Connect with fellow tennis enthusiasts in your area! Our partner-matching service
                            helps you find players of similar skill levels for casual rallies, competitive matches,
                            or regular practice sessions. Expand your tennis network and enjoy more court time.
                        </ListItem>
                    </List>
                </div>
            </Container>
        </>
    )
}

export const metadata: Metadata = {
    description:
        'Tennis27 is the #1 tennis store in Chicago. We offer a wide selection of tennis racquets, shoes, apparel, and accessories.',
}

export default async function Home() {
    const caseStudies = (await loadCaseStudies()).slice(0, 3)

    return (
        <>
            <Container className="mt-32 sm:mt-40 md:mt-56">
                <FadeIn className="max-w-3xl">
                    <h1 className="font-display text-4xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-5xl md:text-7xl">
                        The <span className="text-grass">#1</span> Tennis Store in Chicago<span className="text-grass">.</span>
                    </h1>
                    <p className="mt-6 text-lg sm:text-xl text-neutral-600">
                        Tennis27 is your one stop shop for Racquets, Strings, Shoes, Bags, Balls, Over-Grips, Apparel,
                        Gifts, 24h-Stringing and Junior Tennis.
                    </p>
                </FadeIn>
            </Container>

            <Information />
            <CaseStudies caseStudies={caseStudies} />
            <Clients />
            <div className="mt-64" />
            <YelpReviewTicker />
            <Services />
            <ContactSection />
        </>
    )
}
