const {v4 : uuidv4} = require('uuid')
const newId = uuidv4()
class CarFactory {
    constructor(companyName) {
        this.companyName = companyName
        this.cars = []
        this.produksiAgya = Math.floor((Math.random() * 5) + 1);
        this.produksiAvanza = Math.floor((Math.random() * 5) + 1);
        this.produksiTotal = this.produksiAgya + this.produksiAvanza;
    }   
    static random() {
       return Math.floor((Math.random() * 5) +1);  
    }
    hasilProduksi(year) {
        var simpan1 = 0;
        var simpan2 = 0;
        for (let i = 1; i <= CarFactory.random(); i++) {  
                const mobilbaru = new Agya(i, year)
                this.cars.push(mobilbaru)
                simpan1++; 
        }
        for (let i = 1; i <= CarFactory.random(); i++) {  
            const mobilbaru = new Avanza(i, year)
            this.cars.push(mobilbaru)
            simpan2++;   
    }
    console.log(`Pada tahun ${year} pabrik ${this.companyName} menghasilkan sebanyak ${simpan1 + simpan2} mobil.`)
    console.log('=====================================================================')
    console.log('Daftar Mobil')   
    console.log(this.cars);
    } 
    warrantSimulator(year) {
        console.log('=====================================================================')
        console.log('Simulasi Garansi')
        console.log('=====================================================================')
        for (let i = 0; i < this.cars.length; i ++) {
                if (year <= (this.cars[i].productionYear + this.cars[i].warrantLimit)) {
                    console.log(`Garansi ${this.cars[i].varian} tahun produksi ${this.cars[i].productionYear} No. ${this.cars[i].engineNumber} pada tahun ${year} = ACTIVE.`)
                } else if (year >= (this.cars[i].productionYear + this.cars[i].warrantLimit)) {
                    console.log(`Garansi ${this.cars[i].varian} tahun produksi ${this.cars[i].productionYear} No. ${this.cars[i].engineNumber} pada tahun ${year} = EXPIRED.`)
                }
        }
    }
}
class Car {
    constructor(varian, color, ban, pintu, kursi, year) {
        this.varian = varian;
        this.color = color;
        this.ban = ban;
        this.pintu = pintu;
        this.kursi = kursi;
        this.productionYear = year;
    }
}
class Tyre {
    constructor(size, brand) {
        this.tyreSize = size
        this.tyreBrand = brand
    }
}
class Agya extends Car {
    constructor(i, year) {
    let color = Math.floor((Math.random() * 3))
    let arrayColor = ['Black', 'White', 'Silver']
        super('Agya', arrayColor[color], new Tyre(17, 'dunlop'), 4, 5, year)
        this.warrantLimit = 2;
        this.engineNumber = uuidv4();  
    }
}
class Avanza extends Car {
    constructor(i, year) {
    let color = Math.floor((Math.random() * 3));
    let arrayColor = ['Black', 'White', 'Silver']
        super('Avanza', arrayColor[color], new Tyre(17, 'bridgestone'), 4, 6, year)
        this.warrantLimit = 4;
        this.engineNumber = uuidv4(); 
    }
}
const toyota = new CarFactory('Toyota')
toyota.hasilProduksi(2021);
toyota.hasilProduksi(2022);
toyota.warrantSimulator(2025);


