import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  subject="";
  submittedSub:any[]=[];
  constructor() { }

  ngOnInit(): void {

  }

  submit(){

    this.submittedSub.push(this.subject);
    //console.log(this.submittedSub);

    this.subject="";
  }

  clear(){
    this.submittedSub=[];
    //console.log(this.submittedSub);
  }

}
