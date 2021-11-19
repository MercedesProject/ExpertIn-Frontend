import LandingPage from '@/views/Pages/LandingPage.vue';
import DashboardLayout from '@/views/Layout/DashboardLayout.vue';
import AuthLayout from '@/views/Pages/AuthLayout.vue';

import NotFound from '@/views/NotFoundPage.vue';

const routes = [{
        path: '/',
        redirect:'landingpage',
        component: LandingPage,
        children: [{
                path:'/landingpage',
                name:'',
                component: ()=> 
                    import('../views/Pages/LandingPage.vue')
        }]
    },

       {
        path: '/',
        redirect: 'dashboard',
        component: DashboardLayout,
        children: [{
                path: '/dashboard',
                name: 'dashboard',
                component: () =>
                    import ('../views/Dashboard.vue')
            },
            {
                path: '/messages',
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
            { path: '*', component: NotFound }
        ]
    }
];

export default routes;

/*
import DashboardLayout from '@/views/Layout/DashboardLayout.vue';
import AuthLayout from '@/views/Pages/AuthLayout.vue';
import LandingPage from '@/views/Pages/LandingPage.vue';

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
            { path: '*', component: NotFound }
        ]
    },
    {
        path: '/',
        redirect:'landingpage',
        component: LandingPage,
        children: [{
                path:'landingpage',
                name:'landingpage',
                component: ()=> 
                    import('../views/Pages/LandingPage.vue')
        }]
    }
];

export default routes;
*/