import LandingPage from '@/views/Pages/LandingPage.vue';
import DashboardLayout from '@/views/Layout/DashboardLayout.vue';
import AuthLayout from '@/views/Pages/AuthLayout.vue';
import AuthLayoutForCompany from '@/views/Pages/AuthLayoutForCompany.vue';
import ForgotPassword from '@/views/Pages/ForgotPassword.vue';
import NotFound from '@/views/NotFoundPage.vue';
import EditProfileForm from '@/views/Pages/UserProfile/EditProfileForm.vue';
import CompanyProfile from '@/views/Pages/CompanyProfile/CompanyProfile.vue';
import EditFormforCompany from '@/views/Pages/CompanyProfile/EditFormforCompany.vue';
import ResumeUpload from '@/views/Pages/UserProfile/ResumeUpload.vue';
import UserCard from '@/views/Pages/UserProfile/UserCard.vue';
const routes = 
[
    {
        path: '/',
        redirect: 'landingpage',
        component: LandingPage,
        children: [{
            path: '/landingpage',
            name: '',
            component: () =>
                import ('../views/Pages/LandingPage.vue')
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
                    import ('../views/Messages.vue')
            },
            {
                path: '/profile',
                name: 'Profil',
                component: () =>
                    import ('../views/Pages/UserProfile/UserProfile.vue')
            },
            {
                path: '/editprofilform',
                name: '',
                component: () =>
                import ('../views/Pages/UserProfile/EditProfileForm.vue')
            },
            {
                path: '/resumeupload',
                name: '',
                component: () =>
                import ('../views/Pages/UserProfile/ResumeUpload.vue')
            },
        /*      {
                path: '/settings',
                name: '',
                component: () =>
                import ('../views/Pages/Settings.vue')
            },
        */
            {
                path: '/applications',
                name: 'MyApplications',
                component: () =>
                    import ('../views/RegularTables.vue')
            },
            {
                path: '/favourites',
                name: 'MyFavourites',
                component: () =>
                    import ('../views/MyFavouritesTables.vue')
            }
        ]
    },
    /*{
        path: '/',
        redirect: 'editprofilform',
        component: EditProfileForm,
        children: [{
            path: '/editprofilform',
            name: '',
            component: () =>
                import ('../views/Pages/UserProfile/EditProfileForm.vue')
        }]
    },
    {
        path: '/',
        redirect: 'resumeupload',
        component: ResumeUpload,
        children: [{
            path: '/resumeupload',
            name: '',
            component: () =>
                import ('../views/Pages/UserProfile/ResumeUpload.vue')
        }]
    },*/
    {
        path: '/',
        redirect: 'companyprofile',
        component: CompanyProfile,
        children: [{
            path: '/companyprofile',
            name: '',
            component: () =>
                import ('../views/Pages/CompanyProfile/CompanyProfile.vue')
        }]
    },
    {
        path: '/',
        redirect: 'editformforcompany',
        component: EditFormforCompany,
        children: [{
            path: '/editformforcompany',
            name: '',
            component: () =>
                import ('../views/Pages/CompanyProfile/EditFormforCompany.vue')
        }]
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
            {
                path: '/forgotpassword',
                name: '',
                component: () =>
                    import ('../views/Pages/ForgotPassword.vue')
            }
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
            {
                path: '/forgotpasswordcompany',
                name: '',
                component: () =>
                    import ('../views/Pages/ForgotPassword.vue')
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