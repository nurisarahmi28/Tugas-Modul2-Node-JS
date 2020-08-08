const express = require('express'); //untuk import express
const bodyParser = require('body-parser');  //impor dependency body-parser
const app = express();              //deklarasi variabel express
const port = 2609;                 //deklarasi port

app.use(bodyParser.urlencoded({ extended: false})); //diatas endpoint agar dapat dieksekusi

app.get('/orang/:nama', (req, res)=> { //:nama adalah parameter   //function untuk deklarasi endpoint '/' untuk memunculkan respon kepada web
    var namaOrang = req.params.nama;        //deklarasi variabel nama orang
    res.end('Menampilkan nama siswa: ' + namaOrang); //output di web
});

app.post('/orang',(req, res) =>{       //disini kita menggunakan body-parser untuk kirim data dengan post
    var namaOrang = req.body.nama;
    var alamat = req.body.alamat;
    res.end("Menampilkan orang baru, atas nama: " + namaOrang + ', yang beralamat di ' + alamat);
});

app.delete('/orang/:id', (req,res)=> {    //penghapusan data akan dilakukan  secara spesifik
    var id = req.params.id;
    var namaOrang = req.body.nama;
    res.end('ID' + id + ' telah dihapus, atas nama ' + namaOrang);
});

app.put('/orang/:id', (req, res)=> {  //untuk memperbarui data yang ada
    var id = req.params.id;                 //deklarasi variabel id
    var namaOrang = req.body.nama;
    var alamat = req.body.alamat;
    res.end('Seseorang dengan ID dan alamat' + id + ' '+ alamat +', telah terupdate!');
});


app.listen(port, function() {
    console.log('Connected!');
});
