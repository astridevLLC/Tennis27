import clsx from 'clsx'

function Location({
                    name,
                    children,
                    invert = false,
                }: {
    name: string
    children: React.ReactNode
    invert?: boolean
}) {
    return (
        <address
            className={clsx(
                'text-sm not-italic',
                invert ? 'text-neutral-300' : 'text-neutral-600',
            )}
        >
            <strong className={invert ? 'text-white' : 'text-neutral-950'}>
                {name}
            </strong>
            <br />
            {children}
        </address>
    )
}

export function Locations({
                            invert = false,
                            ...props
                        }: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
    return (
        <ul role="list" {...props}>
            <li>
                <Location name="Tennis27 Schaumburg" invert={invert}>
                    107 E Schaumburg Rd
                    <br />
                    Schaumburg IL 60194
                </Location>
            </li>
        </ul>
    )
}
