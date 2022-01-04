import LandingPage from '@/views/Pages/LandingPage.vue';
import DashboardLayout from '@/views/Layout/DashboardLayout.vue';
import CompanyDashboardLayout from '@/views/Layout/CompanyDashboardLayout.vue';
import AuthLayout from '@/views/Pages/AuthLayout.vue';
import AuthLayoutForCompany from '@/views/Pages/AuthLayoutForCompany.vue';
import ForgotPassword from '@/views/Pages/ForgotPassword.vue';
import NotFound from '@/views/NotFoundPage.vue';
import EditProfileForm from '@/views/Pages/UserProfile/EditProfileForm.vue';
import CompanyProfile from '@/views/Pages/CompanyProfile/CompanyProfile.vue';
import EditFormforCompany from '@/views/Pages/CompanyProfile/EditFormforCompany.vue';
import ResumeUpload from '@/views/Pages/UserProfile/ResumeUpload.vue';
import UserCard from '@/views/Pages/UserProfile/UserCard.vue';
const routes = [{
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
    //Employee için
    {
        path: '/',
        redirect: 'employeedashboard',
        component: DashboardLayout,
        children: [{
                path: '/employeedashboard',
                name: 'employeedashboard',
                component: () =>
                    import ('../views/EmployeeDashboard.vue')
            },
            {
                path: '/employeemessages',
                name: 'employeemessages',
                component: () =>
                    import ('../views/Pages/UserProfile/UserMessages.vue')
            },
            {
                path: '/employeeprofile',
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
            {
                path: '/landingpage',
                name: '',
                component: () =>
                import ('../views/Pages/LandingPage.vue')
            },
            
            {
                path: '/employeeapplications',
                name: 'MyApplications',
                component: () =>
                    import ('../views/RegularTables.vue')
            },
            {
                path: '/employeefavourites',
                name: 'MyFavourites',
                component: () =>
                    import ('../views/MyFavouritesTables.vue')
            },
            
        ]
    },
    //Company için 
    {
        path: '/',
        redirect: 'companydashboard',
        component: CompanyDashboardLayout,
        children: [{
                path: '/companydashboard',
                name: 'companydashboard',
                component: () =>
                    import ('../views/CompanyDashboard.vue')
            },
            {
                path: '/companymessages',
                name: '',
                component: () =>
                    import ('../views/Pages/CompanyProfile/CompanyMessages.vue')
            },
            {
                path: '/companyprofile',
                name: '',
                component: () =>
                    import ('../views/Pages/CompanyProfile/CompanyProfile.vue')
            },
            {
                path: '/editformforcompany',
                name: '',
                component: () =>
                    import ('../views/Pages/CompanyProfile/EditFormforCompany.vue')
            },

            {
                path: '/Job/New',
                name: "JobNew",
                component: () =>
                    import ('../views/Pages/Jobs/New.vue')
            },
            {
                path: '/Job/Edit/:jobId',
                name: "JobEdit",
                component: () =>
                    import ('../views/Pages/Jobs/Edit.vue')
            },
            {
                path: '/Job/CompanyDetail/:jobId',
                name: "JobCompanyDetail",
                component: () =>
                    import ('../views/Pages/Jobs/CompanyDetail.vue')
            },
            {
                path: '/employeeprofile/:employerId',
                name: "Profil",
                component: () =>
                import ('../views/Pages/UserProfile/UserProfile.vue')
            },
            
        ]
    },
    {
        path: '/',
        redirect: 'employeedashboard',
        component: DashboardLayout,
        children: [{
            path: '/Job/Detail/:jobId',
            name: "JobDetail",
            component: () =>
            import ('../views/Pages/Jobs/Detail.vue')
        }]
  
    },
    // {
    //     path: '/',
    //     redirect: 'companydashboard',
    //     component: DashboardLayout,
    //     children: [{
    //         path: '/employeeprofile/:employerId',
    //         name: "Profil",
    //         component: () =>
    //         import ('../views/Pages/UserProfile/UserProfile.vue')
    //     }]
  
    // },
    // {
    //     path: '/',
    //     redirect: 'companydashboard',
    //     component: CompanyDashboardLayout,
    //     children: [{
    //         path: '/Job/Detail/:jobId',
    //         name: "JobDetail",
    //         component: () =>
    //         import ('../views/Pages/Jobs/Detail.vue')
    //     }]
  
    // },
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