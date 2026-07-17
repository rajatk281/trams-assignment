export const footerLinks = [
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
    title: "Contact",
    links: [
      {
        text: "1498w Fluton ste, STE\n2D Chcigo, IL 63867.",
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

const FooterColumn = ({ title, links }) => {
  const isContact = typeof links[0] === "object";

  return (
    <div className="flex flex-col gap-8">
      <h3 className="font-primary text-[28px] text-black">
        {title}
      </h3>

      <ul className="flex flex-col gap-6">
        {isContact
          ? links.map((item, index) => (
              <li
                key={index}
                className={`whitespace-pre-line text-[18px] text-[#4e4a54] ${item.className || ""}`}
              >
                {item.text}
              </li>
            ))
          : links.map((item, index) => (
              <li
                key={index}
                className="text-[18px] text-[#4e4a54] hover:text-[#08060D] transition-colors duration-200"
              >
                {item}
              </li>
            ))}
      </ul>
    </div>
  );
};

export default FooterColumn;