import { Component, OnInit } from '@angular/core';

@Component({
  /* the selector property can be omited */
  selector: 'app-servers',
  /* template or templateUrl  is a mandatory property.
  templateUrl is used for an external file, template for an internal template */
  template: '<app-server></app-server><app-server></app-server>',
  /* the template-line musn't be wrapped when you've used single quotes.
  (not supporrted in default typescript strings)
  in case you want to add multiple lines, use backticks! */
  // styleUrls: ['./servers.component.css']
  styles: ['p {color: green;}']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
