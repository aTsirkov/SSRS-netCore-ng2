import { Routes, RouterModule } from '@angular/router';

import { EmptyComponent } from './components/reportview/reports/empty.component';
import { Report1Component } from './components/reportview/reports/report1.component';
import { Report2Component } from './components/reportview/reports/report2.component';

export const routes: Routes = [
    { path: '', redirectTo: '/empty', pathMatch: 'full' },
    { path: 'empty', component: EmptyComponent },
    { path: 'STARLIMS-SSRS/Журнал аналитического контроля Test', component: Report2Component },
    { path: 'Folder1/Report', component: Report2Component }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);