import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pizza-cheff-advantage-card',
  templateUrl: './advantage-card.component.html',
  styleUrls: ['./advantage-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdvantageCardComponent { }
