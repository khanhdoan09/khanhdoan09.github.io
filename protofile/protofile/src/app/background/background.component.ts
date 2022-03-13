import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css', '../responsive.component.css']
})
export class BackgroundComponent implements OnInit {

  contentIntroTextMain: string[] = ['Đoàn Trần Phi Khánh', 'A Intern']
  introTextMain: string = ''
  i: number = 0
  j: number = 0
  checkTyping=true
  constructor() {
  }
  idInterval:any

  ngOnInit(): void {
    this.idInterval=setInterval(this.typingText.bind(this), 200)
  }

  typingText() {
    if (this.i < this.contentIntroTextMain[this.j].length && this.checkTyping) {
      this.introTextMain += this.contentIntroTextMain[this.j].charAt(this.i)
      this.i++
    }
    else if (this.i == this.contentIntroTextMain[this.j].length && this.checkTyping) {
      this.checkTyping = false
    }
    else if (this.i !==0 && !this.checkTyping){
      this.i--;
      this.introTextMain = this.contentIntroTextMain[this.j].substring(0, this.i)
    }
    else if (this.i===0){
      this.checkTyping=true
        if (this.j === this.contentIntroTextMain.length-1) {
        this.j--
      }
      else {
        this.j++
      }
    }
  }
}

