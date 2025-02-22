import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Album } from '../album';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  albumInfo: Album | any;

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this._productService.getAlbum(1).subscribe( Response => this.albumInfo = Response);
  }

}
