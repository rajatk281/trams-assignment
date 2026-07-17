import FooterColumn from "../ui/FooterColumn"
const footerLinks = [
    {
        title: "Company",
        links: [
            "Home",
            "Studio",
            "Service",
            "Blog",
        ],
    },
    {
        title: "Terms & Policies",
        links: [
            "Privacy Policy",
            "Terms & Conditions",
            "Explore",
            "Accessibility",
        ],
    },
    {
        title: "Follow Us",
        links: [
            "Instagram",
            "LinkedIn",
            "Youtube",
            "Twitter",
        ],
    },
    {
        title: "Terms & Policies",
        links: [
            {
                text: "1498w Fluton ste, STE\n2D Chicgo, IL 63867.",
                className: "mb-8",
            },
            {
                text: "(123) 456789000",
                className: "mb-8",
            },
            {
                text: "info@elementum.com",
            },
        ],
    },
];

const Footer = () => {
    return (
        <div className='w-full bg-[#d9ebcf] relative px-4 py-8 md:py-16'>
            <div className='flex justify-center'>
                <svg width="178" height="123" viewBox="0 0 178 123" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5435 122.809C13.2662 123.214 14.1804 122.956 14.5854 122.233L21.1855 110.457C21.5905 109.734 21.333 108.82 20.6103 108.415C19.8876 108.01 18.9735 108.267 18.5684 108.99L12.7017 119.458L2.23359 113.591C1.51092 113.186 0.596747 113.444 0.191733 114.167C-0.213281 114.889 0.0442324 115.803 0.766905 116.208L12.5435 122.809ZM13.2769 121.5L14.7207 121.093C13.2467 115.861 14.7418 106.161 25.4135 94.9465C36.0671 83.7509 55.7637 71.1882 90.2238 60.4319L89.7769 59L89.3299 57.5681C54.59 68.4118 34.37 81.1824 23.2402 92.8785C12.1286 104.555 9.97373 115.306 11.8331 121.907L13.2769 121.5ZM89.7769 59L90.2238 60.4319C124.946 49.5938 146.763 37.4335 159.932 26.5565C173.03 15.7387 177.777 6.00587 177.777 1.64509e-05L176.277 0L174.777 -1.64509e-05C174.777 4.6608 170.874 13.628 158.022 24.2435C145.241 34.7998 123.808 46.8062 89.3299 57.5681L89.7769 59Z" fill="#FF6D6D" />
                </svg>
                <svg width="178" height="123" viewBox="0 0 178 123" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5435 122.809C13.2662 123.214 14.1804 122.956 14.5854 122.233L21.1855 110.457C21.5905 109.734 21.333 108.82 20.6103 108.415C19.8876 108.01 18.9735 108.267 18.5684 108.99L12.7017 119.458L2.23359 113.591C1.51092 113.186 0.596747 113.444 0.191733 114.167C-0.213281 114.889 0.0442324 115.803 0.766905 116.208L12.5435 122.809ZM13.2769 121.5L14.7207 121.093C13.2467 115.861 14.7418 106.161 25.4135 94.9465C36.0671 83.7509 55.7637 71.1882 90.2238 60.4319L89.7769 59L89.3299 57.5681C54.59 68.4118 34.37 81.1824 23.2402 92.8785C12.1286 104.555 9.97373 115.306 11.8331 121.907L13.2769 121.5ZM89.7769 59L90.2238 60.4319C124.946 49.5938 146.763 37.4335 159.932 26.5565C173.03 15.7387 177.777 6.00587 177.777 1.64509e-05L176.277 0L174.777 -1.64509e-05C174.777 4.6608 170.874 13.628 158.022 24.2435C145.241 34.7998 123.808 46.8062 89.3299 57.5681L89.7769 59Z" fill="#FF6D6D" />
                </svg>
            </div>
            <h1 className='text-center pt-8 text-[32px] sm:text-[48px] md:text-[76px] leading-tight'>Subscribe to <br className="hidden sm:inline" /> our newsletter</h1>
            <span className='flex text-center justify-center mt-8 text-[#4e4a54] px-4'>To make your stay special and even more memorable</span>
            <div className='flex justify-center my-6'>
                <button className='bg-black py-4 px-8 rounded-full text-white font-medium hover:bg-neutral-800 transition-colors'>Subscribe Now</button>
            </div>
            <hr className='border-t border-[#b8c6a9] my-12 md:my-16 mx-4 md:mx-auto max-w-[1226px]' />
            <div className='grid grid-cols-1 md:grid-cols-4 gap-12 max-w-[1226px] mx-auto px-8'>
                {footerLinks.map((column, index) => (
                    <FooterColumn
                        key={`${column.title}-${index}`}
                        title={column.title}
                        links={column.links}
                    />
                ))}
            </div>
            <div className="text-center text-sm pt-20 pb-4">
                <p>©2023 Elementum. All rights reserved</p>
            </div>
            <div className="ellipse absolute top-50 right-10 rotate-185 hidden md:block"></div>
        </div>
    )
}

export default Footer