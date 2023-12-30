import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { ProductsService } from 'src/app/services/products.service';

@UntilDestroy()
@Component({
  selector: 'pizza-cheff-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit {
  private readonly productsList = new BehaviorSubject<Array<Product> | null>(null);
  readonly productsList$ = this.productsList.asObservable();

  constructor(private readonly productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getProductsList().pipe(untilDestroyed(this)).subscribe(productsList => this.productsList.next(productsList))
  }
}
