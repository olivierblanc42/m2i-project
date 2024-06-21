import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import type { User } from '../../types';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <form #userForm="ngForm" (submit)="handleSubmit($event)" class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
          <label class="text-sm" for="username">User Name: </label>
          <input 
            id="username"
            type="text"
            class="text-slate-200 rounded bg-slate-700"
            [(ngModel)]="username"
            name="username"
          />
        <div class="flex flex-col gap-1">
          <label class="text-sm" for="firstName">First Name: </label>
          <input 
            id="firstName"
            type="text"
            class="text-slate-200 rounded bg-slate-700"
            [(ngModel)]="firstName"
            name="firstName"
          />
          <div class="flex flex-col gap-1">
          <label class="text-sm" for="lastName">Last Name: </label>
          <input 
            id="lasttName"
            type="text"
            class="text-slate-200 rounded bg-slate-700"
            [(ngModel)]="lastName"
            name="lastName"
          />
          <div class="flex flex-col gap-1">
          <label class="text-sm" for="email">Email: </label>
          <input 
            id="email"
            type="email"
            class="text-slate-200 rounded bg-slate-700"
            [(ngModel)]="email"
            name="email"
          />
          <div class="flex flex-col gap-1">
          <label class="text-sm" for="password">Password: </label>
          <input 
            id="password"
            type="password"
            class="text-slate-200 rounded bg-slate-700"
            [(ngModel)]="password"
            name="password"
          />
          @if (error) {
          <p class="text-red-500">{{error}}</p>
        }
        <div class="flex justify-center">
          <button 
            type="submit"
            class="bg-slate-600 text-white rounded px-4 py-2"
          >Update</button>
        </div>
      </form>

  `,
  styles: ``
})
export class UserComponent implements OnInit{
  id!: string;
   user: User =  {
    id: '',
   username: '',
   firstName: '',
   lastName: '',
   email: '',
   password: '',
   createdAt: new Date(),
   idAdresses: [],
   idGenders: []

  };
  error: string = '';

  constructor(
    private Router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.userService.getUser(this.id).subscribe((user: User) => {
      if (!user) {
        this.Router.navigate(['/error/404']);
        return;
      }
      this.user = user;
      this.user.username = user._username;
      this.user.firstName = user._firstName;
      this.user.lastName = user._lastName;
      this.user.email = user._email;
      this.user.password = user._password;
      
    });
  }
  
  handleSubmit(e: SubmitEvent) {
    if (!this.user.email) {
      this.error = "Email is required";
      return;
    }
    if (!this.user.firstName || !this.user.lastName || !this.user.username || !this.user.password) {
      this.error = "All fields are required";
      return;
    }

    this.userService.updateUser({
      id: this.user.id,
      email: this.user.email,
      password: this.user.password,
      username: this.user.username,
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      createdAt: this.user.createdAt,
      idAdresses: this.user.idAddresses,
      idGenders: this.user.idGenders
    });

      this.user.username = '';
      this.user.firstName = '';
      this.user.lastName = '';
      this.user.email = '';
      this.user.password = '';
      
    this.error = "";

    this.Router.navigate(['/users']);
  }
}







