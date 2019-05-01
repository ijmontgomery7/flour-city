import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-high-low',
  templateUrl: './high-low.component.html',
  styleUrls: ['./high-low.component.sass']
})
export class HighLowComponent implements OnInit {
  data = [
    {month : 'Jan', data1830: [4.75, 5.00], data1829: [8.12, 8.25]},
    {month : 'Feb', data1830: [4.62, 4.75], data1829: [8.25, 8.50]},
    {month : 'Mar', data1830: [4.62, 5.50], data1829: [7.62, 8.25]},
    {month : 'Apr', data1830: [4.75, 5.12], data1829: [6.50, 7.25]},
    {month : 'May', data1830: [4.75, 4.88], data1829: [6.50, 7.00]},
    {month : 'Jun', data1830: [4.75, 5.12], data1829: [6.50, 6.75]},
    {month : 'Jul', data1830: [4.88, 5.00], data1829: [5.00, 6.25]},
    {month : 'Aug', data1830: [4.88, 5.12], data1829: [5.00, 5.38]},
    {month : 'Sep', data1830: [5.00, 5.38], data1829: [5.25, 5.50]},
    {month : 'Oct', data1830: [5.00, 5.25], data1829: [5.25, 5.88]},
    {month : 'Nov', data1830: [5.06, 5.25], data1829: [5.25, 5.50]},
    {month : 'Dec', data1830: [5.06, 5.25], data1829: [5.00, 5.38]},
  ];

  total = {label: 'Year\'s extremes', data1830: [4.62, 5.50], data1829: [5.00, 8.50]};

  displayedColumns = ['month', '1830-range', 'percent-changed-1830', '1829-range', 'percent-changed-1829'];
  constructor() { }

  ngOnInit() {
  }

}
