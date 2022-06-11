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
const { table } = require('console');

loginInterface();
function loginInterface() {
  console.log('===============================================================================')
  console.log('Welcome to Univeritas Pendidikan Indonesia')
  console.log('Jl Setiabudhi No. 255')
  console.log('===============================================================================')
  console.log('Lengkapi data dibawah ini')
  rl.question('Username: ', (input1) => {
    rl.question('Password: ', (input2) => {
      var kosongmk = [];
      let perintahmatkul = 'SELECT * FROM users where username=?'
      db.all(perintahmatkul, [input1], (err, rows) => {
        if (err) { return console.error(err.message); }
        else {
          kosongmk.push(rows);
          if (kosongmk[0][0]) {
            if (input2 == kosongmk[0][0].password) {
              console.log(`Welcome, ${kosongmk[0][0].username}. Your access level is ${kosongmk[0][0].access.toUpperCase()}`);
              mainInterface();
            } else {
              console.log('Username atau Password salah')
              loginInterface();
            }
          } else {
            console.log('Username atau Password salah')
            loginInterface();
          }
        }
      })
    })
  })
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
      console.log('===============================================================================')
      console.log('Kamu telah keluar.');
      loginInterface();
    } else {
      console.log('Perintah tidak dikenal')
      mainInterface();
    }
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
      tambahMahasiswa();
    } else if (input.trim() == 4) {
      hapusMahasiswa();
    } else if (input.trim() == 5) {
      mainInterface();
    } else {
      console.log('Perintah tidak dikenal')
      mahasiswaInterface();
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
      tambahJurusan();
    } else if (input.trim() == 4) {
      hapusJurusan();
    } else if (input.trim() == 5) {
      mainInterface();
    } else {
      console.log('Perintah tidak dikenal')
      jurusanInterface();
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
      tambahDosen();
    } else if (input.trim() == 4) {
      hapusDosen();
    } else if (input.trim() == 5) {
      mainInterface();
    } else {
      console.log('Perintah tidak dikenal')
      dosenInterface();
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
    } else if (input.trim() == 2) {
      searchMatkul();
    } else if (input.trim() == 3) {
      tambahMatkul();
    } else if (input.trim() == 4) {
      hapusMatkul();
    } else if (input.trim() == 5) {
      mainInterface();

    } else {
      console.log('Perintah tidak dikenal')
      matkulInterface();
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
    } else if (input.trim() == 2) {
      searchKontrak();
    } else if (input.trim() == 3) {
      tambahKontrak();
    } else if (input.trim() == 4) {
      hapusKontrak();
    } else if (input.trim() == 5) {
      mainInterface();

    } else {
      console.log('Perintah tidak dikenal')
      kontrakInterface();
    }
  }
  )
};
function tableMahasiswa() {
  console.log('===============================================================================')
  var tablem = new Table({
    head: ['NIM', 'Nama', 'Alamat', 'Jurusan', 'Umur']
    , colWidths: [15, 15, 15, 15, 15]
  });
  var kosongm = []
  let perintahmahasiswa = 'SELECT * FROM mahasiswa order by nim asc'
  db.all(perintahmahasiswa, [], (err, rows) => {
    if (err) return console.error(err.message);
    kosongm.push(rows);
    for (let x = 0; x < kosongm[0].length; x++) {
      tablem.push([kosongm[0][x].nim, kosongm[0][x].nama, kosongm[0][x].alamat, kosongm[0][x].jurusan, kosongm[0][x].umur])
      if (tablem.length == kosongm[0].length) {
        console.log(tablem.toString());
        console.log('===============================================================================')
        console.log('silahkan pilih opsi dibawah ini')
        console.log('[1] Kembali ke Menu Mahasiswa')
        rl.question('masukan salah satu no. dari opsi diatas: ', (input) => {
          if (input.trim() == 1) {
            mahasiswaInterface();
          }
          else {
            console.log('===============================================================================')
            console.log('Perintah tidak dikenal')
            tableMahasiswa();
          }
        });
      }
    }
  })
}
function tableJurusan() {
  console.log('===============================================================================')
  var tablej = new Table({
    head: ['Nama Jurusan', 'ID Jurusan']
    , colWidths: [20, 20]
  });
  var kosongj = []
  let perintahjurusan = 'SELECT * FROM jurusan order by idjurusan asc'
  db.all(perintahjurusan, [], (err, rows) => {
    if (err) return console.error(err.message);
    kosongj.push(rows);
    for (let x = 0; x < kosongj[0].length; x++) {
      tablej.push([kosongj[0][x].namajurusan, kosongj[0][x].idjurusan])
      if (tablej.length == kosongj[0].length) {
        console.log(tablej.toString());
        console.log('===============================================================================')
        console.log('silahkan pilih opsi dibawah ini')
        console.log('[1] Kembali ke Menu Jurusan')
        rl.question('masukan salah satu no. dari opsi diatas: ', (input) => {
          if (input.trim() == 1) {
            jurusanInterface();
          } else {
            console.log('===============================================================================')
            console.log('Perintah tidak dikenal')
            tableJurusan();
          }
        });
      }
    }
  })
}
function tableDosen() {
  var tabled = new Table({
    head: ['Nama dosen', 'ID dosen']
    , colWidths: [20, 20]
  });
  var kosongd = []
  let perintahdosen = 'SELECT * FROM dosen order by iddosen asc'
  db.all(perintahdosen, [], (err, rows) => {
    if (err) return console.error(err.message);
    kosongd.push(rows);
    for (let x = 0; x < kosongd[0].length; x++) {
      tabled.push([kosongd[0][x].nama, kosongd[0][x].iddosen])
      if (tabled.length == kosongd[0].length) {
        console.log(tabled.toString());
        console.log('===============================================================================')
        console.log('silahkan pilih opsi dibawah ini')
        console.log('[1] Kembali ke Menu Dosen')
        rl.question('masukan salah satu no. dari opsi diatas: ', (input) => {
          if (input.trim() == 1) {
            dosenInterface();
          }
          else {
            console.log('===============================================================================')
            console.log('Perintah tidak dikenal')
            tableDosen();
          }
        });
      }
    }
  })
}
function tableMatkul() {
  var tablemk = new Table({
    head: ['Nama Mata kuliah', 'ID Mata kuliah', 'SKS']
    , colWidths: [20, 20, 20]
  });
  var kosongmk = []
  let perintahmatkul = 'SELECT * FROM matakuliah order by idmatkul asc'
  db.all(perintahmatkul, [], (err, rows) => {
    if (err) return console.error(err.message);
    kosongmk.push(rows);
    for (let x = 0; x < kosongmk[0].length; x++) {
      tablemk.push([kosongmk[0][x].namamatkul, kosongmk[0][x].idmatkul, kosongmk[0][x].sks])
      if (tablemk.length == kosongmk[0].length) {
        console.log(tablemk.toString());
        console.log('===============================================================================')
        console.log('silahkan pilih opsi dibawah ini')
        console.log('[1] Kembali ke Menu mata kuliah')
        rl.question('masukan salah satu no. dari opsi diatas: ', (input) => {
          if (input.trim() == 1) {
            matkulInterface();
          }
          else {
            console.log('===============================================================================')
            console.log('Perintah tidak dikenal')
            tableMatkul();
          }

        });
      }
    }
  })
}
function tableKontrak() {
  var tablek = new Table({
    head: ['ID kontrak', 'NIM', 'ID Dosen', 'ID Matkul', 'ID Jurusan', 'Nilai']
    , colWidths: [15, 15, 15, 15, 15, 15]
  });
  var kosongk = []
  let perintahkontrak = 'SELECT * FROM kontrak order by id asc'
  db.all(perintahkontrak, [], (err, rows) => {
    if (err) return console.error(err.message);
    kosongk.push(rows);
    for (let x = 0; x < kosongk[0].length; x++) {
      tablek.push([kosongk[0][x].id, kosongk[0][x].nim, kosongk[0][x].dosen_id, kosongk[0][x].matkul_id, kosongk[0][x].jurusan_id, kosongk[0][x].nilai])
      if (tablek.length == kosongk[0].length) {
        console.log(tablek.toString());
        console.log('===============================================================================')
        console.log('silahkan pilih opsi dibawah ini')
        console.log('[1] Kembali ke Menu kontrak')
        rl.question('masukan salah satu no. dari opsi diatas: ', (input) => {
          if (input.trim() == 1) {
            kontrakInterface();
          }
          else {
            console.log('===============================================================================')
            console.log('Perintah tidak dikenal')
            tableMatkul();
          }
        });
      }
    }
  })
}
function searchMahasiswa() {
  console.log('===============================================================================')
  console.log('[1] Kembali ke halaman Mahasiswa')
  rl.question('Masukan NIM: ', (input) => {
    input.trim();
    let carimahasiswa = "SELECT * FROM mahasiswa where nim=?"
    db.all(carimahasiswa, [input], (err, rows) => {
      input.trim();
      if (err) { return console.error(err.message); }
      else {
        if (rows.length == 1) {
          console.log('===============================================================================')
          console.log('Student details')
          console.log('===============================================================================')
          console.log(`NIM              : ${rows[0].nim}`)
          console.log(`Nama             : ${rows[0].nama}`)
          console.log(`Alamat           : ${rows[0].alamat}`)
          console.log(`Jurusan          : ${rows[0].jurusan}`)
          console.log(`Umur             : ${rows[0].umur}`)
          console.log('===============================================================================')
          console.log('silahkan pilih opsi dibawah ini')
          console.log('[1] Melakukan pencarian lain')
          console.log('[2] Kembali ke Menu Mahasiswa')
          rl.question('masukan salah satu no. dari opsi diatas: ', (input) => {
            if (input.trim() == 1) {
              searchMahasiswa();
            } else if (input.trim() == 2) {
              mahasiswaInterface();
            }
            else {
              console.log('Perintah tidak dikenal')
              searchMahasiswa();
            }
          });
        } else if (input.trim() == 1) { mahasiswaInterface(); } //
        else {
          console.log(`Mahasiswa dengan NIM ${input.trim()} tidak dikenal`)
          searchMahasiswa()
        }
      }
    })
  })
}
function searchJurusan() {
  console.log('===============================================================================')
  console.log('[1] Kembali ke halaman Jurusan')
  rl.question('Masukan ID Jurusan: ', (input) => {
    input.trim();
    let carijurusan = "SELECT * FROM jurusan where idjurusan=?"
    db.all(carijurusan, [input], (err, rows) => {
      input.trim();
      if (err) { return console.error(err.message); }
      else {
        if (rows.length == 1) {
          console.log('===============================================================================')
          console.log('Major details')
          console.log('===============================================================================')
          console.log(`Nama Jurusan             : ${rows[0].namajurusan}`)
          console.log(`ID Jurusan               : ${rows[0].idjurusan}`)
          console.log('===============================================================================')
          console.log('silahkan pilih opsi dibawah ini')
          console.log('[1] Melakukan pencarian lain')
          console.log('[2] Kembali ke Menu Jurusan')
          rl.question('masukan salah satu no. dari opsi diatas: ', (input) => {
            if (input.trim() == 1) {
              searchJurusan();
            } else if (input.trim() == 2) {
              jurusanInterface();
            }
            else {
              console.log('Perintah tidak dikenal')
              searchJurusan();
            }
          });
        } else if (input.trim() == 1) { jurusanInterface(); }
        else {
          console.log(`Jurusan dengan ID ${input.trim()} tidak dikenal`)
          searchJurusan()
        }
      }
    })
  })
}
function searchDosen() {
  console.log('===============================================================================')
  console.log('[1] Kembali ke halaman Dosen')
  rl.question('Masukan ID Dosen: ', (input) => {
    input.trim();
    let caridosen = "SELECT * FROM dosen where iddosen=?"
    db.all(caridosen, [input], (err, rows) => {
      if (err) { return console.error(err.message); }
      else {
        if (rows.length == 1) {
          console.log('===============================================================================')
          console.log('Lecturer details')
          console.log('===============================================================================')
          console.log(`Nama Dosen             : ${rows[0].nama}`)
          console.log(`ID Dosen               : ${rows[0].iddosen}`)
          console.log('===============================================================================')
          console.log('silahkan pilih opsi dibawah ini')
          console.log('[1] Melakukan pencarian lain')
          console.log('[2] Kembali ke Menu Dosen')
          rl.question('masukan salah satu no. dari opsi diatas: ', (input) => {
            if (input.trim() == 1) {
              searchDosen();
            } else if (input.trim() == 2) {
              dosenInterface();
            }
            else {
              console.log('Perintah tidak dikenal')
              searchDosen();
            }
          });
        } else if (input.trim() == 1) { dosenInterface(); }
        else {
          console.log(`Dosen dengan ID ${input} tidak dikenal`)
          searchDosen()
        }
      }
    })
  })
}
function searchMatkul() {
  console.log('===============================================================================')
  console.log('[1] Kembali ke halaman mata kuliah')
  rl.question('Masukan ID Mata kuliah: ', (input) => {
    input.trim();
    let carimatkul = "SELECT * FROM matakuliah where idmatkul=?"
    db.all(carimatkul, [input], (err, rows) => {
      if (err) { return console.error(err.message); }
      else {
        if (rows.length == 1) {
          console.log('===============================================================================')
          console.log('Subject details')
          console.log('===============================================================================')
          console.log(`Nama mata kuliah         : ${rows[0].namamatkul}`)
          console.log(`ID mata kuliah           : ${rows[0].idmatkul}`)
          console.log(`SKS                      : ${rows[0].sks}`)
          console.log('===============================================================================')
          console.log('silahkan pilih opsi dibawah ini')
          console.log('[1] Melakukan pencarian lain')
          console.log('[2] Kembali ke Menu mata kuliah')
          rl.question('masukan salah satu no. dari opsi diatas: ', (input) => {
            if (input.trim() == 1) {
              searchMatkul();
            } else if (input.trim() == 2) {
              matkulInterface();
            }
            else {
              console.log('Perintah tidak dikenal')
              searchMatkul();
            }
          });
        } else if (input == 1) { matkulInterface(); }
        else {
          console.log(`Matkul dengan ID ${input} tidak dikenal`)
          searchMatkul()
        }
      }
    })
  })
}
function searchKontrak() {
  console.log('===============================================================================')
  console.log('[back] Kembali ke halaman kontrak')
  rl.question('Masukan ID Kontrak: ', (input) => {
    input.trim()
    let cariKontrak = "SELECT * FROM Kontrak where id=?"
    db.all(cariKontrak, [input], (err, rows) => {
      if (err) { return console.error(err.message); }
      else {
        if (rows.length == 1) {
          console.log('===============================================================================')
          console.log('Contract details')
          console.log('===============================================================================')
          console.log(`NIM                   : ${rows[0].nim}`)
          console.log(`ID Kontrak            : ${rows[0].id}`)
          console.log(`ID Dosen              : ${rows[0].dosen_id}`)
          console.log(`ID Matkul             : ${rows[0].matkul_id}`)
          console.log(`ID Jurusan            : ${rows[0].jurusan_id}`)
          console.log(`Nilai                 : ${rows[0].nilai}`)
          console.log('===============================================================================')
          console.log('silahkan pilih opsi dibawah ini')
          console.log('[1] Melakukan pencarian lain')
          console.log('[2] Kembali ke Menu Kontrak')
          rl.question('masukan salah satu no. dari opsi diatas: ', (input) => {
            if (input.trim() == 1) {
              searchKontrak();
            } else if (input.trim() == 2) {
              kontrakInterface();
            }
            else {
              console.log('Perintah tidak dikenal')
              searchKontrak();
            }
          });
        } else if (input == 'back') { kontrakInterface(); }
        else {
          console.log(`Kontrak dengan ID ${input} tidak dikenal`)
          searchKontrak();
        }
      }
    })
  })
}
function tambahMahasiswa() {
  console.log('===============================================================================')
  console.log('[1] Kembali ke halaman Mahasiswa')
  console.log('Lengkapi data dibawah ini')
  rl.question('NIM: ', (input1) => {
    if (input1.trim() == 1) {mahasiswaInterface();}
    rl.question('Nama: ', (input2) => {
      rl.question('Alamat: ', (input3) => {
        rl.question('Jurusan: ', (input4) => {
          rl.question('Umur: ', (input5) => {
            let sqladd = 'insert into mahasiswa(nim, nama, alamat, jurusan, umur) values (?, ?, ?, ?, ?);'
            db.run(sqladd, [input1.trim(), input2, input3, input4.trim(), input5.trim()], (err, rows) => {
              if (err) return console.error(err.message);
            })
            console.log(`Mahasiswa ${input2.trim()} berhasil ditambahkan`)
            tableMahasiswa();
          })
        })
      })
    })
  })
}
function tambahJurusan() {
  console.log('===============================================================================')
  console.log('[1] Kembali ke halaman Jurusan')
  console.log('Lengkapi data dibawah ini')
  rl.question('ID Jurusan: ', (input1) => {
    input1.trim()
    if (input1 == 1) {jurusanInterface();}
    rl.question('Nama Jurusan:', (input2) => {
      input2.trim()
      let sqladd = 'insert into jurusan(idjurusan, namajurusan) values (?, ?);'
      db.run(sqladd, [input1, input2], (err, rows) => {
        if (err) return console.error(err.message);
      })
      console.log(`Jurusan ${input2} berhasil ditambahkan`)
      tableJurusan();
    })
  })
}
function tambahDosen() {
  console.log('===============================================================================')
  console.log('[1] Kembali ke halaman Dosen')
  console.log('Lengkapi data dibawah ini')
  rl.question('ID Dosen: ', (input1) => {
    input1.trim()
    if (input1 == 1) {dosenInterface();}
    rl.question('Nama Dosen: ', (input2) => {
      let sqladdD = 'insert into dosen(iddosen, nama) values (?, ?);'
      db.run(sqladdD, [input1, input2], (err, rows) => {
        if (err) return console.error(err.message);
      })
      console.log(`Dosen ${input2} berhasil ditambahkan`)
      tableDosen();
    })
  })
}
function tambahMatkul() {
  console.log('===============================================================================')
  console.log('[1] Kembali ke halaman mata kuliah')
  console.log('Lengkapi data dibawah ini')
  rl.question('ID Mata kuliah: ', (input1) => {
    input1.trim()
    if (input1 == 1) {matkulInterface();}
    rl.question('Nama mata kuliah: ', (input2) => {
      input2.trim()
      rl.question('Jumlah SKS: ', (input3) => {
        input3.trim()
        let sqladdD = 'insert into matakuliah(idmatkul, namamatkul, sks) values (?, ?, ?);'
        db.run(sqladdD, [input1, input2, input3], (err, rows) => {
          if (err) return console.error(err.message);
        })
        console.log(`Mata kuliah ${input2} berhasil ditambahkan`)
        tableMatkul();
      })
    })
  })
}
function tambahKontrak() {
  console.log('===============================================================================')
  console.log('[1] Kembali ke halaman mata kuliah')
  console.log('Lengkapi data dibawah ini')
  rl.question('NIM: ', (input1) => {
    input1.trim()
    if (input1 == 1) {kontrakInterface();}
    rl.question('ID Dosen: ', (input2) => {
      input2.trim()
      rl.question('ID Matkul: ', (input3) => {
        input3.trim()
        rl.question('ID Jurusan: ', (input4) => {
          input4.trim()
          rl.question('Nilai: ', (input5) => {
            input5.trim()
            let sqladd = 'insert into kontrak(nilai, nim, dosen_id, matkul_id, jurusan_id) values (?, ?, ?, ?, ?);'
            db.run(sqladd, [input5, input1, input2, input3, input4], (err, rows) => {
              if (err) return console.error(err.message);
            })
            console.log(`Kontrak untuk NIM ${input2} berhasil ditambahkan`)
            tableKontrak();
          })
        })
      })
    })
  })
}
function hapusMahasiswa() {
  console.log('===============================================================================')
  console.log('[1] Kembali ke halaman Mahasiswa')
  rl.question('Masukkan NIM Mahasiswa yang akan dihapus: ', (input1) => {
    input1.trim()
    let carimahasiswa = "SELECT * FROM mahasiswa where nim=?"
    db.all(carimahasiswa, [input1], (err, rows) => {
      if (err) { return console.error(err.message); }
      else {
        if (rows.length == 1) {
          let sqldelete = 'delete from mahasiswa where nim=?;'
          db.run(sqldelete, [input1], (err, rows) => {
            if (err) return console.error(err.message);
          })
          console.log(`Mahasiswa dengan NIM ${input1} berhasil dihapus.`)
          tableMahasiswa();
        } else if (input1 == 1) { mahasiswaInterface(); } //
        else {
          console.log(`Mahasiswa dengan NIM ${input1} tidak dikenal`)
          hapusMahasiswa()
        }
      }
    })
  })
}
function hapusJurusan() {
  console.log('===============================================================================')
  console.log('[1] Kembali ke halaman Jurusan')
  rl.question('Masukkan ID Jurusan yang akan dihapus: ', (input1) => {
    input1.trim()
    let carijurusan = "SELECT * FROM jurusan where idjurusan=?"
    db.all(carijurusan, [input1], (err, rows) => {
      if (err) { return console.error(err.message); }
      else {
        if (rows.length == 1) {

          let sqldelete = 'delete from jurusan where idjurusan=?;'
          db.run(sqldelete, [input1], (err, rows) => {
            if (err) return console.error(err.message);
          })
          console.log(`Jurusan dengan ID ${input1} berhasil dihapus.`)
          tableJurusan();
        } else if (input1 == 1) { jurusanInterface(); }
        else {
          console.log(`Jurusan dengan ID ${input1} tidak dikenal`)
          searchJurusan()
        }
      }
    })
  }
  )
}
function hapusDosen() {
  console.log('===============================================================================')
  console.log('[1] Kembali ke halaman Dosen')
  rl.question('Masukkan ID Dosen yang akan dihapus: ', (input1) => {
    input1.trim()
    let caridosen = "SELECT * FROM dosen where iddosen=?"
    db.all(caridosen, [input1], (err, rows) => {
      if (err) { return console.error(err.message); }
      else {
        if (rows.length == 1) {
          let sqldelete = 'delete from dosen where iddosen=?;'
          db.run(sqldelete, [input1], (err, rows) => {
            if (err) return console.error(err.message);
          })
          console.log(`Dosen dengan ID ${input1} berhasil dihapus.`)
          tableDosen();
        } else if (input1 == 1) { dosenInterface(); }
        else {
          console.log(`Dosen dengan ID ${input1} tidak dikenal`)
          searchDosen()
        }
      }
    })
  })
}
function hapusMatkul() {
  console.log('===============================================================================')
  console.log('[1] Kembali ke halaman mata kuliah')
  rl.question('Masukkan ID Mata kuliah yang akan dihapus: ', (input1) => {
    input1.trim()
    let carimatkul = "SELECT * FROM matakuliah where idmatkul=?"
    db.all(carimatkul, [input1], (err, rows) => {
      if (err) { return console.error(err.message); }
      else {
        if (rows.length == 1) {
          let sqldelete = 'delete from matakuliah where idmatkul=?;'
          db.run(sqldelete, [input1], (err, rows) => {
            if (err) return console.error(err.message);
          })
          console.log(`Mata kuliah dengan ID ${input1} berhasil dihapus.`)
          tableMatkul();
        } else if (input1 == 1) { matkulInterface(); }
        else {
          console.log(`Matkul dengan ID ${input1} tidak dikenal`)
          searchMatkul()
        }
      }
    })
  })
}
function hapusKontrak() {
  console.log('===============================================================================')
  console.log('[back] Kembali ke halaman Kontrak')
  rl.question('Masukkan ID Kontrak yang akan dihapus: ', (input1) => {
    input1.trim();
    input1.toLowerCase();
    let cariKontrak = "SELECT * FROM Kontrak where id=?"
    db.all(cariKontrak, [input1], (err, rows) => {
      if (err) { return console.error(err.message); }
      else {
        if (rows.length == 1) {
          let sqldelete = 'delete from kontrak where id=?;'
          db.run(sqldelete, [input1], (err, rows) => {
            if (err) return console.error(err.message);
          })
          console.log(`Kontrak dengan ID ${input1} berhasil dihapus.`)
          tableKontrak();
        } else if (input1 == 'back') { kontrakInterface(); }
        else {
          console.log(`Kontrak dengan ID ${input1} tidak dikenal`)
          searchKontrak();
        }
      }
    })
  })
}

  


