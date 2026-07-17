import { useState } from 'react'
import { Tally2, X } from 'lucide-react';

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
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className='justify-between flex py-6 px-4 md:px-8 lg:px-0 items-center relative'>
            <h3>Elementum</h3>

            {/* Desktop nav links */}
            <div className='hidden md:flex gap-8 text-sm text-black'>
                {navigation.map((item) => (
                    <a key={item.id} href={item.href}>
                        {item.title}
                    </a>
                ))}
            </div>

            {/* Desktop hamburger icon */}
            <div className='hidden md:block'>
                <Tally2 className='rotate-90 size-8' />
            </div>

            {/* Mobile menu toggle */}
            <button
                className='md:hidden'
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
            >
                {mobileMenuOpen ? <X className='size-7' /> : <Tally2 className='rotate-90 size-7' />}
            </button>

            {/* Mobile dropdown menu */}
            {mobileMenuOpen && (
                <div className='absolute top-full left-0 right-0 bg-white shadow-lg z-50 flex flex-col items-center gap-4 py-6 md:hidden'>
                    {navigation.map((item) => (
                        <a
                            key={item.id}
                            href={item.href}
                            className='text-sm text-black'
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item.title}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    )
}

export default Header