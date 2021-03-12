import React, { lazy } from 'react';

export const router = [
    {
        path: "/login",
        component: lazy(()=>import('../page/login/login'))
    },
    {
        path: "/geoponics",
        component: lazy(()=>import('../page/geoponics'))
    },
    {
        path: "/index",
        component: lazy(()=>import('../page/index')),
        children: [{
            path: "/index/home",
            component: lazy(()=>import('../page/index/home')),
        },{
            path: "/index/customer",
            component: lazy(()=>import('../page/index/customer')),
        },{
            path: "/index/product",
            component: lazy(()=>import('../page/index/product')),
        }]
    },
    {
        path: "/KPM",
        component: lazy(()=>import('../page/KPM'))
    },
    {
        path: "/financeCalendar/index",
        component: lazy(()=>import('../page/financeCalendar'))
    },
    {
        path: "/financeCalendar/search",
        component: lazy(()=>import('../page/financeCalendar/search'))
    },
]

