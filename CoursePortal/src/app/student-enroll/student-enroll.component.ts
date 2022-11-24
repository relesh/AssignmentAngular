import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'student-enroll',
  templateUrl: './student-enroll.component.html',
  styleUrls: ['./student-enroll.component.css']
})
export class StudentEnrollComponent implements OnInit {

  CalPer:any = 0;
  name:any="";
  marks:any="";
  enableFlag=true;
  total=700;
  userMsg="";
  constructor() { }

  ngOnInit(): void {
  }

  calculate(){

    this.CalPer="";

    if(this.name != "" &&  this.marks>0 && this.marks<= this.total){
            this.CalPer=(this.marks/this.total)*100;
            this.userMsg="";

    }else{
      this.userMsg="Name should not be blank and the entered Marks should be between 1 than 700";
    }

    //console.log(this.CalPer);
    //console.log(this.CalPer < 35);
    if(this.CalPer < 35){
      this.userMsg="Student "+ this.name +" cannot be promoted to class of 2023";
      //this.userMsg="Student "+ this.name +" admitted to class of 2023";
    }else{
      this.enableFlag=false;
    }

    this.marks=0;
  }

  promote(){
    this.userMsg="Congratulations "+ this.name +" promoted to class of 2023";
  }
}
