import React from 'react';

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

// @ts-ignore
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
                available only to subscribers!
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