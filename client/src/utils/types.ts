export type Image = {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string;
}

export type Logo = {
  id: number;
  logoText: string;
  logoLink: string;
  image: Image;
}

export type Link = {
  href: string;
  label?: string;
  isExternal?: boolean;
  isButtonLink?: boolean;
  type?: "PRIMARY" | "SECONDARY";
}

export interface GlobalPageHeader {
  logo: Logo;
  navItems: Link[];
  cta: Link;
}

export interface GlobalPageFooter {
  logo: Logo;
  navItems: Link[];
  socialLinks: Logo[];
  text: string;
}