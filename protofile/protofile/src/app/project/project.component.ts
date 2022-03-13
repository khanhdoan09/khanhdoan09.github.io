import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { projects, Project, tag } from './project detail/model'
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css', '../responsive.component.css']
})
export class ProjectComponent implements OnInit {

  currentProjects = projects
  tag = tag
  constructor() { }

  ngOnInit(): void {
  }

  originalOrder = (a: KeyValue<string,string>, b: KeyValue<string,string>): number => {
    return 0;
  }

  onClickTag(tagChosen: string) {
    this.currentProjects = projects.filter(project => {
      for (const tag of project.tag) {
        if (tag == tagChosen)
          return project
      }
      return null
    })
  }

}
