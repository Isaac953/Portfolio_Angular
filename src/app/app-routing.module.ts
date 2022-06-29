import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './components/main/aboutme/aboutme.component';
import { ContactComponent } from './components/main/contact/contact.component';
import { HomeComponent } from './components/main/home/home.component';
import { MyservicesComponent } from './components/main/myservices/myservices.component';
import { ProyectsComponent } from './components/main/proyects/proyects.component';
import { SkillsComponent } from './components/main/skills/skills.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-me', component: AboutmeComponent },
  { path: 'services', component: MyservicesComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'proyects', component: ProyectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [HomeComponent];
