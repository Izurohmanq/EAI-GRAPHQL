## Hello, Kami Dari Kelompok Babandungan Kelas SI-44-03  <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width=25> !
<div align="center">
<img src="https://media.giphy.com/media/8w5Ur5vySenIxHKdsf/giphy.gif">
</div>
<br>

# EAI-GRAPHQL
EAI-GRAPHQL

## PASTIKAN SUDAH MENGINSTALL 2 INI YA KAWAN

- Untuk tutorial penginstallan NodeJS

[![TUTORIAL PENGINSTALLAN NODEJS BY SANDHIKA GALIH AKA WPU](https://img.youtube.com/vi/VfN1_pEdQAA/0.jpg)](https://www.youtube.com/watch?v=VfN1_pEdQAA)

- Untuk Penginstallan MongoDB

[![TUTORIAL PENGINSTALLAN MONGODB BY SANDHIKA GALIH AKA WPU](https://img.youtube.com/vi/iXhmi0NYdc8/0.jpg)](https://www.youtube.com/watch?v=iXhmi0NYdc8)

## Cara Menjalankan Graphql
*Salin perintah ini di terminal kamu atau git bash*

- Clone project from github

```bash
git clone https://github.com/Izurohmanq/EAI-GRAPHQL.git 
```

- install semua dependencies

```bash
npm install
```

- Pergi ke file package.json, lalu ganti menjadi

```bash
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon app.js"
  }
```

- Pada file app.js terdapat mongoDB, itu sesuaikan saja sesuai dengan kebutuhan kalian

```bash
mongoose.connect('mongodb://127.0.0.1:27017/graphqleai', { useNewUrlParser: true })
    .then(() => {
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    });
```

- Untuk menjalankan aplikasinya

```bash
nodemon app
```


