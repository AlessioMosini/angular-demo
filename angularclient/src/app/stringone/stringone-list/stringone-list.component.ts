import { Component, OnInit } from '@angular/core';
import {Stringone} from "../stringone";
import {StringoneService} from "../stringone.service";

@Component({
  selector: 'app-stringone-list',
  templateUrl: './stringone-list.component.html',
  styleUrls: ['./stringone-list.component.css']
})
export class StringoneListComponent implements OnInit {

  stringoni: Stringone[];

  constructor(private strigoneService: StringoneService) { }

  ngOnInit() {
    this.strigoneService.findAll().subscribe(data => {
      this.stringoni = data;
    });
  }

}
