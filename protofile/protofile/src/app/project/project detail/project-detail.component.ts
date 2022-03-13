import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Project } from './model';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  @Input() project!:Project
  constructor() { }

  ngOnInit(): void {
  }

}
