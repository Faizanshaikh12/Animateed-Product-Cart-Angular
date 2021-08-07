import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {count} from "rxjs/operators";
import {Router} from "@angular/router";
import {Products, ServerResponse} from "../../models/Products";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Products[] = [];

  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe((res: ServerResponse) => {
      this.products = res.products;
    })
  }

  selectProduct(id: number){
    this.router.navigate(['/product', id]).then();
  }

}
