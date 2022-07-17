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

export function Links(props: LinksProps) {
  return (
    <div {...props} className={cx("links", props.className)}>
      <Link className="github" to={"/social/github"} target="_blank">
        <GithubLogo />
      </Link>

      <Link className="twitter" to={"/social/twitter"} target="_blank">
        <TwitterLogo />
      </Link>
      
      <Link className="telegram" to={"/social/telegram"} target="_blank">
        <TelegramLogo />
      </Link>
      
      <Link className="instagram" to={"/social/instagram"} target="_blank">
        <InstagramLogo />
      </Link>
      
      <Link className="linkedin" to={"/social/linkedin"} target="_blank">
        <LinkedinLogo />
      </Link>
    </div>
  );
}
