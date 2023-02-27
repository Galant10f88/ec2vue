import {
  mdiAccountCircle,
  mdiMonitor,
  mdiGithub,
  mdiLock,
  mdiAlertCircle,
  mdiSquareEditOutline,
  mdiTable,
  mdiViewList,
  mdiTelevisionGuide,
  mdiResponsive,
  mdiPalette,
  mdiReact,
} from "@mdi/js";

export default [
  {
    to: "/dashboard",
    icon: mdiMonitor,
    label: "Home",
  },
  {
    label: "Our Software",
    icon: mdiViewList,
    menu: [
      {
        label: "Choice Help",
        to: "/error",
      },
      {
        label: "BioDose/NMIS",
        to: "/error",
      },
      {
        label: "Numa",
        to: "/error",
      },
      {
        label: "BioRX/RMIS",
        to: "/error",
      },
      {
        label: "BioPointe",
        to: "/error",
      },
      {
        label: "BioTrax QMS",
        to: "/error",
      },
      {
        label: "BioRX/RMIS",
        to: "/error",
      },
      {
        label: "Patient Reporting",
        to: "/error",
      },
      {
        label: "Interface Options",
        to: "/error",
      },
      {
        label: "Videos",
        to: "/error",
      },
    ],
  },
  {
    label: "Support",
    icon: mdiViewList,
    menu: [
      {
        label: "Support Community",
        to: "/error",
      },
      {
        label: "FAQs",
        to: "/error",
      },
      {
        label: "Downloads/Guides",
        to: "/error",
      },
      {
        label: "Hardware Req",
        to: "/error",
      },
      {
        label: "Support Portal",
        to: "/error",
      },
    ],
  },
  {
    to: "/error",
    label: "Supplies",
    icon: mdiAlertCircle,
  },
  {
    label: "About Us",
    icon: mdiViewList,
    menu: [
      {
        label: "Contact Us",
        to: "/error",
      },
      {
        label: "Blog",
        to: "/error",
      },
      {
        label: "History",
        to: "/error",
      },
      {
        label: "Careers",
        to: "/error",
      },
      {
        label: "Press Room",
        to: "/error",
      },
      {
        label: "Privacy Policy",
        to: "/error",
      },
      {
        label: "Terms of Service",
        to: "/error",
      },
      {
        label: "Security Policy",
        to: "/error",
      },
    ],
  },
  {
    to: "/tables",
    label: "Tables",
    icon: mdiTable,
  },
  {
    to: "/forms",
    label: "Forms",
    icon: mdiSquareEditOutline,
  },
  {
    to: "/",
    label: "Styles",
    icon: mdiPalette,
  },
  {
    to: "/profile",
    label: "Profile",
    icon: mdiAccountCircle,
  },
  {
    to: "/login",
    label: "Login",
    icon: mdiLock,
  },
  {
    href: "https://github.com/Galant10f88/Cryptable",
    label: "GitHub",
    icon: mdiGithub,
    target: "_blank",
  },
];
