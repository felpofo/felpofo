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

const links = [
  { name: "github", component: <GithubLogo/> },
  { name: "twitter", component: <TwitterLogo/> },
  { name: "telegram", component: <TelegramLogo/> },
  { name: "instagram", component: <InstagramLogo/> },
  { name: "linkedin", component: <LinkedinLogo/> },
];

export function Links(props: LinksProps) {
  return (
    <div {...props} className={cx("links", props.className)}>
      {links.map(({ name, component }) => (
        <Link
          key={name}
          className={name}
          to={`/social/${name}`}
          target="_blank"
        >
          {component}
        </Link>
      ))}
    </div>
  );
}
