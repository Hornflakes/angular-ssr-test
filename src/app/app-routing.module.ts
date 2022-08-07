import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./shared/layout/layout.component";
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { ProjectsComponent } from "./pages/projects/projects.component";
import { ContactComponent } from "./pages/contact/contact.component";

const routes: Routes = [
  { path: '', component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent, title: "Gugci" },
      { path: 'about', component: AboutComponent, title: "About" },
      { path: 'projects', component: ProjectsComponent, title: "Projects" },
      { path: 'contact', component: ContactComponent, title: "Contact" },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
