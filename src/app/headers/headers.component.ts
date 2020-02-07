import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  display()
  {
    let obj =JSON.parse(sessionStorage.getItem('first'));
    document.write(JSON.stringify(obj['key']));
  }

}
