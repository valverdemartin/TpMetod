import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['../../app.component.scss','./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  userName: string = '';
  constructor(private router: Router) 
  {
    this.userName = localStorage.getItem('account');
  }

  ngOnInit(): void {
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['login']);
  }

}
