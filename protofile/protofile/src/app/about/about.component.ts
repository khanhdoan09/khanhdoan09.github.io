import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  user = {
    avatar: "assets/image/img-per.jpg",
    name: "Đoàn Trần Phi Khánh",
    dob: "28-09-2021",
    nationality: "Việt Nam",
    hobby: "Football, Swimming",
    experience: "None",
    work: "Student",
    email: "khanhdoan.kd@gmail.com",
    english: `Good at reading, listening
     Bad at speaking, writing`
  }
  constructor() { }

  ngOnInit(): void {
  }

}
