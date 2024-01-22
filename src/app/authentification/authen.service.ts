import { Injectable } from '@angular/core';
export enum Gender {
  MALE = 'Male',
  FEMALE = 'Female',
}
export enum UserRole {
  STUDENT = 'Student',
  INSTRUCTOR = 'Instructor',
}
export interface User {
  id: string;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  birthday: string;
  gender: Gender;
  role: UserRole;
}
export interface UserLogin {
  username: string;
  password: string;
}
export interface UserUpdate {
  id: string;
  firstname: string;
  lastname: string;
  birthday: string;
  gender: Gender;
}
@Injectable({
  providedIn: 'root'
})
export class AuthenService {

  private Users: User[] = [
    {
      id: '1',
      firstname: 'Youssef',
      lastname: 'Smaoui',
      username: 'YoussefSM',
      password: 'pass',
      birthday: '16/03/2000',
      gender: Gender.MALE,
      role: UserRole.STUDENT,
    },
    {
      id: '2',
      firstname: 'Lilia',
      lastname: 'Smaoui',
      username: 'LiliaSM',
      password: 'pass',
      birthday: '18/05/1979',
      gender: Gender.FEMALE,
      role: UserRole.INSTRUCTOR,
    }
  ]

  constructor() { }

  public login(data: UserLogin): boolean {
    const fetchedUser = this.Users.find(
      (value) => value.username === data.username
    );
    if (fetchedUser) {
      if (fetchedUser.password === data.password) {
        localStorage.setItem('user', JSON.stringify(fetchedUser));
        return true;
      }
    }   
    return false;
  }


  public getUser(): User {
    const userString = localStorage.getItem('user');
    const user: User = JSON.parse(userString!);
    return user;
  }

  public updateProfile(data: UserUpdate) {
    const indexToUpdate = this.Users.findIndex(user => user.id === data.id);
    if (indexToUpdate !== -1) {
      this.Users[indexToUpdate].firstname =  data.firstname;
      this.Users[indexToUpdate].lastname =  data.lastname;
      this.Users[indexToUpdate].birthday =  data.birthday;
      this.Users[indexToUpdate].gender =  data.gender;
    };
    localStorage.removeItem('user');
    localStorage.setItem('user', JSON.stringify(this.Users[indexToUpdate]));
    console.log(this.Users);
    return true;
  }

  public logout(): boolean {
    localStorage.removeItem('user');
    return true;
  }

  public getUserRole(): UserRole {
    const userString = localStorage.getItem('user');
    const user: User = JSON.parse(userString!);
    return user.role;
  }
}
