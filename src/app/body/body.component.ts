import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
 title="SRU Desk Attendent"
      desc="Managed Dorm Computer system"
    
  title1 = "IT Guy"
  desc1 = "Maintained computer systems and hardware"

 
 

  constructor() { }

  ngOnInit() { 
  }

}
