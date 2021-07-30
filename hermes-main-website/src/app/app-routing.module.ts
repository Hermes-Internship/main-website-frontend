import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './views/projects/projects/projects.component';
import { CdComponent } from './views/cd/cd/cd.component';
import { ContactComponent } from './views/contact/contact/contact.component';


const routes: Routes = [
    {
      path:"projects",
    component : ProjectsComponent
  },
  {
    path:"cd",
  component : CdComponent
},
{
  path:"contact",
component : ContactComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
