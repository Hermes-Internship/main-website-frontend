import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './views/projects/projects/projects.component';
import { CdComponent } from './views/cd/cd/cd.component';
import { ContactComponent } from './views/contact/contact/contact.component';
import { MainComponent } from './views/main/main/main.component';


const routes: Routes = [
   {
     path:"",
     redirectTo : "main",
     pathMatch : "full"
   } ,
   {
    path:"main",
    component : MainComponent
  },
  {
    path:"projects",
    component : ProjectsComponent
  },
  {
    path:"cd",
  component : CdComponent
  },
  {
    path:"posts",
    component : MainComponent
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
