import MainMenu from '../views/menu.js'
import ConstructorLogin from './login.js';
import ControllerMahasiswa from './mahasiswa.js'; 
import ControllerJurusan from './jurusan.js'; 
import ControllerDosen from './dosen.js' 
 import ControllerMatkul  from './matkul.js'; 
 import ConstructorKontrak  from './kontrak.js';
import { rl } from '../main_university.js';

export default class ControllerMenu {
   static menu() {
        MainMenu.mainInterface();
        rl.question('masukan salah satu no. dari opsi diatas: ', (input) => {
            if (input.trim() == 1) {
                ControllerMahasiswa.interface();
            } else if (input.trim() == 2) {
                ControllerJurusan.interface();
            } else if (input.trim() == 3) {
                ControllerDosen.interface();
            } else if (input.trim() == 4) {
                ControllerMatkul.interface();
            } else if (input.trim() == 5) {
              ConstructorKontrak.interface();
            } else if (input.trim() == 6) {
              MainMenu.exit()
              ConstructorLogin.login();
            } else {
              MainMenu.error();
              this.menu();
            }
          }
          )
    }
}