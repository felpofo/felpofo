import { useEffect } from "react";
import type { HTMLAttributes } from "react";

interface RedirectProps extends HTMLAttributes<HTMLElement> {
  uri: string;
}

export function Redirect({ uri }: RedirectProps) {
  useEffect(() => window.location.replace(uri), []);

  return null;
}
