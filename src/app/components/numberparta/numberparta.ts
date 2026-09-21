import { Component, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Color } from '../../services/color';

@Component({
  selector: 'app-numberparta',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './numberparta.html',
  styleUrl: './numberparta.css'
})
export class Numberparta {
  form: FormGroup;
  private colorService = inject(Color);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      hex: ['4f7905', [Validators.required, Validators.pattern(/^[0-9a-fA-F]{6}$/)]]
    });

    effect(() => {
      const hex = this.colorService.hex();
      this.form.patchValue({ hex }, { emitEvent: false });
    });
  }

  get hexControl() {
    return this.form.get('hex')!;
  }

  onShow(): void {
    if (this.form.valid) {
      this.colorService.setFromHex(this.form.value.hex);
    } else {
      this.hexControl.markAsTouched();
    }
  }
}
