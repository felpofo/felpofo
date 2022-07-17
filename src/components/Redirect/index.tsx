import { useEffect } from "react";
import type { HTMLAttributes } from "react";

interface RedirectProps extends HTMLAttributes<HTMLElement> {
  uri: string;
}

export function Redirect(props: RedirectProps) {
  useEffect(() => window.location.replace(props.uri), []);

  return null;
}
