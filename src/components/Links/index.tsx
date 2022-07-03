import { Link } from "react-router-dom";
import {
  GithubLogo,
  TwitterLogo,
  TelegramLogo,
  InstagramLogo,
  LinkedinLogo,
} from "phosphor-react";
import cx from "classnames";
import type { HTMLAttributes } from "react";

import "./styles.scss";

interface LinksProps extends HTMLAttributes<HTMLElement> {}

const telegram = "https://t.me/felpolho";
const github = "https://github.com/felpofo";
const twitter = "https://twitter.com/felpofo";
const insta = "https://instagram.com/felpofo";
const linkedin = "https://linkedin.com/in/felpofo";

export function Links(props: LinksProps) {
  return (
    <div className={cx("links", props.className)}>
      <Link className="github" to={github} target="_blank" rel="noopener noreferrer">
        <GithubLogo />
      </Link>
      <Link className="twitter" to={twitter} target="_blank" rel="noopener noreferrer">
        <TwitterLogo />
      </Link>
      <Link className="telegram" to={telegram} target="_blank" rel="noopener noreferrer">
        <TelegramLogo />
      </Link>
      <Link className="instagram" to={insta} target="_blank" rel="noopener noreferrer">
        <InstagramLogo />
      </Link>
      <Link className="linkedin" to={linkedin} target="_blank" rel="noopener noreferrer">
        <LinkedinLogo />
      </Link>
    </div>
  );
}
