import { Component, EventEmitter, Output } from '@angular/core';
import { AuthenService } from '../../authentification/authen.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  searchField: string = "";

  @Output() searchEvent = new EventEmitter<string>();
  constructor(
    private authenService: AuthenService,
    private router: Router
  ) {}

  search() {
    this.searchEvent.emit(this.searchField);
  }
  logout() {
    this.authenService.logout();
    this.router.navigate(['/login']);
  }
}
