import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.page.html',
  styleUrls: ['./userlist.page.scss'],
})
export class UserlistPage implements OnInit {

  characters : any = [];
  constructor(
    private httpClient : HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    this.httpClient.get('https://rickandmortyapi.com/api/character').subscribe(
      (data : any) => {
        console.log(data);
        this.characters = data.results;
      }, (error ) => {
      console.log(error);
      }
    )

  }

}
