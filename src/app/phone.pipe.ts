import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(phoneNumber: string, args?: any): string {

    return (phoneNumber.toString().slice(0,3)+'-'+phoneNumber.toString().slice(4,10));
  }

}
