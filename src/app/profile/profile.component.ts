import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('data') data;
  constructor() {}

  ngOnInit(): void {}
}
