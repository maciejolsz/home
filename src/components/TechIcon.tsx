import type { FC } from "react";

import angular from "../assets/tech/angular.svg";
import capacitor from "../assets/tech/capacitor.svg";
import css3 from "../assets/tech/css3.svg";
import docker from "../assets/tech/docker.svg";
import electron from "../assets/tech/electron.svg";
import git from "../assets/tech/git.svg";
import github from "../assets/tech/github.svg";
import html5 from "../assets/tech/html5.svg";
import javascript from "../assets/tech/javascript.svg";
import mysql from "../assets/tech/mysql.svg";
import nextdotjs from "../assets/tech/nextdotjs.svg";
import php from "../assets/tech/php.svg";
import reactBrand from "../assets/tech/react.svg";
import rubyonrails from "../assets/tech/rubyonrails.svg";
import tailwindcss from "../assets/tech/tailwindcss.svg";
import typescript from "../assets/tech/typescript.svg";

import { IconArrowPath } from "./UiIcons";

const defaultClass =
  "w-5 h-5 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-200";

const TECH_SRC: Partial<Record<string, string>> = {
  JavaScript: javascript,
  TypeScript: typescript,
  Angular: angular,
  React: reactBrand,
  CSS: css3,
  Tailwind: tailwindcss,
  HTML: html5,
  RoR: rubyonrails,
  PHP: php,
  "Next.js": nextdotjs,
  Electron: electron,
  Capacitor: capacitor,
  Git: git,
  GitHub: github,
  Docker: docker,
  MySQL: mysql,
};

/** Tech logo for stack badges — local SVGs only; avoids heavy icon bundles. */
const TechIcon: FC<{ tech: string; className?: string }> = ({ tech, className }) => {
  const cn = className ?? defaultClass;
  if (tech === "CI/CD") {
    return <IconArrowPath className={`${cn} text-gray-500`} />;
  }
  const src = TECH_SRC[tech];
  if (!src) return null;
  return <img src={src} alt="" className={cn} />;
};

export default TechIcon;
