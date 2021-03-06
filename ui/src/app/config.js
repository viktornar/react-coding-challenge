import React from 'react';

import { RootRedirecter } from './route-utils';
import About from './about-comp';
import Subject from './subject-comp';
import Details from './details-comp';


export const routes = [
  { 
    path: '/',
    exact: true,
    component: () => (<RootRedirecter to="/books" />),
  },
  { 
    path: '/books',
    exact: true,
    component: Subject,
    routes: [
      { 
        path: '/books/:subject/:id',
        component: Details,
      },
    ],
  },
  { 
    path: '/about',
    exact: true,
    component: About,
  },
];