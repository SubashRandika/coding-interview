import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatChipsModule,
    CommonModule,
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
