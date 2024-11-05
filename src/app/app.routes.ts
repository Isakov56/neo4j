import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./test-buttons/test-buttons.component')
        .then(c => c.TestButtonsComponent),
        children: [
            {
                path: 'dash-board',
                loadComponent: () => import('./test-dashboard/test-dashboard.component')
                    .then(m => m.TestDashboardComponent)
            },
            {
                path: 'form',
                loadComponent: () => import('./test-form/test-form.component')
                    .then(m => m.TestFormComponent)
            },
            {
                path: 'route-test',
                loadComponent: () => import('./route-test/route-test.component')
                    .then(m => m.RouteTestComponent)
            }
        ]
    },
    // {
    //     path: '',
    //     loadChildren: () => import('./test-buttons/test-nav.routes')
    //     .then(m => m.default)
    // },
    {
        path: 'table',
        loadComponent: () => import('./test-component/test-component.component')
        .then(c => c.TestComponentComponent)
    }
];
