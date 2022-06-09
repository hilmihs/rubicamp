var readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('university2.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.error(err.message);
});
var Table = require('cli-table');
// const { table } = require('console');
let simpanlogin = [];
let perintahlogin = 'SELECT * FROM users'
db.each(perintahlogin, [], (err, rows) => {
  if (err) return console.error(err.message);
  simpanlogin.push(rows);
})
var simpanmahasiswa = [];
let perintahmahasiswa = 'SELECT * FROM mahasiswa'
db.each(perintahmahasiswa, [], (err, rows) => {
  if (err) return console.error(err.message);
  simpanmahasiswa.push(rows);
})
var simpanjurusan = [];
let perintahjurusan = 'SELECT * FROM jurusan'
db.each(perintahjurusan, [], (err, rows) => {
  if (err) return console.error(err.message);
  simpanjurusan.push(rows);
})
var simpandosen = [];
let perintahdosen = 'SELECT * FROM dosen'
db.each(perintahdosen, [], (err, rows) => {
  if (err) return console.error(err.message);
  simpandosen.push(rows);
})
var simpanmatkul = [];
let perintahmatkul = 'SELECT * FROM matakuliah'
db.each(perintahmatkul, [], (err, rows) => {
  if (err) return console.error(err.message);
  simpanmatkul.push(rows);
})
var simpankontrak = [];
let perintahkontrak = 'SELECT * FROM kontrak'
db.each(perintahkontrak, [], (err, rows) => {
  if (err) return console.error(err.message);
  simpankontrak.push(rows);
})

loginInterface();
function loginInterface() {
  console.log('===============================================================================')
  console.log('Welcome to Univeritas Pendidikan Indonesia')
  console.log('Jl Setiabudhi No. 255')
  console.log('===============================================================================')
  rl.question('username: ', (inputUn) => {
    var username = inputUn
    console.log('===============================================================================')
    rl.question('password : ', (inputPw) => {
      if (inputUn = simpanlogin[0].username && inputPw == simpanlogin[0].password) {
        console.log(`Welcome, ${simpanlogin[0].username}. Your access level is ${simpanlogin[0].access.toUpperCase()}`);
        mainInterface();
      } else {
        console.log('username atau password salah')
        loginInterface();
      }
    });
  });
}
function mainInterface() {
  console.log('===============================================================================')
  console.log('silahkan pilih opsi dibawah ini')
  console.log('[1] Mahasiswa')
  console.log('[2] Jurusan')
  console.log('[3] Dosen')
  console.log('[4] Mata kuliah')
  console.log('[5] Kontrak')
  console.log('[6] Keluar')
  console.log('===============================================================================')
  rl.question('masukan salah satu no. dari opsi diatas: ', (input) => {
    if (input.trim() == 1) {
      mahasiswaInterface();
    } else if (input.trim() == 2) {
      jurusanInterface();
    } else if (input.trim() == 3) {
      dosenInterface();
    } else if (input.trim() == 4) {
      matkulInterface();
    } else if (input.trim() == 5) {
      kontrakInterface();
    } else if (input.trim() == 6) {
      rl.close();
    } else { console.log('Perintah tidak dikenal') }

  }
  )
};

function mahasiswaInterface() {
  console.log('===============================================================================')
  console.log('silahkan pilih opsi dibawah ini')
  console.log('[1] Daftar Mahasiswa')
  console.log('[2] Cari Mahasiswa')
  console.log('[3] Tambah Mahasiswa')
  console.log('[4] Hapus Mahasiswa')
  console.log('[5] Kembali')
  console.log('===============================================================================')
  rl.question('masukan salah satu no. dari opsi diatas: ', (input) => {
    if (input.trim() == 1) {
      tableMahasiswa();
    } else if (input.trim() == 2) {
      searchMahasiswa();
    } else if (input.trim() == 3) {
      mainInterface();
    } else if (input.trim() == 4) {
      mainInterface();
    } else if (input.trim() == 5) {
      mainInterface();

    }
  }
  )
};

