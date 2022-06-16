export class MesinHitung {
    constructor() {
        this.x = 1;
        this.result = 0;
    }
    tambah(x) {
        this.x = this.x + x;
        return this;
    }
    kurang(x) {
        this.x = this.x - x;
        return this;
    }   
    multiply(x) { 
        this.x = Math.floor(this.x * x);
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
        this.x = this.x ** x;
        return this;
    }
    squareRoot() {
        this.x = Math.sqrt(this.x);
        return this;
    }
    hasil ()  {          
        this.result++
        console.log(this.x)
       return this;
    }
}
 