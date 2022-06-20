import { arrayLogin } from "../controllers/login.js"

export default class Login {
    static welcome() {
        console.log('===============================================================================')
  console.log('Welcome to Univeritas Pendidikan Indonesia')
  console.log('Jl Setiabudhi No. 255')
  console.log('===============================================================================')
  console.log('Lengkapi data dibawah ini')
    }
    static success() {
     console.log(`Welcome, ${arrayLogin[0].username}. Your access level is ${arrayLogin[0].access.toUpperCase()}`);
    } 
    static fail() {
        console.log('Username atau Password salah')
    }
}