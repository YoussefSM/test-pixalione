import { Component, OnInit } from '@angular/core';
import { AuthenService, Gender, User, UserUpdate } from '../authen.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent implements OnInit{

  options = ['Male', 'Female'];
  selectedOption: string = '';

  user: User = this.authenService.getUser()
  updateUser: UserUpdate = {
    firstname: this.user.firstname,
    lastname: this.user.lastname,
    birthday: this.user.birthday,
    gender: this.user.gender,
    id: ''
  };
  
  constructor(
    private authenService: AuthenService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.updateUser = this.user;
  }

  onSubmit() {
    this.authenService.updateProfile(this.updateUser);
      this.router.navigate(['/home']);
  
  }



}
