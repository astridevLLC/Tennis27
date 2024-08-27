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
            <br/>
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
                    <a href='https://www.google.com/maps/place/107+E+Schaumburg+Rd,+Schaumburg,+IL+60194/@42.0272164,-88.0794825,16z/data=!3m1!4b1!4m6!3m5!1s0x880faf269ec75f61:0x5cd6f1426863b77e!8m2!3d42.0272164!4d-88.0769076!16s%2Fg%2F11c5nn07x7?entry=ttu&g_ep=EgoyMDI0MDgyMy4wIKXMDSoASAFQAw%3D%3D'>
                        107 E Schaumburg Rd
                        <br/>
                        Schaumburg IL 60194
                    </a>
                </Location>
            </li>
        </ul>
    )
}
