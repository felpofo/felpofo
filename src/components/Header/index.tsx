import cx from "classnames";
import type { HTMLAttributes } from "react";

import "./styles.scss";
import { Links } from "../Links";

interface HeaderProps extends HTMLAttributes<HTMLElement> {
  pagetitle: string;
}

export function Header(props: HeaderProps) {
  return (
    <header {...props} className={cx(props.className)}>
      <div className="left">
        <h1>{props.pagetitle}</h1>
        <div className="pages">{props.children}</div>
      </div>

      <Links />
    </header>
  );
}
