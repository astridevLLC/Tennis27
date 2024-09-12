import React from 'react';
import Image from 'next/image';
import { Container } from 'src/components/Container';
import { FadeIn, FadeInStagger } from 'src/components/FadeIn';

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
                        {clients.map((client) => (
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

export default Clients;