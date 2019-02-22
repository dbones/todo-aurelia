import *  as moment from 'moment';
import { valueConverter } from 'aurelia-binding';

//this will not update automatically
@valueConverter('momentAgo')
export class MomentAgo {
  toView(value) {
    return moment().from(value);
  }
}