function jurusanInterface() {
  console.log('===============================================================================')
  console.log('silahkan pilih opsi dibawah ini')
  console.log('[1] Daftar Jurusan')
  console.log('[2] Cari Jurusan')
  console.log('[3] Tambah Jurusan')
  console.log('[4] Hapus Jurusan')
  console.log('[5] Kembali')
  console.log('===============================================================================')
  rl.question('masukan salah satu no. dari opsi diatas: ', (input) => {
    if (input.trim() == 1) {
      tableJurusan();
    } else if (input.trim() == 2) {
      searchJurusan();
    } else if (input.trim() == 3) {
      mainInterface();
    } else if (input.trim() == 4) {
      mainInterface();
    } else if (input.trim() == 5) {
      mainInterface();
    }
  }
  )
};
function dosenInterface() {
  console.log('===============================================================================')
  console.log('silahkan pilih opsi dibawah ini')
  console.log('[1] Daftar Dosen')
  console.log('[2] Cari Dosen')
  console.log('[3] Tambah Dosen')
  console.log('[4] Hapus Dosen')
  console.log('[5] Kembali')
  console.log('===============================================================================')
  rl.question('masukan salah satu no. dari opsi diatas: ', (input) => {
    if (input.trim() == 1) {
      tableDosen();
    } else if (input.trim() == 2) {
      searchDosen();
    } else if (input.trim() == 3) {
      mainInterface();
    } else if (input.trim() == 4) {
      mainInterface();
    } else if (input.trim() == 5) {
      mainInterface();
    }
  }
  )
};
function matkulInterface() {
  console.log('===============================================================================')
  console.log('silahkan pilih opsi dibawah ini')
  console.log('[1] Daftar Mata kuliah')
  console.log('[2] Cari Mata kuliah')
  console.log('[3] Tambah Mata kuliah')
  console.log('[4] Hapus Mata kuliah')
  console.log('[5] Kembali')
  console.log('===============================================================================')
  rl.question('masukan salah satu no. dari opsi diatas: ', (input) => {
    if (input.trim() == 1) {
      tableMatkul();
    } else if (input.trim() == 1) {
      searchMatkul();
    } else if (input.trim() == 2) {
      mainInterface();
    } else if (input.trim() == 3) {
      mainInterface();
    } else if (input.trim() == 4) {
      mainInterface();
    } else if (input.trim() == 5) {
      mainInterface();

    }
  }
  )
};
function kontrakInterface() {
  console.log('===============================================================================')
  console.log('silahkan pilih opsi dibawah ini')
  console.log('[1] Daftar Kontrak')
  console.log('[2] Cari Kontrak')
  console.log('[3] Tambah Kontrak')
  console.log('[4] Hapus Kontrak')
  console.log('[5] Kembali')
  console.log('===============================================================================')
  rl.question('masukan salah satu no. dari opsi diatas: ', (input) => {
    if (input.trim() == 1) {
      tableKontrak();
    } else if (input.trim() == 1) {
      mainInterface();
    } else if (input.trim() == 2) {
      mainInterface();
    } else if (input.trim() == 3) {
      mainInterface();
    } else if (input.trim() == 4) {
      mainInterface();
    } else if (input.trim() == 5) {
      mainInterface();

    }
  }
  )
};
function tableMahasiswa() {
  console.log('===============================================================================')
  var table = new Table({
    head: ['NIM', 'Nama', 'Alamat', 'Jurusan', 'Umur']
    , colWidths: [20, 20, 20, 20, 20]
  });
  for (let j = 0; j < simpanmahasiswa.length; j++)
    table.push(
      [simpanmahasiswa[j].nim, simpanmahasiswa[j].nama, simpanmahasiswa[j].alamat, simpanmahasiswa[j].jurusan, simpanmahasiswa[j].umur]
    );

  console.log(table.toString());
  console.log('===============================================================================')
  console.log('silahkan pilih opsi dibawah ini')
  console.log('[1] Kembali ke Menu Mahasiswa')
  rl.question('masukan salah satu no. dari opsi diatas: ', (input) => {
    if (input.trim() == 1) {
      mahasiswaInterface();
    }
    else console.log('Perintah tidak dikenal')
  });
}
function tableJurusan() {
  var tablej = new Table({
    head: ['Nama Jurusan', 'ID Jurusan']
    , colWidths: [20, 20]
  });
  for (let k = 0; k < simpanjurusan.length; k++)
    tablej.push(
      [simpanjurusan[k].namajurusan, simpanjurusan[k].idjurusan]
    );

  console.log(tablej.toString());
  console.log('===============================================================================')
  console.log('silahkan pilih opsi dibawah ini')
  console.log('[1] Kembali ke Menu Jurusan')
  rl.question('masukan salah satu no. dari opsi diatas: ', (input) => {
    if (input.trim() == 1) {
      jurusanInterface();
    }
    else console.log('Perintah tidak dikenal')
  });
}
function tableDosen() {
  var tabled = new Table({
    head: ['Nama dosen', 'ID dosen']
    , colWidths: [20, 20]
  });
  for (let k = 0; k < simpandosen.length; k++)
    tabled.push(
      [simpandosen[k].nama, simpandosen[k].iddosen]
    );

  console.log(tabled.toString());
  console.log('===============================================================================')
  console.log('silahkan pilih opsi dibawah ini')
  console.log('[1] Kembali ke Menu Dosen')
  rl.question('masukan salah satu no. dari opsi diatas: ', (input) => {
    if (input.trim() == 1) {
      dosenInterface();
    }
    else console.log('Perintah tidak dikenal')
  });
}
function tableMatkul() {
  var tablem = new Table({
    head: ['Nama Mata kuliah', 'ID Mata kuliah', 'SKS']
    , colWidths: [20, 20, 20]
  });
  for (let l = 0; l < simpanmatkul.length; l++)
    tablem.push(
      [simpanmatkul[l].namamatkul, simpanmatkul[l].idmatkul, simpanmatkul[l].sks]
    );

  console.log(tablem.toString());
  console.log('===============================================================================')
  console.log('silahkan pilih opsi dibawah ini')
  console.log('[1] Kembali ke Menu mata kuliah')
  rl.question('masukan salah satu no. dari opsi diatas: ', (input) => {
    if (input.trim() == 1) {
      matkulInterface();
    }
    else console.log('Perintah tidak dikenal')
  });
}
function tableKontrak() {
  var tablek = new Table({
    head: ['ID kontrak', 'NIM', 'ID Dosen', 'ID Matkul', 'ID Jurusan', 'Nilai']
    , colWidths: [15, 15, 15, 15, 15, 15]
  });
  for (let m = 0; m < simpankontrak.length; m++)
    tablek.push(
      [simpankontrak[m].id, simpankontrak[m].nim, simpankontrak[m].dosen_id, simpankontrak[m].matkul_id, simpankontrak[m].jurusan_id, simpankontrak[m].nilai]
    );

  console.log(tablek.toString());
  console.log('===============================================================================')
  console.log('silahkan pilih opsi dibawah ini')
  console.log('[1] Kembali ke Menu Kontrak')
  rl.question('masukan salah satu no. dari opsi diatas: ', (input) => {
    if (input.trim() == 1) {
      kontrakInterface();
    }
    else console.log('Perintah tidak dikenal')
  });
}
function searchMahasiswa() {
  console.log('===============================================================================')
  rl.question('Masukan NIM: ', (input) => {
    let carimahasiswa = "SELECT * FROM mahasiswa where nim=?"
    db.all(carimahasiswa, [input], (err, rows) => {
      if (err) { return console.error(err.message); }
      else {
        if (rows.length == 1) {
          console.log('===============================================================================')
          console.log(`NIM              : ${rows[0].nim}`)
          console.log(`Nama             : ${rows[0].nama}`)
          console.log(`Alamat           : ${rows[0].alamat}`)
          console.log(`Jurusan          : ${rows[0].jurusan}`)
          console.log(`Umur             : ${rows[0].umur}`)
          console.log('===============================================================================')
          console.log('silahkan pilih opsi dibawah ini')
          console.log('[1] Kembali ke Menu Mahasiswa')
          rl.question('masukan salah satu no. dari opsi diatas: ', (input) => {
            if (input.trim() == 1) {
              mahasiswaInterface();
            }
            else console.log('Perintah tidak dikenal')
          });
        } else {
          console.log('NIM tidak dikenal')
          searchMahasiswa()
        }
      }
    })
  })
}
function searchJurusan() {
  console.log('===============================================================================')
  rl.question('Masukan ID Jurusan: ', (input) => {
    let carijurusan = "SELECT * FROM jurusan where idjurusan=?"
    db.all(carijurusan, [input], (err, rows) => {
      if (err) { return console.error(err.message); }
      else {
        if (rows.length == 1) {
          console.log('===============================================================================')
          console.log(`Nama Jurusan             : ${rows[0].namajurusan}`)
          console.log(`ID Jurusan               : ${rows[0].idjurusan}`)
          console.log('===============================================================================')
          console.log('silahkan pilih opsi dibawah ini')
          console.log('[1] Kembali ke Menu Jurusan')
          rl.question('masukan salah satu no. dari opsi diatas: ', (input) => {
            if (input.trim() == 1) {
              jurusanInterface();
            }
            else console.log('Perintah tidak dikenal')
          });
        } else {
          console.log('NIM tidak dikenal')
          searchJurusan()
        }
      }
    })
  })
}
function searchDosen() {
  console.log('===============================================================================')
  rl.question('Masukan ID Dosen: ', (input) => {
    let caridosen = "SELECT * FROM dosen where iddosen=?"
    db.all(caridosen, [input], (err, rows) => {
      if (err) { return console.error(err.message); }
      else {
        if (rows.length == 1) {
          console.log('===============================================================================')
          console.log(`Nama Dosen             : ${rows[0].nama}`)
          console.log(`ID Dosen               : ${rows[0].iddosen}`)
          console.log('===============================================================================')
          console.log('silahkan pilih opsi dibawah ini')
          console.log('[1] Kembali ke Menu Dosen')
          rl.question('masukan salah satu no. dari opsi diatas: ', (input) => {
            if (input.trim() == 1) {
              dosenInterface();
            }
            else console.log('Perintah tidak dikenal')
          });
        } else {
          console.log('NIM tidak dikenal')
          searchDosen()
        }
      }
    })
  })
}
function searchMatkul() {
  console.log('===============================================================================')
  rl.question('Masukan ID Mata kuliah: ', (input) => {
    let carimatkul = "SELECT * FROM matakuliah where idmatkul=?"
    db.all(carimatkul, [input], (err, rows) => {
      if (err) { return console.error(err.message); }
      else {
        if (rows.length == 1) {
          console.log('===============================================================================')
          console.log(`Nama mata kuliah         : ${rows[0].namajurusan}`)
          console.log(`ID mata kuliah           : ${rows[0].idjurusan}`)
          console.log(`SKS                      : ${rows[0].sks}`)
          console.log('===============================================================================')
          console.log('silahkan pilih opsi dibawah ini')
          console.log('[1] Kembali ke Menu mata kuliah')
          rl.question('masukan salah satu no. dari opsi diatas: ', (input) => {
            if (input.trim() == 1) {
              matkulInterface();
            }
            else console.log('Perintah tidak dikenal')
          });
        } else {
          console.log('NIM tidak dikenal')
          searchMatkul()
        }
      }
    })
  })
}
function searchJurusan() {
  console.log('===============================================================================')
  rl.question('Masukan ID Jurusan: ', (input) => {
    let carijurusan = "SELECT * FROM jurusan where idjurusan=?"
    db.all(carijurusan, [input], (err, rows) => {
      if (err) { return console.error(err.message); }
      else {
        if (rows.length == 1) {
          console.log('===============================================================================')
          console.log(`Nama Jurusan             : ${rows[0].namajurusan}`)
          console.log(`ID Jurusan               : ${rows[0].idjurusan}`)
          console.log('===============================================================================')
          console.log('silahkan pilih opsi dibawah ini')
          console.log('[1] Kembali ke Menu Jurusan')
          rl.question('masukan salah satu no. dari opsi diatas: ', (input) => {
            if (input.trim() == 1) {
              jurusanInterface();
            }
            else console.log('Perintah tidak dikenal')
          });
        } else {
          console.log('NIM tidak dikenal')
          searchMahasiswa()
        }
      }
    })
  })
}
// sql = 'SELECT * FROM mahasiswa'
// db.all(sql,[], (err,rows)=>{
//   if (err) return console.error(err.message);

//   rows.forEach(row=>{
//     console.log(row.nama); 
//   })
// })

// db.close((err) => {
//   if (err) return console.error(err.message);
// });

// db.run('CREATE TABLE users(first_name, last_name, username, password, email, id)'
// )
// db.serialize(() => {
//     db.run("CREATE TABLE lorem (info TEXT)");

//     const stmt = db.prepare("INSERT INTO lorem VALUES (?)");
//     for (let i = 0; i < 10; i++) {
//         stmt.run("Ipsum " + i);
//     }
//     stmt.finalize();

//     db.each("SELECT rowid AS id, info FROM lorem", (err, row) => {
//         console.log(row.id + ": " + row.info);
//     });
// });

// const sql = 'INSERT INTO users (first_name, last_name, username, password, email, id) VALUES(?,?,?,?,?,?)';
// db.run(sql,['mike', 'codes', 'mike_codes', '123','mikecodes@gmail.com', 1], (err)=>{
//   if (err) return console.error(err.message);

//   console.log('a new row has been created');
// });