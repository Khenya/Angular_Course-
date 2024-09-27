import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HistoryComponent } from '../history/history.component';

@Component({
  selector: 'calculator',
  standalone: true,
  imports: [CommonModule, FormsModule, HistoryComponent],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  box1value: number = 0;
  box2value: number = 0;
  history: string[] = [];

  @Output() sum = new EventEmitter();
  @Output() mul = new EventEmitter();
  @Output() reset = new EventEmitter();

  public onSum() {
    const result = Number(this.box1value) + Number(this.box2value);
    this.sum.emit(result);
    this.history.push(`SUM ${result}`);
  }

  public onMul() {
    const result = Number(this.box1value) * Number(this.box2value);
    this.mul.emit(result);
    this.history.push(`MUL ${result}`);
  }

  public onReset() {
    this.box1value = 0;
    this.box2value = 0;
    this.reset.emit(null);
    this.history = []; 
  }
}