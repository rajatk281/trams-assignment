
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