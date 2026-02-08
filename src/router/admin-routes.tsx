import { lazy } from "react";
import { Navigate, Outlet } from "react-router-dom";

const Dashboard = lazy(() => import('@/pages/admin/dashboard'));
const Profile = lazy(() => import('@/pages/admin/settings/profile'));
const Notifications = lazy(() => import('@/pages/admin/settings/notifications'));

export const ADMIN_ROUTES = [
    {
        index: true,
        element: <Navigate to='/dashboard' replace />
    },
    {
        path: 'dashboard',
        element: <Dashboard />,
    },
    {
        path: 'settings',
        element: <Outlet />,
        children: [
            {
                index: true,
                element: <Navigate to='/settings/profile' />
            },
            {
                path: 'profile',
                element: <Profile />
            },
            {
                path: 'notifications',
                element: <Notifications />
            }
        ]
    },
]