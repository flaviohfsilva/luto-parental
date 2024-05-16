import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.scss']
})
export class ScrollTopComponent {

  isScroll: boolean = false;


  @HostListener('window:scroll', ['$event'])
  scrollWindow(){
    // console.log(window.pageYOffset)

    if(window.pageYOffset >= 1500){
      this.isScroll = true
    } else {
      this.isScroll = false
    }
  }

  scrollTop(){
    document.body.scrollIntoView({ behavior: 'smooth' })
  }
}
