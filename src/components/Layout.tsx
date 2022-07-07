import React from "react";
import "./layout.css";

type Props = {
  children?: JSX.Element[] | JSX.Element;
};

export function Layout({ children }: Props) {
  return <>{children}</>;
}
