import { Component, OnInit } from '@angular/core';

import { projects } from './projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Array<any>;

  constructor() {
    this.projects = projects;
  }

  ngOnInit() {
  }

}
