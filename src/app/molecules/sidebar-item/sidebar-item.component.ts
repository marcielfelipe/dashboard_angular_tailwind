import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent implements OnInit {
  @Input() page:string=''
  @Input() icon:string=''
  @Input() link:string=''
  @Input() active:boolean=false
  constructor() { }

  ngOnInit(): void {
  }

}
