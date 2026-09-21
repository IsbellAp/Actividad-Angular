import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, map } from 'rxjs';
import { Color, RgbColor } from '../../services/color';

@Component({
  selector: 'app-rgbpartb',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rgbpartb.html',
  styleUrl: './rgbpartb.css'
})
export class Rgbpartb implements OnInit {
  @Input() channel!: 'r' | 'g' | 'b';

  value$!: Observable<number>;

  constructor(private colorService: Color) {}

  ngOnInit(): void {
    this.value$ = this.colorService.color$.pipe(
      map((color: RgbColor) => color[this.channel])
    );
  }

  onChange(newValue: string): void {
    const numeric = Number(newValue);
    if (!isNaN(numeric)) {
      this.colorService.setChannel(this.channel, numeric);
    }
  }
}
