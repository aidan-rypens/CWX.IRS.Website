import React from "react";

type Props = {
  children?: JSX.Element[] | JSX.Element;
};

export function Layout({ children }: Props) {
  return <>{children}</>;
}
