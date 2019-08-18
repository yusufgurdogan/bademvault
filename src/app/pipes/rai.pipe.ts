import { Pipe, PipeTransform } from '@angular/core';
import {AppSettingsService} from "../services/app-settings.service";

@Pipe({
  name: 'rai'
})
export class RaiPipe implements PipeTransform {
  precision = 2;

  badem = 1000000000000000000000000000;
  // krai = 1000000000000000000000000000;
  raw  = 1;

  transform(value: any, args?: any): any {
    const opts = args.split(',');
    let denomination = opts[0] || 'badem';
    const hideText = opts[1] || false;

    switch (denomination.toLowerCase()) {
      default:
      // case 'xrb': return `${(value / this.mrai).toFixed(6)}${!hideText ? ' NANO': ''}`;
      case 'badem':
        const hasRawValue = (value / this.badem) % 1;
        if (hasRawValue) {
          const newVal = value / this.badem < 0.01 ? 0 : value / this.badem; // New more precise toFixed function, but bugs on huge raw numbers
          return `${this.toFixed(newVal, this.precision)}${!hideText ? ' BADEM': ''}`;
        } else {
          return `${(value / this.badem).toFixed(2)}${!hideText ? ' BADEM': ''}`;
        }
      case 'badem': return `${(value / this.badem).toFixed(0)}${!hideText ? ' badem': ''}`;
      // case 'nano': return `${(value / this.rai).toFixed(0)}${!hideText ? ' nano': ''}`;
      case 'raw': return `${value}${!hideText ? ' raw': ''}`;
      case 'dynamic':
        const rai = (value / this.raw);
        if (rai >= 1000000) {
          return `${(value / this.badem).toFixed(this.precision)}${!hideText ? ' mRai': ''}`;
        } else if (rai >= 0.00001) {
          return `${(value / this.raw).toFixed(this.precision)}${!hideText ? ' Rai': ''}`;
        } else if (rai === 0) {
          return `${value}${!hideText ? ' mRai': ''}`;
        } else {
          return `${value}${!hideText ? ' raw': ''}`;
        }
    }
  }

  toFixed(num, fixed) {
    if (isNaN(num)) return 0;
    var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
    return num.toString().match(re)[0];
  }

}
