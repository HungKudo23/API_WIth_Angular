import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const api1 = "http://localhost:3000/home";
const api2 = "http://localhost:3000/products";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  showAllCategory() {
    return this.http.get(`${api1}`);
  }

  showAllProducts() {
    return this.http.get(`${api2}`);
  }

}
