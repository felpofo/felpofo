import React from "react";
import {
  GithubLogo,
  TwitterLogo,
  TelegramLogo,
  InstagramLogo,
  LinkedinLogo,
} from "phosphor-react";

import "./styles.scss";

const telegram = "https://t.me/felpolho";
const github = "https://github.com/felpofo";
const twitter = "https://twitter.com/felpofo";
const insta = "https://instagram.com/felpofo";
const linkedin = "https://linkedin.com/in/felpofo";

export function Links(props) {
  return (
    <div className={`links ${props.className ?? ""}`}>
      <a className="github" href={github} target="_blank" rel="noreferrer">
        <GithubLogo />
      </a>
      <a className="twitter" href={twitter} target="_blank" rel="noreferrer">
        <TwitterLogo />
      </a>
      <a className="telegram" href={telegram} target="_blank" rel="noreferrer">
        <TelegramLogo />
      </a>
      <a className="instagram" href={insta} target="_blank" rel="noreferrer">
        <InstagramLogo />
      </a>
      <a className="linkedin" href={linkedin} target="_blank" rel="noreferrer">
        <LinkedinLogo />
      </a>
    </div>
  );
}
