import { Routes } from '@angular/router';

import { RegisterComponent } from './register/register';
import { HomeComponent } from './home/home';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'register', component: RegisterComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];
