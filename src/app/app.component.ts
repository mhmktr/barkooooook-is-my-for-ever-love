import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  age:number=55;
  name:string="jigar tala"
  title = 'my-app';
  lastName: any;
 
  allow: boolean = false;
  constructor(){
setTimeout(()=>{
  this.allow=true;
},5000);

  }
  getName(){
    return this.name;
  }

  // onInputChange(event:Event){
  //   this.lastName=(<HTMLInputElement>event.target).value;
  // }
  onSubmit(){
    console.log(this.lastName);
    
  }

}

