import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Course, HomeService } from '../home.service';
import { AuthenService, UserRole } from '../../authentification/authen.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CourseComponent } from '../course/course.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, CourseComponent, RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  courses!: Course[];
  isAnInstructor: boolean = false;
  role!: UserRole;

  constructor(
    private homeService: HomeService,
    private authenService: AuthenService
  ) {}

  ngOnInit(): void {
    this.courses = this.homeService.getCourses();
    this.role = this.authenService.getUserRole();
    this.isAnInstructor = this.role === UserRole.INSTRUCTOR;
  }
  search(data: string) {
    this.courses = this.homeService.searchCourse(data);
  }
}
