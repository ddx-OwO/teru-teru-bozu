import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  test = 'test123';
  data = {
    'result': [
      {'id': 1},
      {'id': 2},
      {'id': 3},
      {'id': 4}
    ]
  }

  ngOnInit(): void {
  }

}
