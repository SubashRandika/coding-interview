import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { LoadingIndicatorComponent } from './components/shared/loading-indicator/loading-indicator.component';
import { Observable } from 'rxjs';
import { Product } from './models/product';
import { ProductService } from './services/product.service';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ProductCardComponent,
    LoadingIndicatorComponent,
    AsyncPipe,
    NgIf,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private productService: ProductService = inject(ProductService);

  products$: Observable<Product[]> | undefined;

  ngOnInit() {
    this.products$ = this.productService.getProducts();
  }
}
