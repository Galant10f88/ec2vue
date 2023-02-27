import {
  mdiMenu,
  mdiClockOutline,
  mdiCloud,
  mdiCrop,
  mdiAccount,
  mdiCogOutline,
  mdiEmail,
  mdiLogout,
  mdiThemeLightDark,
  mdiGithub,
  mdiReact,
} from "@mdi/js";

export default [
  {
    icon: mdiMenu,
    label: "Menu",
    menu: [
      {
        icon: mdiClockOutline,
        label: "Departments",
      },
      {
        icon: mdiCloud,
        label: "Radiopharmacy",
      },
      {
        icon: mdiCloud,
        label: "Cyclotron",
      },
      {
        isDivider: true,
      },
      {
        icon: mdiCrop,
        label: "IT Interfaces",
      },
    ],
  },
  {
    isCurrentUser: true,
    menu: [
      {
        icon: mdiAccount,
        label: "My Profile",
        to: "/profile",
      },
      {
        icon: mdiCogOutline,
        label: "Settings",
      },
      {
        icon: mdiEmail,
        label: "Messages",
      },
      {
        isDivider: true,
      },
      {
        icon: mdiLogout,
        label: "Log Out",
        isLogout: true,
      },
    ],
  },
  {
    icon: mdiThemeLightDark,
    label: "Light/Dark",
    isDesktopNoLabel: true,
    isToggleLightDark: true,
  },
  {
    icon: mdiGithub,
    label: "GitHub",
    isDesktopNoLabel: true,
    href: "https://github.com/Galant10f88/ec2vue",
    target: "_blank",
  },
  {
    icon: mdiLogout,
    label: "Log out",
    isDesktopNoLabel: true,
    isLogout: true,
  },
];
