import { lazy } from "react";

const Landing = lazy(() => import("@/pages/public/landing"));
const AboutUs = lazy(() => import("@/pages/public/about-us"));
const ContactUs = lazy(() => import("@/pages/public/contact-us"));

export const PUBLIC_ROUTES = [
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "about-us",
    element: <AboutUs />,
  },
  {
    path: "contact-us",
    element: <ContactUs />,
  },
];
