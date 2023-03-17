import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'src/assets/data';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
constructor(private router:Router){}
product=data;
gotohere (id:any){
  localStorage.setItem('id',id);
  this.router.navigate(['/single']);
}
}
