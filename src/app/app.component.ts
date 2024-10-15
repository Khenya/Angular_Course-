import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCardComponent } from './user-card/user-card.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { CounterComponent } from './counter/counter.component';
import { filter, from, map, tap } from "rxjs";
import { AppColorsDirective } from "./app-colors.directive";
import { CreateHtmlDirective } from "./create-html.directive";
import { PurePipe } from "./pure.pipe";
import { ImpurePipe } from "./impure.pipe";
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from "@angular/material/button";

interface IPerson {
  name:string
  lastName: string
  age?: number
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserCardComponent, CalculatorComponent, CommonModule, PersonComponent, CounterComponent, AppColorsDirective, CreateHtmlDirective, PurePipe, ImpurePipe, MatCardModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  users = [{ name: 'abc', 'email': 'abc@gmail.com' }, { name: 'dfg', 'email': 'dfg@gmail.com' }]
  selectedUser:any = this.users[0];

  userCardCreated: boolean = true
  result:number = 0;
  title:number = 10;
  animals: string[] = ["a", "s", "d", "f", "g", "h"]

  person: IPerson = {
    name: 'Brenda',
    lastName: 'Alvarado',
    age: 22
  }

  females:number=0
  males:number=0
  discounts:number=0
  persons:any[]=[
    {gender:0,name:"Brenda Alvarado",age:22},
    {gender:0,name:"Anita Arce",age:12},
    {gender:1,name:"Luis Choque",age:43},
    {gender:0,name:"Brenda Choque",age:32},
    {gender:0,name:"Maribel Conde",age:18},
    {gender:1,name:"Juan Mendonza",age:4},
    {gender:1,name:"Daniel Camacho",age:22},
    {gender:1,name:"Javier Ticona",age:52},
    {gender:0,name:"Khenya Mamni",age:26},
    {gender:1,name:"Manuel Lopez",age:53}]

  students: number[] = [1,2,3,4,5,6]
  parents: number[] = [7,8,9,10]

  var1 = 0
  var2 = null
  var3 = 'hola'

  youtube = from([1,2,3,4,5,6,])

  constructor(){
    const {name,age} = this.person
    // console.log('desestructuracion: ', name, age)
    let both = [...this.students,...this.parents]
    // console.log('spreed operator: ', both)
    // console.log('REST operator: ', this.sum(2,4,6))
    // console.log('Nullish Coalesing:',  this.var2 ?? this.var3  )
    // console.log('OR:', this.var2 || this.var1)
    // console.log('subtract ', this.subtract(8,4))

    // console.log('MAP:', this.animals.map( (animal:string) => ( animal + 'new')    ))
    // console.log('FOREACH:', this.animals.forEach( (animal) => ( animal + 'new')    ))
    // console.log('FIND', this.animals.find((animal)=>  animal === 'z'))
    // console.log('FILTER', this.animals.filter((animal)=>  animal === 'z'))
    // console.log('INDEXOF', this.animals.indexOf('c'))
  
    this.youtube.subscribe((res) => {
      console.log('SUBCRIBER 1: ', res);
    })

    // this.calculateTotals()
  }
  
  public sumPure(a:number, b:number): number {
    return a + b;
  }

  public sumImpure(a:number, b:number): number {
    return a + b + Math.random();
  }

  public addNumber() {
    this.students = [...this.students, 12]
  }

  public calculateTotals() {
    this.females = this.persons.filter(p => p.gender === 0).length;
    this.males = this.persons.filter(p => p.gender === 1).length;
    this.discounts = this.persons.filter(p => p.age > 18).length;
  }
  public deleteDiscounts() {
    this.persons = this.persons.filter(p => p.age <= 18);
    this.calculateTotals();
  }

  public sum(...persons:number[]){
    return persons[0]+persons[1]
  }
  public sum2(...persons:number[]){
    return persons.reduce((acumulador, valorActual)=> (acumulador+valorActual), 0)
  }
  public sum3(num1: number, num2:number): number{
    return num1+num2
  }
  // public sum(num1: number, num2: number): number {
  //   return num1 + num2
  // }

  public getColor(value:string): void {
    console.log("value: ", value);
  }
  
  private subtract(num1: number, num2: number):number{
    return num1 - num2
  }

  
  public getArray(): void{
    const persons: number[] = [1, 2, 3, 4, 5, 6].filter(person => person % 2 === 0)
    for (let index = 0; index < persons.length; index++) {
      // console.log('person = ', persons[index])
    }
  }

  public receiveData(data:any){
    console.log('Print in father component: ', data)
  }

  public onResult(event:any){
    console.log('event from child:', event)
    this.result = event ?? 0
  }

  addVideo() {
    this.youtube
      .pipe(
        map((res: number) => {
          //console.log("MAP OPERATOER RXJS: ", res);
          if (res % 2 === 0) {
            return res;
          } else {
            return null
          }
        }),
        tap((res)  => {console.log('VALUE: ', res)}),
        filter((res: number | null) => res !== null),
      )
      .subscribe((res) => {
        console.log("SUSCRIBER 2: ", res);
      });
  }
}