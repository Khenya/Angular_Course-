import { Component, Input } from '@angular/core';
interface IPerson{
  gender:number,
  name:string,
  age:number
}
@Component({
  selector: 'person',
  standalone: true,
  imports: [],
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss'
})
export class PersonComponent {
  @Input() person:IPerson = {gender:0,name:"",age:0}
}