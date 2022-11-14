import { useEffect } from "react";

interface RedirectProps extends React.HTMLAttributes<HTMLElement> {
  uri: string;
}

export function Redirect({ uri }: RedirectProps) {
  useEffect(() => location.replace(uri), []);

  return null;
}
