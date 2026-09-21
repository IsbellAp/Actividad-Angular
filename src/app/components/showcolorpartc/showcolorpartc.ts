import { Component, inject } from '@angular/core';
import { Color } from '../../services/color';

@Component({
  selector: 'app-showcolorpartc',
  standalone: true,
  imports: [],
  templateUrl: './showcolorpartc.html',
  styleUrl: './showcolorpartc.css'
})
export class Showcolorpartc {
  private colorService = inject(Color);

  colorCss = this.colorService.colorCss;
  grayCss = this.colorService.grayCss;
}
