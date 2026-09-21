import { Component, Input, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Color } from '../../services/color';

@Component({
  selector: 'app-rgbpartb',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rgbpartb.html',
  styleUrl: './rgbpartb.css'
})
export class Rgbpartb {
  @Input() channel!: 'r' | 'g' | 'b';
  private colorService = inject(Color);

  value = computed(() => this.colorService.color()[this.channel]);

  onChange(newValue: string): void {
    const numeric = Number(newValue);
    if (!isNaN(numeric)) {
      this.colorService.setChannel(this.channel, numeric);
    }
  }
}
