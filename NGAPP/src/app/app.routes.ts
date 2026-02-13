import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./Component/Pages/landing/landing').then(m => m.Landing)
    },
    {

        path: '**',
        redirectTo: '/'
    }
];
