import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Color } from '../../services/color';

@Component({
  selector: 'app-numberparta',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './numberparta.html',
  styleUrl: './numberparta.css'
})
export class Numberparta implements OnInit, OnDestroy {
  form: FormGroup;
  private subscription!: Subscription;

  constructor(private fb: FormBuilder, private colorService: Color) {
    this.form = this.fb.group({
      hex: ['4f7905', [Validators.required, Validators.pattern(/^[0-9a-fA-F]{6}$/)]]
    });
  }

  get hexControl() {
    return this.form.get('hex')!;
  }

  ngOnInit(): void {
    this.subscription = this.colorService.color$.subscribe(color => {
      const hex = this.colorService.rgbToHex(color);
      this.form.patchValue({ hex }, { emitEvent: false });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onShow(): void {
    if (this.form.valid) {
      this.colorService.setFromHex(this.form.value.hex);
    } else {
      this.hexControl.markAsTouched();
    }
  }
}
