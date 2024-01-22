import { Component } from '@angular/core';
import { AuthenService, UserLogin } from '../authen.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(
    private authenService: AuthenService,
    private router: Router) {}
  credentials: UserLogin = { username: '', password: '' };
  alert : string = "";

  onSubmit() {
    const status: boolean = this.authenService.login(this.credentials);
    if (status) {
      this.router.navigate(['/home'])
    } else {
      this.alert = "Error !";
      console.log("Error !");
    }
  }
}
