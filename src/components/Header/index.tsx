import cx from "classnames";

import { Links } from "../Links";
import { Pages } from "../Pages";
import "./styles.scss";

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

export function Header(props: HeaderProps) {
  return (
    <header {...props} className={cx(props.className)}>
      <Pages/>
      <Links/>
    </header>
  );
}
