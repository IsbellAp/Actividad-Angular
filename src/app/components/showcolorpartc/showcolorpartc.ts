import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, map } from 'rxjs';
import { Color, RgbColor } from '../../services/color';

@Component({
  selector: 'app-showcolorpartc',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './showcolorpartc.html',
  styleUrl: './showcolorpartc.css'
})
export class Showcolorpartc implements OnInit {
  colorCss$!: Observable<string>;
  grayCss$!: Observable<string>;

  constructor(private colorService: Color) {}

  ngOnInit(): void {
    this.colorCss$ = this.colorService.color$.pipe(
      map((color: RgbColor) => `rgb(${color.r}, ${color.g}, ${color.b})`)
    );

    this.grayCss$ = this.colorService.color$.pipe(
      map((color: RgbColor) => {
        const avg = Math.round((color.r + color.g + color.b) / 3);
        return `rgb(${avg}, ${avg}, ${avg})`;
      })
    );
  }
}
