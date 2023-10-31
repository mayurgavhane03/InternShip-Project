import React from "react";
import github from "./Images/social-logo/github.png";
import insta from "./Images/social-logo/insta.png";
import linkdin from "./Images/social-logo/linkedin.png";
import gmail from "./Images/social-logo/gmail.png";

const Linkedin_Link = "https://www.linkedin.com/in/mayur-gavhane-51817a203/";
const Instagram_Link = "https://www.instagram.com/mayur_gavhane_003/";
const Github_Link = "https://github.com/mayurgavhane03";
const Email_Link = "mailto:mayurrgavhane2003@gmail.com";

export default function SocialLinks() {
  const iconSize = "w-12 h-12 mt-[30px] "; // Adjust the size as needed

  return (
    <div className="flex items-center justify-center gap-4">
      <a
        href={Instagram_Link}
        className={`instagram ${iconSize}`}
        target="_blank"
        rel="noreferrer"
      >
        <img src={insta} alt="Instagram" />
      </a>
      <a
        href={Linkedin_Link}
        className={`linkedin ${iconSize}`}
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkdin} alt="LinkedIn" />
      </a>
      <a
        href={Github_Link}
        className={`github ${iconSize}`}
        target="_blank"
        rel="noreferrer"
      >
        <img src={github} alt="GitHub" />
      </a>
      <a
        href={Email_Link}
        className={`email ${iconSize}`}
        target="_blank"
        rel="noreferrer"
      >
        <img src={gmail} alt="Email" />
      </a>
    </div>
  );
}
