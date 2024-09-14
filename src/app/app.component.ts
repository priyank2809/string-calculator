import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { StringCalculatorService } from './string-calculator.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  title = 'String Calculator';
  input = '';
  result = 0;
  error = '';

  constructor(private calculatorService: StringCalculatorService) {}

  calculate() {
    try {
      this.result = this.calculatorService.add(this.input);
      this.error = '';
    } catch (e) {
      if (e instanceof Error) {
        this.error = e.message;
      } else {
        this.error = 'An unknown error occurred';
      }
    }
  }
}
