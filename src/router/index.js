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
        }]
    }
]

