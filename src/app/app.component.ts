import { Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;


  ngOnInit(): void {
    console.log(this.container);    
  }
  
  ngAfterViewInit(): void {
    console.log(this.container);    
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    
  }

  createCard() {
    this.container.clear();
    const cardComponent = this.container.createComponent(CardComponent);
    cardComponent.instance.title = 'Titulo aqui';
  }

  
}
