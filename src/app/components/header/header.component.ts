import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'pizza-cheff-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {

  readonly mobileMenuShow = new BehaviorSubject<boolean>(false);

  toggleMobileMenu() {
    this.mobileMenuShow.next(!this.mobileMenuShow.value);
  }
}
