import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitch, FaInstagram, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/mgpanchal" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/mgpanchal/" },
  { icon: <FaTwitter />, path: "https://x.com/iam_exception" },
  { icon: <FaInstagram />, path: "#" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link href={item.path} key={index} target="_blank" className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
