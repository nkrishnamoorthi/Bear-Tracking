import { LightningElement, track } from 'lwc';

export default class HelloWebComponent extends LightningElement {
    @track greeting = 'Trailblazer';
    date1;
    handleGreetingChange(event) {
        this.greeting = event.target.value;
    }

    currentDate = new Date();

    get capitalizedGreeting() {
	return `Hello ${this.greeting.toUpperCase()}!`;
    }

    get currentDate1() {
        //date1 = new Date();
        return `Hello ${this.greeting} | ${this.currentDate}`;
    }    
}