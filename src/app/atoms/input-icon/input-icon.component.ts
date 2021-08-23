import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-icon',
  templateUrl: './input-icon.component.html',
  styleUrls: ['./input-icon.component.scss']
})
export class InputIconComponent implements OnInit {
  @Input() icon:string =''
  @Input() type:string =''
  @Input() placeholder:string =''
  constructor() { }

  ngOnInit(): void {
  }

}
