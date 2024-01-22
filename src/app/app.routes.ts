import { Routes } from '@angular/router';
import { LoginComponent } from './authentification/login/login.component';
import { ProfilComponent } from './authentification/profil/profil.component';
import { HomeComponent } from './home/home/home.component';

export const routes: Routes = [

    { title: 'Login', path: 'login', component: LoginComponent },
    { title: 'Profil', path: 'profil', component: ProfilComponent },
    { title: 'Home', path: 'home', component: HomeComponent, },
    { title: 'No page', path: '**', redirectTo: 'login' },
];
