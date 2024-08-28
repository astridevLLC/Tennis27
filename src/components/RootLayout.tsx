'use client'

import {
    createContext,
    useContext,
    useEffect,
    useId,
    useRef,
    useState,
} from 'react'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import clsx from 'clsx'
import {motion, MotionConfig, useReducedMotion} from 'framer-motion'

import {Button} from 'src/components/Button'
import {Container} from 'src/components/Container'
import {Footer} from 'src/components/Footer'
import {GridPattern} from 'src/components/GridPattern'
import {SocialMedia} from 'src/components/SocialMedia'
import {Locations} from "@/components/Locations";
import Image from 'next/image'

import tennis27Logo from 'src/images/tennis27-logo-full.png';

import tennisCourt from '/images/tennis-court.png';


const RootLayoutContext = createContext<{
    logoHovered: boolean
    setLogoHovered: React.Dispatch<React.SetStateAction<boolean>>
} | null>(null)

function XIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z"/>
            <path d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z"/>
        </svg>
    )
}

function MenuIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path d="M2 6h20v2H2zM2 16h20v2H2z"/>
        </svg>
    )
}

function Header({
                    panelId,
                    icon: Icon,
                    expanded,
                    onToggle,
                    toggleRef,
                    invert = false,
                }: {
    panelId: string
    icon: React.ComponentType<{ className?: string }>
    expanded: boolean
    onToggle: () => void
    toggleRef: React.RefObject<HTMLButtonElement>
    invert?: boolean
}) {
    return (
        <Container>
            <div className="flex items-center justify-between">
                <Link
                    href="/"
                    aria-label="Home"
                >
                    <div className="relative h-48 w-48">
                        <Image
                            src={tennis27Logo}
                            alt="Tennis27 Logo"
                            fill
                            style={{objectFit: 'contain'}}
                            priority
                        />
                    </div>
                </Link>
                <div className="flex items-center gap-x-8">
                    <Button
                        href="/contact"
                        invert={invert}
                        className={clsx(
                            'border-t border-b',
                            invert ? 'border-white' : 'border-neutral-950'
                        )}
                    >
                        Contact us
                    </Button>
                    <button
                        ref={toggleRef}
                        type="button"
                        onClick={onToggle}
                        aria-expanded={expanded ? 'true' : 'false'}
                        aria-controls={panelId}
                        className={clsx(
                            'group -m-2.5 rounded-full p-2.5 transition',
                            invert ? 'hover:bg-white/10' : 'hover:bg-clay/10',
                        )}
                        aria-label="Toggle navigation"
                    >
                        <Icon
                            className={clsx(
                                'h-6 w-6',
                                invert
                                    ? 'fill-white group-hover:fill-neutral-200'
                                    : 'fill-grass group-hover:fill-neutral-700',
                            )}
                        />
                    </button>
                </div>
            </div>
        </Container>
    )
}


function DoublesAlley() {
    return (
        <div className="bg-clay">
            <div className="h-20 relative border-b-[1px] border-t-[1px] border-white">
                <div className="absolute inset-y-0 left-1/2 w-px bg-white"/>
            </div>
        </div>
    );
}

function NoManLand() {
    return (
        <div className="noman bg-clay w-1/2"/>
    );
}

// @ts-ignore
function Court({ type }) {
    const pathname = usePathname();
    let href;
    if (type == 'Home') {
        href = `/`;
    } else {
        href = `/${type.toLowerCase()}`;
    }
    const isActive = pathname === href;
    const isRightSide = type === 'Specials' || type === 'Gallery';

    return (
        <Link href={href} className={`${type} bg-clay h-32 w-full relative flex items-center justify-center cursor-pointer transition-colors duration-300 hover:bg-clayDark`}>
            <span className="text-white text-3xl font-semibold">{type}</span>
            <div className="absolute inset-y-0 left-0 w-px bg-white"/>
            {isRightSide && <div className="absolute inset-y-0 right-0 w-px bg-white"/>}
        </Link>
    );
}
// @ts-ignore
function CourtSide({ side }) {
    return (
        <div className={`flex flex-row w-1/2`}>
            {side === 'left' && <NoManLand />}
            <div className="flex flex-col w-1/2">
                <Court type={side === 'left' ? 'Home' : 'Specials'} />
                <hr className="border-t border-white" />
                <Court type={side === 'left' ? 'Stringing' : 'Gallery'} />
            </div>
            {side === 'right' && <NoManLand />}
        </div>
    );
}

export default function Navigation() {
    return (
        <nav className="mt-px font-display text-5xl font-medium tracking-tight text-white">
            <DoublesAlley/>
            <div className="flex flex-row relative">
                <CourtSide side="left" />
                <div className="absolute inset-y-0 left-1/2 w-px bg-white"/>
                <CourtSide side="right" />
            </div>
            <DoublesAlley/>
        </nav>
    );
}

