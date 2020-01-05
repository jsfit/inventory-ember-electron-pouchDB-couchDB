import Component from '@glimmer/component';
import { computed, set, action, get } from '@ember/object';


export default class UiHeaderComponent extends Component {

    @action
    changeTab(value){
        console.log(get(this, 'changeTabp'));
    }
}

