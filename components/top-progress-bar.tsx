"use client";
import { AppProgressBar } from "next-nprogress-bar";

export const TopProgressBar = () => {
  return (
    <AppProgressBar
      height="4px"
      color="#94a3b8"
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
};
