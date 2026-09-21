import { Injectable, signal, computed } from '@angular/core';

export interface RgbColor {
  r: number;
  g: number;
  b: number;
}

@Injectable({
  providedIn: 'root'
})
export class Color {
  private colorSignal = signal<RgbColor>({ r: 0, g: 0, b: 0 });

  color = this.colorSignal.asReadonly();

  hex = computed(() => this.rgbToHex(this.colorSignal()));
  colorCss = computed(() => {
    const c = this.colorSignal();
    return `rgb(${c.r}, ${c.g}, ${c.b})`;
  });
  grayCss = computed(() => {
    const c = this.colorSignal();
    const avg = Math.round((c.r + c.g + c.b) / 3);
    return `rgb(${avg}, ${avg}, ${avg})`;
  });

  setFromHex(hex: string): void {
    const clean = hex.replace('#', '');
    const r = parseInt(clean.substring(0, 2), 16) || 0;
    const g = parseInt(clean.substring(2, 4), 16) || 0;
    const b = parseInt(clean.substring(4, 6), 16) || 0;
    this.colorSignal.set({ r, g, b });
  }

  setChannel(channel: 'r' | 'g' | 'b', value: number): void {
    this.colorSignal.update(current => ({ ...current, [channel]: value }));
  }

  private rgbToHex(color: RgbColor): string {
    const toHexPair = (n: number) => {
      const clamped = Math.max(0, Math.min(255, Math.round(n)));
      return clamped.toString(16).padStart(2, '0');
    };
    return `${toHexPair(color.r)}${toHexPair(color.g)}${toHexPair(color.b)}`;
  }
}


