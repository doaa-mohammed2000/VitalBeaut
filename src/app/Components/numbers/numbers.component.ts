import { Component, OnInit } from '@angular/core';

// Interface to define properties and their types
interface NumberCounts {
  salonCount: number;
  creamCount: number;
  branchesCount: number;
  customersCount: number;
}

@Component({
  standalone:true,
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit, NumberCounts {
  
  salonCount: number = 0;
  creamCount: number = 0;
  branchesCount: number = 0;
  customersCount: number = 0;

  constructor() { }

  ngOnInit(): void {
    // Simulate counting up animation or fetch real data
    this.animateCounters();
  }

  animateCounters() {
    // Simulate counting animation for demonstration
    this.startCounting(this.salonCount, 34, 1000, 'salonCount');
    this.startCounting(this.creamCount, 543, 1500, 'creamCount');
    this.startCounting(this.branchesCount, 316, 1200, 'branchesCount');
    this.startCounting(this.customersCount, 3000, 2000, 'customersCount');
  }

  startCounting(startValue: number, endValue: number, duration: number, propertyName: keyof NumberCounts) {
    const increment = (endValue - startValue) / duration * 50;
    const interval = setInterval(() => {
      if (startValue < endValue) {
        this[propertyName] = Math.ceil(startValue);
        startValue += increment;
      } else {
        this[propertyName] = endValue;
        clearInterval(interval);
      }
    }, 50);
  }
}
