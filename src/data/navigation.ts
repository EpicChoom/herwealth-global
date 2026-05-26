export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  cta?: boolean;
}

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academy", href: "/academy" },
  { label: "Events", href: "/events" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Join", href: "/join", cta: true },
];

export const footerNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academy", href: "/academy" },
  { label: "Events", href: "/events" },
  { label: "Join", href: "/join" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];
