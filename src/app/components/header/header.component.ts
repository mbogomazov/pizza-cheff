import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pizza-cheff-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
