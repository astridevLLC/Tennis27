import {type Metadata} from 'next'
import Image from 'next/image'
import Link from 'next/link'

import {ContactSection} from 'src/components/ContactSection'
import {Container} from 'src/components/Container'
import {FadeIn, FadeInStagger} from 'src/components/FadeIn'
import {List, ListItem} from 'src/components/List'
import {SectionIntro} from 'src/components/SectionIntro'
import {StylizedImage} from 'src/components/StylizedImage'
import {Testimonial} from 'src/components/Testimonial'
import logoPhobiaDark from 'src/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from 'src/images/clients/phobia/logo-light.svg'
import imageLaptop from 'src/images/laptop.jpg'
import {type CaseStudy, type MDXEntry, loadCaseStudies} from 'src/lib/mdx'

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
        <div className="mt-32 rounded-4xl bg-grass py-20 sm:mt-32 sm:py-20 lg:mt-64">
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

export function Information() {
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
                    <div className="flex flex-row">
                        <div>
                            <p className="mt-10 text-center text-white text-2xl">
                                Stop by Tennis27 store to check our Demo program and learn more about getting involved
                                in local tennis leagues, find hitting partners, and tennis pros!
                            </p>

                            {/*<p className="mt-10 text-center text-white text-lg">*/}
                            {/*    Join Tennis27 mailing list to receive the latest news, exclusive offers and special*/}
                            {/*    discounts available only to subscribers!*/}
                            {/*</p>*/}
                        </div>
                        {/*image slide show*/}
                        <div className="mt-10">
                            <div className="flex justify-center">
                                <div className="relative w-40 h-40">
                                    <Image
                                        src={logoPhobiaLight}
                                        alt="Phobia"
                                        fill
                                        style={{objectFit: 'contain'}}
                                        unoptimized
                                    />
                                </div>
                            </div>
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
            <SectionIntro
                title="Harnessing technology for a brighter future"
                className="mt-24 sm:mt-32 lg:mt-40"
            >
                <p>
                    We believe technology is the answer to the world’s greatest
                    challenges. It’s also the cause, so we find ourselves in bit of a
                    catch 22 situation.
                </p>
            </SectionIntro>
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
                title="We help you identify, explore and respond to new opportunities."
                className="mt-24 sm:mt-32 lg:mt-40"
            >
                <p>
                    As long as those opportunities involve giving us money to re-purpose
                    old projects — we can come up with an endless number of those.
                </p>
            </SectionIntro>
            <Container className="mt-16">
                <div className="lg:flex lg:items-center lg:justify-end">
                    <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
                        <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
                            <StylizedImage
                                src={imageLaptop}
                                sizes="(min-width: 1024px) 41rem, 31rem"
                                className="justify-center lg:justify-end"
                            />
                        </FadeIn>
                    </div>
                    <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
                        <ListItem title="Web development">
                            We specialise in crafting beautiful, high quality marketing pages.
                            The rest of the website will be a shell that uses lorem ipsum
                            everywhere.
                        </ListItem>
                        <ListItem title="Application development">
                            We have a team of skilled developers who are experts in the latest
                            app frameworks, like Angular 1 and Google Web Toolkit.
                        </ListItem>
                        <ListItem title="E-commerce">
                            We are at the forefront of modern e-commerce development. Which
                            mainly means adding your logo to the Shopify store template we’ve
                            used for the past six years.
                        </ListItem>
                        <ListItem title="Custom content management">
                            At Studio we understand the importance of having a robust and
                            customised CMS. That’s why we run all of our client projects out
                            of a single, enormous Joomla instance.
                        </ListItem>
                    </List>
                </div>
            </Container>
        </>
    )
}

export const metadata: Metadata = {
    description:
        'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
    let caseStudies = (await loadCaseStudies()).slice(0, 3)

    return (
        <>
            <Container className="mt-24 sm:mt-32 md:mt-56">
                <FadeIn className="max-w-3xl">
                    <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
                        The <span className="text-grass">#1</span> Tennis Shop in Chicago<span
                        className="text-grass">.</span>
                    </h1>
                    <p className="mt-6 text-xl text-neutral-600">
                        Tennis27 is your one stop shop for Racquets, Strings, Shoes, Bags, Balls, Over-Grips, Apparel,
                        Gifts, 24h-Stringing and Junior Tennis.
                    </p>
                </FadeIn>
            </Container>

            <Information/>

            <CaseStudies caseStudies={caseStudies}/>

            <Clients/>

            <Testimonial
                className="mt-24 sm:mt-32 lg:mt-40"
                client={{name: 'Phobia', logo: logoPhobiaDark}}
            >
                The team at Studio went above and beyond with our onboarding, even
                finding a way to access the user’s microphone without triggering one of
                those annoying permission dialogs.
            </Testimonial>

            <Services/>

            <ContactSection/>
        </>
    )
}
