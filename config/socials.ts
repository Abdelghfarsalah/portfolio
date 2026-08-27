import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@Abdelghfarsalah",
    icon: Icons.gitHub,
    link: "https://github.com/Abdelghfarsalah",
  },
  {
    name: "LinkedIn",
    username: "Abdelghfar Khairallah",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/abdelghfar-khairallah-a55896261/",
  },
  {
    name: "Gmail",
    username: "Abdelghfarsalah8",
    icon: Icons.gmail,
    link: "mailto:abdelghfarsalah8@gmail.com",
  },
  {
    name: "Phone",
    username: "01204116925",
    icon: Icons.contact,
    link: "tel:01204116925",
  },
];
