import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'pizza-cheff-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderComponent {
  readonly form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/\+7 \(\d\d\d\) \d\d\d-\d\d\d/)]),
  })

  readonly phoneMask = [
    '+',
    '7',
    ' ',
    '(',
    /\d/,
    /\d/,
    /\d/,
    ')',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ];

  readonly nameMask = /[а-яА-Я]/;

  readonly orderCompleted = new BehaviorSubject<boolean>(false);

  constructor(private readonly http: HttpClient) { }

  closePopul() {
    this.orderCompleted.next(false);
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.http.post('/make-order', {
      name: this.form.controls.name.value,
      address: this.form.controls.address.value,
      phone: this.form.controls.phone.value,
    }).pipe(untilDestroyed(this)).subscribe();

    this.orderCompleted.next(true);
  }
}
