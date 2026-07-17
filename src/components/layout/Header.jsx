import React from 'react'
import { Tally2 } from 'lucide-react';

const navigation = [
    {
        id: 1,
        title: "Home",
        href: "#hero",
    },
    {
        id: 2,
        title: "Studio",
        href: "#studio",
    },
    {
        id: 3,
        title: "Services",
        href: "#services",
    },
    {
        id: 4,
        title: "Contact",
        href: "#contact",
    },
    {
        id: 5,
        title: "FAQs",
        href: "#faqs",
    },
];

const Header = () => {
    return (
        <nav className=' justify-between flex py-6'>
            <h3>Elementum</h3>

            <div className='flex gap-8 text-sm text-black'>
                {navigation.map((item) => (
                    <a key={item.id} href={item.href}>
                        {item.title}
                    </a>
                ))}
            </div>


            <div>
                <Tally2 className='rotate-90 size-8' />
            </div>
        </nav>
    )
}

export default Header