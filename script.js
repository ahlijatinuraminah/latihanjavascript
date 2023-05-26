//alert("Halo ini javascript")
/*
document.writeln("<center>")
document.writeln("<hr/>")
document.writeln("<h1 class='red'>ESQBS</h1>")
document.writeln("<h2>Jurusan Ilmu Komputer</h2>")
document.writeln("<hr/>")
document.writeln("</center>")

var siteName = "ESQ BS"
var url = "esqbs.ac.id"
var visitorCount = 5921
var nama = "Sya'ban"
var prodi = 'Ilmu Komputer'
var nama2 = 'Muthi\'ah'

document.writeln("Nama situs adalah " + siteName  + "<br>")
document.writeln("Urlnya " + url + "<br>")
document.writeln("Jumlah pengunjungnya " + visitorCount + "<br>")
document.writeln("Nama " + nama + "<br>")
document.writeln("Prodi " + prodi + "<br>")
document.writeln("Nama 2 " + nama2 )
/*
var a = "10"
var b = "5"
var c = a + b
var d = a - b

document.writeln("c :" + c)
document.writeln("d :" + d)

var e = parseInt(a);
var f = parseInt(b)

var g = e - f
document.writeln("g :" + g)
document.writeln("Tipe data variable e adalah :" + typeof(e))


document.writeln("<br>")

var angka = 17;
if (angka % 2 == 0){
   console.log("Angka " + angka);
   console.log("Angka adalah bilangan genap");
}
else{
   console.log("Angka " + angka);
   console.log("Angka adalah bilangan ganjil");
}

for(i = 5; i >= 0; i--){
    document.writeln(i + " ")
}

var namabulan = ["", "Januari", "feb", "mar", "apr", "mei", "jun", "jul", "ags", "sep", "okt", "nov", 'des']

document.writeln("<br>")
//tanggal
document.writeln("<select>")
for(i = 1; i <= 31; i++){
    document.write("<option value=" + i + ">" + i + "</option>")
}
document.writeln("</select>")

//bulan
document.writeln("<select>")
for(i = 1; i <= 12; i++){
    document.write("<option value=" + i + ">" + namabulan[i] + "</option>")
}
document.writeln("</select>")

//tahun
document.writeln("<select>")
for(i = 2023; i >= 2005; i--){
    document.write("<option value=" + i + ">" + i + "</option>")
}
document.writeln("</select>")
document.writeln("<br>")

var listwarna = ['Merah', 'Kuning', 'Hijau', 'Biru', 'Ungu']
document.writeln(listwarna[1]);
document.writeln("<br>")

for(i = 0; i < listwarna.length; i++){
    document.writeln(listwarna[i] + "<br>");    
}

var kalimat = "kulIah PerancAngan Web hari jumat";
var panjang = kalimat.length;

document.writeln("Panjang kalimat = " + panjang);
var kalimatHurufBesar = kalimat.toUpperCase();

document.writeln(kalimatHurufBesar);
var kalimatHurufKecil = kalimat.toLowerCase();
document.writeln(kalimatHurufKecil);
var random = Math.random();
console.log(random)

var random2 = Math.random() * 10 + 1;
console.log(random2);

var angkaRandom = Math.floor(Math.random() * 3 + 1);
console.log(angka);
var operator =['x', '+', '-', ':'];

var chosenOperator = operator[angkaRandom];

if(chosenOperator == '+'){

} else if (chosenOperator == 'x'){
    
}



var result = document.getElementById("programmer").innerHTML;
console.log(result);

result = document.getElementsByClassName("apps")[0].innerHTML;
console.log(result);

document.getElementsByTagName("p")[1].className= 'red';
document.getElementsByClassName("apps")[1].className= 'red';

document.getElementsByTagName("h1")[0].style.color = "green";
document.getElementsByTagName("h1")[0].style.backgroundColor = "yellow";

document.getElementsByTagName("h1")[1].setAttribute("class", "red");

document.getElementById("programmer").style.display = 'none';
document.getElementById("programmer").hidden = true;

var element = document.getElementsByClassName("judul")[0];
document.body.removeChild(element);

function tampil(){
    var button = document.getElementById("tombol");
    if(button.innerHTML == 'Hide me'){
        document.getElementById("gambar").style.display = 'none';
        button.innerHTML = 'Show me';
    }
    else{
        document.getElementById("gambar").style.display = 'block';
        button.innerHTML = 'Hide me';
    } 
}

function tambah(){
    var angka1 = document.getElementById("angka1").value;
    var angka2 = document.getElementById("angka2").value;

    var hasil = parseInt(angka1) + parseInt(angka2);
    document.getElementById("hasil").innerHTML = hasil;
}
*/

