import { useEffect, useState } from "react";
import cx from "classnames";
import { Link } from "react-router-dom";

import "./styles.scss";

interface PagesProps extends React.HTMLAttributes<HTMLElement> {}

export function Pages(props: PagesProps) {
  const [pages, setPages] = useState([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
  ]);

  useEffect(() => {
    setPages(prev => {
      const actualPage = prev.find(page => page.path == location.pathname)!;

      const newPages = [actualPage];
      newPages.push(...prev.filter(page => page.path != actualPage.path ?? page));

      return newPages;
    });
  }, []);

  return (
    <div {...props} className={cx("pages", props.className)}>
      {pages.map(({ name, path }) => (
        <Link key={name} to={path}>
          {name}
        </Link>
      ))}
    </div>
  );
}
