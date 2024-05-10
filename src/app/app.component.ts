import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Customer } from './models/customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  //indirektni?: string|null;
  //private indirektniSubscription?: Subscription;
  title = 'KissMiss';
  //role?: Role;
 // Role = Role;
  //kvartal: number | undefined;
  url: string = 'localhost:4200/customer';


  constructor(
    private router: Router,
    private http: HttpClient

  ) {}

  ngOnInit(): void {
  /*
    const roleStr = localStorage.getItem('role');
    if (roleStr) {
      this.role = Role[roleStr as keyof typeof Role];
    }
    */
  
  }

  ngOnDestroy(): void {
  }

  onLogout(): Observable<Customer[]>  {
    return this.http.get<Customer[]>(this.url);

   // localStorage.clear(); // Clear all local storage
    /*
    this.router.navigate(['/login']).then(() => {
      localStorage.removeItem('token');
      localStorage.removeItem('role');
    
    });
    */
  }
}
