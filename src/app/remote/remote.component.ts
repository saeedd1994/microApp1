import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-remote',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.scss']
})
export class RemoteComponent implements OnInit {
  isExist: Boolean = true;
  cli:string='"@angular/cli": "~14.2.3"'
  core:string='"@angular/core": "^14.2.0"'
  constructor() {
  }

  ngOnInit(): void {
  }

}
