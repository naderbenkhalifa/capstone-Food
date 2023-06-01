import { Food } from "src/capstoneFood-api/src/models";

export class CartItem {
    id?: number;
    name?: string;
    avatar?: string;
    price: number;
    quantity: number;

    constructor(food: Food) {
        this.id = food.id;
        this.name = food.name;
        this.avatar = food.avatar;
        this.price= food.price!;

        this.quantity = 1;
    }
}
