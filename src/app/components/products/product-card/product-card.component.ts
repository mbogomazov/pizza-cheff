import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'pizza-cheff-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  @Input()
  image!: string;

  @Input()
  title!: string;

  @Input()
  description!: string;
}
