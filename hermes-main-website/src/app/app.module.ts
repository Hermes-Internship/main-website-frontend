import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { PostComponent } from './views/main/posts/component/post/post.component';
import { ProjectsComponent } from './views/projects/projects/projects.component';
import { CdComponent } from './views/cd/cd/cd.component';
import { ContactComponent } from './views/contact/contact/contact.component';
import { SidebarModule } from 'ng-sidebar';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    PostComponent,
    FooterComponent,
    ProjectsComponent,
    CdComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
