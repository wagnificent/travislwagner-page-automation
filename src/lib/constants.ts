import {
  Zap,
  Map,
  Search,
  Mail,
  BarChart,
  Database,
  Linkedin,
  Twitter,
  Github,
  type LucideIcon,
} from "lucide-react";
export const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#showcase", label: "Showcase" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];
export const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com",
    Icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://www.twitter.com",
    Icon: Twitter,
    label: "Twitter",
  },
  {
    href: "https://www.github.com",
    Icon: Github,
    label: "GitHub",
  },
];
export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}
export const SERVICES: Service[] = [
  {
    icon: Map,
    title: "Process Mapping",
    description:
      "I'll work with you to visualize your current workflows, identify bottlenecks, and design streamlined processes for maximum efficiency.",
  },
  {
    icon: Zap,
    title: "Automation Implementation",
    description:
      "Using tools like Zapier, Make, or custom scripts, I build robust automations that handle repetitive tasks, so you can focus on what matters.",
  },
  {
    icon: Search,
    title: "Tech Stack Review",
    description:
      "I'll analyze your current software stack to find opportunities for better integration, cost savings, and improved productivity.",
  },
];
export const AUTOMATION_SHOWCASE = {
  before: {
    title: "Before: Manual Chaos",
    items: [
      { icon: Mail, text: "Lead emails get lost in a cluttered inbox." },
      { icon: BarChart, text: "Manual data entry into spreadsheets is slow and error-prone." },
      { icon: Database, text: "No centralized system means follow-ups are forgotten." },
    ],
  },
  after: {
    title: "After: Automated Order",
    items: [
      { icon: Mail, text: "New leads are automatically parsed and captured." },
      { icon: Database, text: "Contact is created in your CRM instantly." },
      { icon: Zap, text: "Team is notified and a follow-up sequence is triggered." },
    ],
  },
};