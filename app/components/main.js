import Component from '@glimmer/component';
import { computed, set, action } from '@ember/object';


export default class MainComponent extends Component {
    constructor() {
        super(...arguments);
        set(this, 'currentTab', "supplier");
    }

   

    @action
    changeTab(value){
        set(this, 'currentTab', value);
    }
}
