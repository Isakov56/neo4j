import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/test-buttons/test-buttons.component')
        .then(c => c.TestButtonsComponent),
        children: [
            {
                path: 'dash-board',
                loadComponent: () => import('./components/test-dashboard/test-dashboard.component')
                    .then(m => m.TestDashboardComponent)
            },
            {
                path: 'form',
                loadComponent: () => import('./components/test-form/test-form.component')
                    .then(m => m.TestFormComponent)
            },
            {
                path: 'route-test',
                loadComponent: () => import('./components/route-test/route-test.component')
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
        loadComponent: () => import('./components/device-management/device-management.component')
        .then(c => c.DeviceManagementComponent)
    }
];
