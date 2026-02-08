import { lazy } from "react"
import { Navigate } from "react-router-dom";

const Landing = lazy(() => import('@/pages/public/landing'));
const AboutUs = lazy(() => import('@/pages/public/about-us'));
const ContactUs = lazy(() => import('@/pages/public/contact-us'));

export const PUBLIC_ROUTES = [
    {
        index: true,
        element: <Navigate to='/' replace />,
    },
    {
        path: '/',
        element: <Landing />
    },
    {
        path: 'about-us',
        element: <AboutUs />
    },
    {
        path: 'contact-us',
        element: <ContactUs />
    },
];