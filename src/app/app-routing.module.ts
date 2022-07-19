import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   { path: 'home', component: HomeComponent },
//   { path: 'about-me', component: AboutmeComponent },
//   { path: 'services', component: MyservicesComponent },
//   { path: 'skills', component: SkillsComponent },
//   { path: 'proyects', component: ProyectsComponent },
//   { path: 'contact', component: ContactComponent },
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
// ];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
