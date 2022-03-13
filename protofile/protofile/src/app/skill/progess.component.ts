import { Component, Input, OnInit } from "@angular/core";
@Component({
  selector: 'app-progress',
  template: `
  <div class="skill__bar">
    <div class="skill__bar--bold" id="bar-html" style="width: {{progress}}%;background-color:{{backgroundColor}}">
      <div class="skill-logo" style="color:{{color}}; border: 5px solid {{color}};">
          <i class="{{skill}}"></i>
      </div>
    </div>
  </div>`,
  styles: [`
  .skill__bar {
  max-width: 600px;
  width: 100%;
  height: 20px;
  background-color: var(--bold-grey);
  border-radius: 10px;
  padding: 0;
}
  .skill__bar--bold {
  border-radius: 20px;
  width: 40px;
  height: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 1000;
  overflow: visible !important;

}
  .skill-logo {
  border-radius: 100%;
  font-size: 18px;
  z-index: 2000;
  height: 40px !important;
  width:40px !important;
  overflow-y:visible !important;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--pure-white-color);
}
  `]
})

export class ProgressComponent {
  @Input() progress!:number
  @Input() backgroundColor!:string
  @Input() color!:string
  @Input() skill!:string

}
