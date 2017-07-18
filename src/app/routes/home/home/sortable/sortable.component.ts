import { Component, OnInit } from '@angular/core';
import { Product } from './sortable.product';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-sortable',
    templateUrl: './sortable.component.html',
    styleUrls: ['./sortable.component.scss']
})
export class SortableComponent implements OnInit {

    // availableProducts: Array<Product> = [];
    // shoppingBasket: Array<Product> = [];

    // listOne: Array<string> = ['Coffee', 'Orange Juice', 'Red Wine', 'Unhealty drink!', 'Water'];

    testing: string;
    remainingTasks: Array<string> = [];
    inProgress: Array<string> = [];
    completed: Array<string> = [];
    taskValue: string;

    constructor() {
        // this.initProducts();
    }

    // initProducts() {
    //     this.availableProducts.push(new Product('Blue Shoes', 3, 35));
    //     this.availableProducts.push(new Product('Good Jacket', 1, 90));
    //     this.availableProducts.push(new Product('Red Shirt', 5, 12));
    //     this.availableProducts.push(new Product('Blue Jeans', 4, 60));
    // }

    // orderedProduct($event) {
    //     let orderedProduct: Product = $event.dragData;
    //     orderedProduct.quantity--;
    // }

    // addToBasket($event) {
    //     let newProduct: Product = $event.dragData;
    //     for (let indx in this.shoppingBasket) {
    //         let product: Product = this.shoppingBasket[indx];
    //         if (product.name === newProduct.name) {
    //             product.quantity++;
    //             return;
    //         }
    //     }
    //     console.log('adding ' + newProduct);
    //     this.shoppingBasket.push(new Product(newProduct.name, 1, newProduct.cost));
    // }

    // totalCost(): number {
    //     let cost = 0;
    //     for (let indx in this.shoppingBasket) {
    //         let product: Product = this.shoppingBasket[indx];
    //         cost += (product.cost * product.quantity);
    //     }
    //     return cost;
    // }

    // resetBasket() {
    //     this.availableProducts = [];
    //     this.shoppingBasket = [];
    //     this.initProducts();
    // }

    addItem(form: NgForm) {
        this.remainingTasks.push(form.value.task)
        form.reset();
    }


    moveTo(event, item, location) {
        const fromLocations = {
            remainingTasks: 'inProgress',
            inProgress: 'remainingTasks',
            completed: 'inProgress',
        };
        const fromLocation = fromLocations[location];
        const index = this[fromLocation].indexOf(item);
        if (index > -1) {
            this[fromLocation].splice(index, 1);
        }
        this[location].push(item);
    }

    ngOnInit() {
        this.taskValue = '';
    }

}
