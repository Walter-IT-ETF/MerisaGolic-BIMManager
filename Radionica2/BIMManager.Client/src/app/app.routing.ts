import { Route } from '@angular/router';

import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';
import { ProjectComponent } from './modules/project/project.component';

export const ROUTES: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'project', component: ProjectComponent }
];
