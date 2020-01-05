import Component from '@glimmer/component';
import { computed, set } from '@ember/object';
// import $ from 'jquery';
export default class InvoiceInvoiceComponent extends Component {

    constructor() {
        super(...arguments);
        set(this, 'list', [
            { value: 0, label: 'Alfa Romeo' },
            { value: 1, label: 'Audi' },
            { value: 2, label: 'Citroën' },
            { value: 3, label: 'Fiat' },
            { value: 4, label: 'Opel' },
            { value: 5, label: 'Peugeot' },
            { value: 6, label: 'Seat' },
            { value: 7, label: 'Skoda' }
          ]);
    }


    @computed('firstName', 'lastName')
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
}
