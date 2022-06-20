import * as readline from 'node:readline'
export const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

import ConstructorLogin from './controllers/login.js';

class UniversityMain {
  static run () {
    ConstructorLogin.login();
  }
}
UniversityMain.run();
