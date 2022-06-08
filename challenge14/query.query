create table jurusan(idjurusan integer primary key not null, namajurusan varchar not null);
create table mahasiswa(nim varchar primary key not null, nama varchar(50) not null, alamat text, jurusan integer not null, foreign key (jurusan) references jurusan(idjurusan));
create table matakuliah(idmatkul varchar(5) primary key not null, namamatkul varchar(50) not null, sks varchar(4) not null);
create table dosen(iddosen varchar primary key not null, nama varchar(50) not null);
create table kontrak(
    id integer primary key autoincrement, 
    nilai varchar(3) not null, 
    nim varchar, 
     dosen_id varchar,
    matkul_id varchar(5),
    foreign key (nim) references mahasiswa(nim)
    foreign key (dosen_id) references dosen(iddosen)
    foreign key (matkul_id) references matakuliah(idmatkul));

    insert into jurusan(idjurusan, namajurusan) values ('88101', 'matematika');
insert into jurusan(idjurusan, namajurusan) values ('88102', 'biologi');
insert into jurusan(idjurusan, namajurusan) values ('88103', 'fisika');

insert into mahasiswa(nim, nama, alamat, jurusan) values ('001201', 'Bagus', 'Kopo', '88101');
insert into mahasiswa(nim, nama, alamat, jurusan) values ('001202', 'Andi', 'Soreang', '88102');
insert into mahasiswa(nim, nama, alamat, jurusan) values ('001203', 'Nanda', 'Cicaheum', '88103');
insert into mahasiswa(nim, nama, alamat, jurusan) values ('001204', 'Fitri', 'Metro', '88102');
insert into mahasiswa(nim, nama, alamat, jurusan) values ('001205', 'Amir', 'Lembang', '88103');

insert into matakuliah(idmatkul, namamatkul, sks) values ('44101', 'Logaritma', '1jam');
insert into matakuliah(idmatkul, namamatkul, sks) values ('44102', 'Pencernaan', '2jam');
insert into matakuliah(idmatkul, namamatkul, sks) values ('44103', 'Dinamika', '3jam');

insert into dosen(iddosen, nama) values ('22101', 'Dr Fahri');
insert into dosen(iddosen, nama) values ('22102', 'Dr Samsudin');
insert into dosen(iddosen, nama) values ('22103', 'Dr Ali');

insert into kontrak(nilai, nim, dosen_id, matkul_id) values ('085', '001201', '22101', '44101');
insert into kontrak(nilai, nim, dosen_id, matkul_id) values ('090', '001202', '22102', '44102');
insert into kontrak(nilai, nim, dosen_id, matkul_id) values ('100', '001203', '22103', '44103');