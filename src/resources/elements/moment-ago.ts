import { bindable, customElement } from 'aurelia-framework';
import *  as moment from 'moment';

@customElement('moment-ago')
export class MomentAgo {
    @bindable value: Date;
    momentValue: string;
    interval: any;

    bind() {
        this.momentValue = moment(this.value).fromNow();

        this.interval = setInterval(() => {
            this.momentValue = moment(this.value).fromNow()
        }, 1000)
    }

    unbind() {
        clearInterval(this.interval);
    }

}


