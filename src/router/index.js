import React, { lazy } from 'react';

export const router = [
    {
        path: "/geoponics",
        component: lazy(()=>import('../page/geoponics'))
    },
    {
        path: "/harassment",
        component: lazy(()=>import('../page/harassment'))
    }
]