function hitunga(){
       
    var jumlah = parseInt(document.getElementById("txtJumlah").value);
    var harga = parseInt(document.getElementById("txtHarga").value);
    var total = 0;

    total = harga * jumlah;
    document.getElementById("txtTotal").value = total;
}

function hitungb(){
    
    var status = document.getElementById("ddlStatus").value;
    var jumlah = parseInt(document.getElementById("txtJumlah").value);
    var harga = parseInt(document.getElementById("txtHarga").value);
    var total = 0;
    var diskon = 0;
    var bayar = 0;
    total = harga * jumlah;

    if(status == "Pelanggan"){
        diskon = 0.1*total;        
    }else{
        diskon = 0;       
    }

    bayar = total - diskon;
    document.getElementById("txtTotal").value = total;
    document.getElementById("txtDiskon").value = diskon;
    document.getElementById("txtBayar").value = bayar;
}

function hitungHarga(){
    var barang = document.getElementById("ddlBarang").value;
    var harga = 0;
    if(barang == "Monitor"){
        harga = 300000;
    } else if(barang == "Keyboard"){
        harga = 100000;
    } else if(barang == "Mouse"){
        harga = 50000;
    }
    document.getElementById("txtHarga").value = harga;
}

function hitungd(){
    var jumlah = parseInt(document.getElementById("txtJumlah").value);
    var harga = parseInt(document.getElementById("txtHarga").value);
    var ckUSB = document.getElementById("ckUSB");
    var ckMemory = document.getElementById("ckMemory");
    var ckSpeaker = document.getElementById("ckSpeaker")
    var total = 0;
    var pajak = 0;
    var bayar = 0;
    total = harga * jumlah;

    if(ckUSB.checked == true) {
         total += parseInt(ckUSB.value);
    }

    if(ckMemory.checked == true) {
        total += parseInt(ckMemory.value);
    }

    if(ckSpeaker.checked == true) {
        total += parseInt(ckSpeaker.value);
    }
    pajak = 0.1*total;  
    bayar = total + pajak;
    document.getElementById("txtTotal").value = total;
    document.getElementById("txtPajak").value = pajak;
    document.getElementById("txtBayar").value = bayar;     
}

function hitunge(){
    var jumlah = parseInt(document.getElementById("txtJumlah").value);
    var harga = parseInt(document.getElementById("txtHarga").value);
    var ckUSB = document.getElementById("ckUSB");
    var ckMemory = document.getElementById("ckMemory");
    var ckSpeaker = document.getElementById("ckSpeaker")
    var total = 0;    
    var bayar = 0;
    total = harga * jumlah;

    if(ckUSB.checked == true) {
        total += parseInt(ckUSB.value);
    }

    if(ckMemory.checked == true) {
       total += parseInt(ckMemory.value);
    }

    if(ckSpeaker.checked == true) {
       total += parseInt(ckSpeaker.value);
    }

    var carabayar = document.querySelector("input[type='radio'][name=rdCaraBayar]:checked").value;
    var diskonbunga = 0;
    if(carabayar == "Tunai"){
        diskonbunga = 0.1 * total;
        bayar = total - diskonbunga;
    } else if(carabayar == "Kredit"){
        diskonbunga = 0.15 * total;
        bayar = total + diskonbunga;
    }
    document.getElementById("txtTotal").value = total;
    document.getElementById("txtDiskonBunga").value = diskonbunga;
    document.getElementById("txtBayar").value = bayar;     
    
}


function rotateGif(element){
    element.style.transform = "translate(50px, 50px)";
    element.style.transform = "rotate(180deg)";    
}

var isi ='';
function keypress(){
    var content = document.getElementById("div");
    isi = content.innerHTML;
    content.innerHTML = "you pressed a key";
    content.style.color = "red";
}

function kembali(){
    var content = document.getElementById("div");    
    content.innerHTML = isi;
    content.style.color = "black";
}

var btn = document.querySelector(".button2");
btn.addEventListener('click', function(){
    alert("Hello world");
})

btn.addEventListener('click', function(){
    btn.style.backgroundColor = 'pink';
})
