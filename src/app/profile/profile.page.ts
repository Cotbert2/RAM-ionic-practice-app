import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  idToFind : number = 0;
  dataCharacter : any = {};

  constructor(
    private activatedRouter : ActivatedRoute,
    private httpClientService : HttpClient
  ) { }

  ngOnInit() {
    this.idToFind = Number(this.activatedRouter.snapshot.paramMap.get('id'));
    console.log('the id is: ', this.idToFind);

    //https://rickandmortyapi.com/api/character/2
    this.getCharInfor(this.idToFind)
    .subscribe(
      (data : any) => {
        console.log(data);
        this.dataCharacter = data;
      }, (err : any) => {
        console.log(err);
      }
    )
  }

  getCharInfor(id : number) : Observable<any>{
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    return this.httpClientService.get(url);
  }

}
