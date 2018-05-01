import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from './project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [ProjectService]
})
export class ProjectComponent {

  private projects: Project[] = [];
  
  constructor(private http: HttpClient, private projectService: ProjectService) {}
  
  getAll(){
    this.projectService.getAllProjects().subscribe((response: any) => {
      let data = response.data;
      if (data != null) {
        this.projects = data;
        console.log(data);
      }
    });
  }
}