import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface RgbColor {
  r: number;
  g: number;
  b: number;
}

@Injectable({
  providedIn: 'root'
})
export class Color {
  private colorSubject = new BehaviorSubject<RgbColor>({ r: 0, g: 0, b: 0 });
  color$ = this.colorSubject.asObservable();

  setFromHex(hex: string): void {
    const clean = hex.replace('#', '');
    const r = parseInt(clean.substring(0, 2), 16) || 0;
    const g = parseInt(clean.substring(2, 4), 16) || 0;
    const b = parseInt(clean.substring(4, 6), 16) || 0;
    this.colorSubject.next({ r, g, b });
  }

  setChannel(channel: 'r' | 'g' | 'b', value: number): void {
    const current = this.colorSubject.value;
    this.colorSubject.next({ ...current, [channel]: value });
  }

  rgbToHex(color: RgbColor): string {
    const toHexPair = (n: number) => {
      const clamped = Math.max(0, Math.min(255, Math.round(n)));
      return clamped.toString(16).padStart(2, '0');
    };
    return `${toHexPair(color.r)}${toHexPair(color.g)}${toHexPair(color.b)}`;
  }
}


