const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 8888;

// Image sources are in the README.md file
const storeItems = [{
    "title": "Table",
    "src":"https://www.ikea.com/us/en/images/products/ingo-table-pine__0737092_pe740877_s5.jpg?f=xl",
    "cost": 53,
    "stock": 36,
    "rating": 6,
    "ratingCount": 139
  }, {
    "title": "Ipad",
    "src": "https://imgs.search.brave.com/NssidtffcEWv-vIQi9TNbF0s5Kmske7b7fz9-JPH-W0/rs:fit:1103:1064:1/g:ce/aHR0cHM6Ly90aGV0/b21vcnJvd3RlY2hu/b2xvZ3kuY28ua2Uv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDgvQXBwbGUtaVBh/ZC1Qcm8tMTEtaW5j/aC0xLmpwZw",
    "cost": 310,
    "stock": 32,
    "rating": 0,
    "ratingCount": 104
  }, {
    "title": "Monitor",
    "src":"https://teracomputers.com/wp-content/uploads/2020/12/banner-creating-art-work.jpg",
    "cost": 636,
    "stock": 35,
    "rating": 4,
    "ratingCount": 125
  }, {
    "title": "Sewing Kit",
    "src": "https://cf.shopee.com.my/file/d3f9182f206241c26b3fd8d99a0e1d3b",
    "cost": 972,
    "stock": 16,
    "rating": 10,
    "ratingCount": 37
  }, {
    "title": "Plushie",
    "src":"https://static.wikia.nocookie.net/nerdyrabbit/images/5/5e/SPF.dragon.Jo_Carter.jpg",
    "cost": 143,
    "stock": 44,
    "rating": 5,
    "ratingCount": 5
  }, {
    "title": "TV",
    "src":"https://media.fozdoo.com/2020/03/71EwLHcuuJL._AC_SL1500_.jpg",
    "cost": 176,
    "stock": 10,
    "rating": 2,
    "ratingCount": 224
  }, {
    "title": "Selfie Lamp",
    "src":"https://cntronic.com/data/product/lg/ila-98458-1.jpg",
    "cost": 645,
    "stock": 0,
    "rating": 5,
    "ratingCount": 40
  }, {
    "title": "TV",
    "src":"https://media.fozdoo.com/2020/03/71EwLHcuuJL._AC_SL1500_.jpg",
    "cost": 205,
    "stock": 46,
    "rating": 10,
    "ratingCount": 227
  }, {
    "title": "Selfie Lamp",
    "src":"https://cntronic.com/data/product/lg/ila-98458-1.jpg",
    "cost": 357,
    "stock": 5,
    "rating": 4,
    "ratingCount": 219
  }, {
    "title": "Xbox",
    "src":"https://forums.launchbox-app.com/uploads/monthly_2020_05/249912167_MicrosoftXbox.thumb.jpg.7b6f4d21eaef4aca82a58291bbcd72a4.jpg",
    "cost": 635,
    "stock": 12,
    "rating": 0,
    "ratingCount": 78
  }]

const categories = [{
    name: "Decor",
    src: "https://3dzip.org/wp-content/uploads/2019/05/3D-Model-Kitchen-171-Free-Dowload-1.jpg"
    },
    {
        name:"Tech",
        src:"https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        name:"Grocery",
        src:"https://www.stock-free.org/images/strawberries-a-lot-of-food-table-picnic-breakfast-table-picnic-breakfast-crop-apples-holiday-fruit-wealth-summer-21837014.jpg"
    }
]

app.set('views', path.join(__dirname, 'views'));
app.set('view engine',"pug");


app.get('/', (req,res) => {
    res.render('index',{ title: "Store", storeItems, categories })
})

app.listen(port, () => { console.log(`listening on http://localhost:${port}`) });