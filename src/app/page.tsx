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


import asicsLogo from '@/images/dealer-logos/asics-logo.png';
import babolatLogo from '@/images/dealer-logos/babolat-logo.png';
import dunlopLogo from '@/images/dealer-logos/dunlop-logo.png';
import headLogo from '@/images/dealer-logos/head-logo.png';
import newBalanceLogo from '@/images/dealer-logos/newbalance-logo.png';
import solincoLogo from '@/images/dealer-logos/solinco-logo.png';
import technifibreLogo from '@/images/dealer-logos/technifibre-logo.png';
import genesisLogo from '@/images/dealer-logos/genesis-logo.png';
import volklLogo from '@/images/dealer-logos/volkl-logo.png';
import wilsonLogo from '@/images/dealer-logos/wilson-logo.png';
import yonexLogo from '@/images/dealer-logos/yonex-logo.png';


const clients = [
    {name: 'Asics', logo: asicsLogo, url: '#'},
    {name: 'Babolat', logo: babolatLogo, url: '#'},
    {name: 'Dunlop', logo: dunlopLogo, url: '#'},
    {name: 'Head', logo: headLogo, url: '#'},
    {name: 'New Balance', logo: newBalanceLogo, url: '#'},
    {name: 'Solinco', logo: solincoLogo, url: '#'},
    {name: 'Technifibre', logo: technifibreLogo, url: '#'},
    {name: 'Genesis', logo: genesisLogo, url: '#'},
    {name: 'Volkl', logo: volklLogo, url: '#'},
    {name: 'Wilson', logo: wilsonLogo, url: '#'},
    {name: 'Yonex', logo: yonexLogo, url: '#'},
]


export function Clients() {
    return (
        <div className="mt-16 mb-32 rounded-4xl bg-grass py-20 sm:mt-16 sm:py-20 lg:mt-64">
            <Container>
                <FadeIn className="flex items-center gap-x-8">
                    <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
                        We are an authorized dealer for
                    </h2>
                    <div className="h-px flex-auto bg-white"/>
                </FadeIn>
                <FadeIn>
                    <ul
                        role="list"
                        className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-10"
                    >
                        {clients.map((client, index) => (
                            <li
                                key={client.name}
                                className="flex items-center justify-center w-[calc(50%-1rem)] sm:w-[calc(25%-1.5rem)]"
                            >
                                <FadeIn>
                                    <div className="w-40 h-20 relative">
                                        <Image
                                            src={client.logo}
                                            alt={client.name}
                                            fill
                                            style={{objectFit: 'contain'}}
                                            unoptimized
                                        />
                                    </div>
                                </FadeIn>
                            </li>
                        ))}
                    </ul>
                </FadeIn>
            </Container>
        </div>
    )
}

interface ServerRenderedImageSlideshowProps {
    images: string[];
}

function getImagePaths(): string[] {
    const imageDirectory = path.join(process.cwd(), 'public/images/slideshow');

    if (!fs.existsSync(imageDirectory)) {
        console.error(`Directory not found: ${imageDirectory}`);
        return [];
    }

    const imageFilenames = fs.readdirSync(imageDirectory);
    const supportedExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.avif'];

    return imageFilenames
        .filter(filename => supportedExtensions.includes(path.extname(filename).toLowerCase()))
        .map(filename => `/images/slideshow/${filename}`);
}


const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
);

const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
);

const AwardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"></circle>
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
    </svg>
);

const RacketIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 3v4"></path>
        <path d="M14 3v4"></path>
        <path d="M13 7h2a4 4 0 0 1 4 4v8a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-8a4 4 0 0 1 4-4h2"></path>
        <path d="M10 7V3"></path>
        <path d="M14 7V3"></path>
    </svg>
);

const InfoItem = ({icon: Icon, title, children}) => (
    <div className="flex items-start mb-4">
        <div className="text-yellow-400 mr-3 mt-1 flex-shrink-0">
            <Icon/>
        </div>
        <div>
            <h4 className="font-semibold text-lg text-yellow-400 mb-1">{title}</h4>
            <p className="text-white">{children}</p>
        </div>
    </div>
);

export function Tennis27Info() {
    return (
        <div className="bg-grass p-6 rounded-lg h-full">
            <h3 className="font-bold mb-6 text-white text-2xl border-b border-yellow-400 pb-2">Tennis27 Information</h3>

            <InfoItem icon={UsersIcon} title="Get Involved">
                Stop by Tennis27 store to check our Demo program and learn more about getting involved in local tennis
                leagues, find hitting partners, and tennis pros!
            </InfoItem>

            <InfoItem icon={MailIcon} title="Stay Updated">
                Join the Tennis27 mailing list to receive the latest news, exclusive offers and special discounts
                available only
                to subscribers!
            </InfoItem>

            <InfoItem icon={AwardIcon} title="Professional Services">
                Professional tennis, racquetball and badminton stringing on the newest High Tech Babolat Racket Station,
                with same day turnaround.
            </InfoItem>

            <InfoItem icon={RacketIcon} title="Wide Selection">
                <span className="font-semibold">Tennis strings: </span> Luxilon, Babolat, Wilson, Head, Dunlop,
                Tecnifibre, Genesis, Yonex, Solinco, Volkl.
            </InfoItem>
        </div>
    );
}

export function Information() {
    const images = getImagePaths();

    return (
        <div className="mt-32 rounded-4xl bg-grass py-20 sm:mt-32 sm:py-20 lg:mt-64">
            <Container>
                <FadeIn className="flex items-center gap-x-8">
                    <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
                        Tennis27
                    </h2>
                    <div className="h-px flex-auto bg-white"/>
                </FadeIn>
                <FadeIn>
                    <div className="mt-10 flex flex-col md:flex-row gap-8">
                        <div className="w-full md:w-1/2">
                            <Tennis27Info/>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center">
                            <ImageSlideshow images={images}/>
                        </div>
                    </div>
                </FadeIn>
            </Container>
        </div>
    )
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
                        we're committed to providing every player - beginner to pro - with the tools and
                        knowledge to excel on the court.
                    </p>
                    <p className="mt-4 text-xl leading-8 text-gray-600">
                        Experience the difference that passionate expertise and innovative solutions can
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
    let caseStudies = (await loadCaseStudies()).slice(0, 3)

    return (
        <>
            <Container className="mt-32 sm:mt-40 md:mt-56"> {/* Increased top margin for mobile */}
                <FadeIn className="max-w-3xl">
                    <h1 className="font-display text-4xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-5xl md:text-7xl">
                        The <span className="text-grass">#1</span> Tennis Store in Chicago<span
                        className="text-grass">.</span>
                    </h1>
                    <p className="mt-6 text-lg sm:text-xl text-neutral-600">
                        Tennis27 is your one stop shop for Racquets, Strings, Shoes, Bags, Balls, Over-Grips, Apparel,
                        Gifts, 24h-Stringing and Junior Tennis.
                    </p>
                </FadeIn>
            </Container>

            <Information/>

            <CaseStudies caseStudies={caseStudies}/>

            <Clients/>

            <br className="mt-64"/>

            <YelpReviewTicker />

            <Services/>

            <ContactSection/>
        </>
    )
}
