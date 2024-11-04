import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'test',
        loadComponent: () => import('./test-buttons/test-buttons.component')
        .then(c => c.TestButtonsComponent),
        loadChildren: () => import('./test-buttons/test-nav.routes')
    },
    {
        path: 'table',
        loadComponent: () => import('./test-component/test-component.component')
        .then(c => c.TestComponentComponent)
    }
];
