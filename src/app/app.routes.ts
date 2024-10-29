import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/main-page/main-page.component')
        .then(c => c.MainPageComponent)
    },
    {
        path: 'products',
        loadChildren: () => import('./components/nav-bar/products/products.routes')
    }
];
