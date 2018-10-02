import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;

  serverCreationStatus = "No server was created!";
  name: string = "first"
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
      this.name = "second";
    }, 2000);
  }

  ngOnInit() {
  }

  getName() {
    return this.name + " from method getName!";
  }

  onCreateServer() {
    this.serverCreationStatus = "Server was created!";
  }

}

