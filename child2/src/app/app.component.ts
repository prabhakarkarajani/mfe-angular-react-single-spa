import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'child2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private router:Router){}
  ngOnInit(){
    this.router.navigate(['/child2/page1']) 
  }
  title = 'child2';
}
