import { Link } from "react-router-dom";
import cx from "classnames";
import type { HTMLAttributes, ReactNode } from "react";

import "./styles.scss";
import { Links } from "../Links";

interface HeaderProps extends HTMLAttributes<HTMLElement> {
  pageTitle?: string;
  children?: ReactNode;
}

export function Header(props: HeaderProps) {
  return (
    <header {...props} className={cx(props.className)}>
      <div className="left">
        {props.pageTitle && <h1>{props.pageTitle}</h1>}
      </div>

      <Links />

      <div className="right">
        {props.children}
      </div>
    </header>
  );
}
