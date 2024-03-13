import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product, ProductResponse } from '../models/product';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public basUrl: string = 'https://dummyjson.com';
  private http: HttpClient = inject(HttpClient);

  getProducts() {
    return this.http
      .get<ProductResponse>(`${this.basUrl}/products`)
      .pipe(map((res: ProductResponse) => res.products as Product[]));
  }
}
