import { Route} from "@angular/router";
import { TestDashboardComponent } from "../test-dashboard/test-dashboard.component";
import { TestFormComponent } from "../test-form/test-form.component";
import { RouteTestComponent } from "../route-test/route-test.component";

export const TEST_ROUTES: Route[] = [
    {path: 'dash-board', component: TestDashboardComponent},
    {path: 'form', component: TestFormComponent},
    {path: 'route-test', component: RouteTestComponent}
] 