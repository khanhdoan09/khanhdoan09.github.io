import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BackgroundComponent } from './background/background.component';
import { AboutComponent } from './about/about.component';
import { SkillComponent } from './skill/skill.component';
import { ProgressComponent } from './skill/progess.component';
import { ProjectComponent } from './project/project.component'
import {ProjectDetailComponent} from './project/project detail/project-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BackgroundComponent,
    AboutComponent,
    SkillComponent,
    ProgressComponent,
    ProjectComponent,
    ProjectDetailComponent
    ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
