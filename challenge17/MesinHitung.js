export const Pi = 3.14;
export class MesinHitung {
    constructor() {
        this.x = 1;
    }
    tambah(x) {
        this.x += x;
        return this;
    }
    kurang(x) {
        this.x -= x;
        return this;
    }   
    multiply(x) { 
        this.x = this.x * x;
        return this;
    }
    divide(x) {
        this.x = this.x / x;
        return this;
    }
    square() {
        this.x = this.x ** 2;
        return this;
    }
    exponent(x) {
        this.x = Math.pow(this.x, x);
        return this;
    }
    squareRoot() {
        this.x = Math.pow(this.x, 0.5);
        return this;
    }
    result ()  {          
        console.log(this.x)
       return this;
    }
}
 