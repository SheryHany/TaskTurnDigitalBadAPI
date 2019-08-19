import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-images',
  templateUrl: './users-images.component.html',
  styleUrls: ['./users-images.component.css']
})
export class UsersImagesComponent implements OnInit {

  news: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getResult();
  }

  getResult() {
    this.http.get('https://api.rss2json.com/v1/api.json?rss_url=http://rss.cnn.com/rss/edition.rss')
      .subscribe((data) => {
        // tslint:disable-next-line:label-position
        this.news = data;

        console.log('================================');
        console.log(this.news);
        console.log(typeof(this.news));
        console.log(this.news.items[0].title);
      }),
      // tslint:disable-next-line:no-unused-expression
      (err) => { console.log(err); };
  }

  getInfoId(id: any) {
    const info = this.news.find(u => u.id === id);
    return info;
  }
}

