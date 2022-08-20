import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './components/main/mcontent/aboutme/aboutme.component';
import { ContactComponent } from './components/main/mcontent/contact/contact.component';
import { HomeComponent } from './components/main/mcontent/home/home.component';
import { MaintenanceComponent } from './components/main/maintenance/maintenance.component';
import { MyservicesComponent } from './components/main/mcontent/myservices/myservices.component';
import { ProyectsComponent } from './components/main/mcontent/proyects/proyects.component';
import { SkillsComponent } from './components/main/mcontent/skills/skills.component';

const routes: Routes = [
  /* Start Definitive Routes */
  { path: 'home', component: HomeComponent },
  // { path: 'about-me', component: AboutmeComponent },
  // { path: 'services', component: MyservicesComponent },
  // { path: 'skills', component: SkillsComponent },
  // { path: 'proyects', component: ProyectsComponent },
  // { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  /* End Definitive Routes */

  /* Start Maintenance Routes */
  // { path: 'home', component: MaintenanceComponent },
  { path: 'about-me', component: MaintenanceComponent },
  { path: 'services', component: MaintenanceComponent },
  { path: 'skills', component: MaintenanceComponent },
  { path: 'proyects', component: MaintenanceComponent },
  { path: 'contact', component: MaintenanceComponent },
  /* End Maintenance Routes */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  MaintenanceComponent,
  HomeComponent,
  AboutmeComponent,
  MyservicesComponent,
  SkillsComponent,
  ProyectsComponent,
  ContactComponent,
];
