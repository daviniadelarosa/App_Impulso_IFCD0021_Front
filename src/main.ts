import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { RegisterComponent } from './app/register/register';
import { HomeComponent } from './app/home/home';
import { LoginComponent } from './app/login/login';
import { CRUDUsuariosComponent } from './app/crud-usuarios/crud-usuarios';

const routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'usuarios', component: CRUDUsuariosComponent },  // Nueva ruta CRUD
  
];

bootstrapApplication(HomeComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes)
  ]
});
