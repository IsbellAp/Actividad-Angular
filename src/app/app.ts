import { Component } from '@angular/core';
import { Numberparta } from './components/numberparta/numberparta';
import { Rgbpartb } from './components/rgbpartb/rgbpartb';
import { Showcolorpartc } from './components/showcolorpartc/showcolorpartc';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Numberparta, Rgbpartb, Showcolorpartc],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
