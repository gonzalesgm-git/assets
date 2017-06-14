import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { LoginComponent } from '../app/login/login.component';
import { PageNotFoundComponent } from '../app/login/page-not-found.component';

const tenant = 'microsoft'


export const routes: Routes = [
  // app will be added at runtime
    { path: '', component: LoginComponent },
    { path: '', loadChildren: 'app/main/aaw.module#AawModule' }
];

export const routeComponents: ModuleWithProviders =  RouterModule.forRoot(routes);

export function getRouteComponents(routes: Routes, routeComponents: any[] = []) {
  routes.forEach(route => {
    if (route.component) {
      routeComponents.push(route.component);
    }

    if (route.children) {
      getRouteComponents(route.children, routeComponents);
    }
  });

  return routeComponents;
}