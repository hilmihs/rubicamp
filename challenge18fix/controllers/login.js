import User from "../models/user.js";
import Login from "../views/login.js";
import ControllerMenu from "../controllers/menu.js"
import { rl } from '../main_university.js';

export var arrayLogin;

export default class ConstructorLogin {
    static login() {
        Login.welcome();
        rl.question('Username: ', (input1) => {
            rl.question('Password: ', (input2) => {
                    User.auth(input1, (rows) => {
                        arrayLogin = rows;
                        if (rows[0]) {
                            if (input2 == rows[0].password) {
                                Login.success();
                                ControllerMenu.menu();
                            } else {
                                Login.fail();
                                this.login();
                            }
                        } else {
                            Login.fail();
                            this.login()
                        }
                    })
            })
        })
    }
}


