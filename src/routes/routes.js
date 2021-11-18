import DashboardLayout from '@/views/Layout/DashboardLayout.vue';
import AuthLayout from '@/views/Pages/AuthLayout.vue';
import AuthLayoutForCompany from '@/views/Pages/AuthLayoutForCompany.vue';

import NotFound from '@/views/NotFoundPage.vue';

const routes = [{
        path: '/',
        redirect: 'dashboard',
        component: DashboardLayout,
        children: [{
                path: '/dashboard',
                name: '',
                component: () =>
                    import ('../views/Dashboard.vue')
            },
            {
                path: '/icons',
                name: 'Mesajlar',
                component: () =>
                    import ('../views/Icons.vue')
            },
            {
                path: '/profile',
                name: 'Profil',
                component: () =>
                    import ('../views/Pages/UserProfile.vue')
            },
            {
                path: '/tables',
                name: 'İlanlar',
                component: () =>
                    import ('../views/RegularTables.vue')
            }
        ]
    },
    {
        path: '/',
        redirect: 'login',
        component: AuthLayout,
        children: [{
                path: '/login',
                name: 'login',
                component: () =>
                    import ('../views/Pages/Login.vue')
            },
            {
                path: '/register',
                name: 'register',
                component: () =>
                    import ('../views/Pages/Register.vue')
            },
        ]
    }, 
    {
        path: '/',
        redirect: 'logincompany',
        component: AuthLayoutForCompany,
        children: [{
                path: '/logincompany',
                name: 'logincompany',
                component: () =>
                    import ('../views/Pages/LoginCompany.vue')
            },
            {
                path: '/registercompany',
                name: 'registercompany',
                component: () =>
                    import ('../views/Pages/RegisterCompany.vue')
            },
            { path: '*', component: NotFound }
        ]
    }    
];

export default routes;