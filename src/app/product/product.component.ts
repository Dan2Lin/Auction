import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Array<Product>;
  constructor() { }
  ngOnInit() {
    this.products = [
      new Product(1, '第一个商品', 50, 3.5, ' 这是第一个商品的描述信息 ', ['家电', '电子设备']),
      new Product(2, '第二个商品', 35, 4.5, ' 这是第二个商品的描述信息 ', ['电子设备']),
      new Product(3, '第三个商品', 87, 2.5, ' 这是第三个商品的描述信息 ', ['图书', '电子设备']),
      new Product(4, '第四个商品', 49, 3.0, ' 这是第四个商品的描述信息 ', ['育儿', '电子设备']),
      new Product(5, '第五个商品', 30, 3.9, ' 这是第五个商品的描述信息 ', ['家电']),
      new Product(6, '第六个商品', 10, 3.5, ' 这是第六个商品的描述信息 ', ['家电', '电子设备']),
    ];
  }

}
export class Product {
  constructor(
    private id: number,
    private title: String,
    private price: number,
    private rating: number,
    private desc: String,
    private category: Array<String>
  ) {

  }

}