function RootLayoutInner({children}: { children: React.ReactNode }) {
    let panelId = useId()
    let [expanded, setExpanded] = useState(false)
    let openRef = useRef<React.ElementRef<'button'>>(null)
    let closeRef = useRef<React.ElementRef<'button'>>(null)
    let navRef = useRef<React.ElementRef<'div'>>(null)
    let shouldReduceMotion = useReducedMotion()

    useEffect(() => {
        function onClick(event: MouseEvent) {
            if (
                event.target instanceof HTMLElement &&
                event.target.closest('a')?.href === window.location.href
            ) {
                setExpanded(false)
            }
        }

        window.addEventListener('click', onClick)

        return () => {
            window.removeEventListener('click', onClick)
        }
    }, [])

    return (
        <MotionConfig transition={shouldReduceMotion ? {duration: 0} : undefined}>
            <header>
                <div
                    className="absolute left-0 right-0 top-2 z-40 pt-14 bg-"
                    aria-hidden={expanded ? 'true' : undefined}
                    // @ts-ignore (https://github.com/facebook/react/issues/17157)
                    inert={expanded ? '' : undefined}
                >
                    <Header
                        panelId={panelId}
                        icon={MenuIcon}
                        toggleRef={openRef}
                        expanded={expanded}
                        onToggle={() => {
                            setExpanded((expanded) => !expanded)
                            window.setTimeout(() =>
                                closeRef.current?.focus({preventScroll: true}),
                            )
                        }}
                    />
                </div>

                <motion.div
                    layout
                    id={panelId}
                    style={{height: expanded ? 'auto' : '0.5rem'}}
                    className="relative z-50 overflow-hidden pt-2 "
                    aria-hidden={expanded ? undefined : 'true'}
                    // @ts-ignore (https://github.com/facebook/react/issues/17157)
                    inert={expanded ? undefined : ''}
                >
                    <motion.div layout className="bg-white">
                        <div ref={navRef} className="bg-grass pb-4 pt-14 border-b-white">
                            <Header
                                invert
                                panelId={panelId}
                                icon={XIcon}
                                toggleRef={closeRef}
                                expanded={expanded}
                                onToggle={() => {
                                    setExpanded((expanded) => !expanded)
                                    window.setTimeout(() =>
                                        openRef.current?.focus({preventScroll: true}),
                                    )
                                }}
                            />
                        </div>
                        <Navigation/>
                        <div
                            className="relative bg-grass before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-white">
                            <Container>
                                <div className="grid grid-cols-1 gap-y-10 pb-16 pt-10 sm:grid-cols-2 sm:pt-16">
                                    <div>
                                        <h2 className="font-display text-base font-semibold text-white">
                                            Our Location
                                        </h2>
                                        <Locations
                                            invert
                                            className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
                                        />
                                    </div>
                                    <div className="sm:border-l sm:border-transparent sm:pl-16">
                                        <h2 className="font-display text-base font-semibold text-white">
                                            Check us out
                                        </h2>
                                        <SocialMedia className="mt-6" invert/>

                                        <h2 className="font-display text-base font-semibold text-white mt-10">
                                            {/*Email*/}
                                            <a href="mailto:Tennis27@mail.com" className="text-white">
                                                Tennis27@mail.com
                                            </a>
                                        </h2>

                                        <h2 className="font-display text-base font-semibold text-white mt-2">
                                            {/*phone number*/}
                                            <a href="tel:224-518-7471" className="text-white">
                                                (224) 518-7471
                                            </a>
                                        </h2>

                                    </div>
                                </div>
                            </Container>
                        </div>
                    </motion.div>
                </motion.div>
            </header>

            <motion.div
                layout
                style={{borderTopLeftRadius: 40, borderTopRightRadius: 40}}
                className="relative flex flex-auto overflow-hidden bg-white pt-14"
            >
            <motion.div
                    layout
                    className="relative isolate flex w-full flex-col pt-9"
                >
                    <GridPattern
                        className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-neutral-50 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
                        yOffset={-96}
                        interactive
                    />

                    <main className="w-full flex-auto">{children}</main>

                    <Footer/>
                </motion.div>
            </motion.div>
        </MotionConfig>
    )
}

export function RootLayout({children}: { children: React.ReactNode }) {
    let pathname = usePathname()
    let [logoHovered, setLogoHovered] = useState(false)

    return (
        <RootLayoutContext.Provider value={{logoHovered, setLogoHovered}}>
            <RootLayoutInner key={pathname}>{children}</RootLayoutInner>
        </RootLayoutContext.Provider>
    )
}
