const express = require('express')
const Store = require('../models/store.js')
const store = express.Router()

// =========== NEW ROUTE ===========//
store.get('/new', (req, res) => {
    res.render(
        'store/new.ejs',
        {
            currentUser: req.session.currentUser
        }
    );
    // res.redirect('/store')
    // res.send('test')
})

// =========== EDIT ROUTE ===========//


// =========== DELETE ROUTE ===========//


// =========== SHOW ROUTE ===========//


// =========== UPDATE ROUTE ===========//


// =========== SEED ROUTE ===========//
store.get('/setup/seed', (req, res) => {
    Store.deleteMany({}, () => {})
    Store.create(
        [
            {
                product: 'Texas A & M International University Short Sleeve T-Shirt',
                description: {
                    brand: 'MV Sport',
                    manufacturer: '	MV Sport US',
                    fabric: '100% Cotton',
                    fit: 'Regular',
                    color: 'Dove Grey'
                },
                price: 7.99,
                points: 50,
                img: "https://i.imgur.com/7k1cUrx.png"
            },
            {
                product: 'Texas A & M International University Short Sleeve T-Shirt',
                description: {
                    brand: 'Champion',
                    manufacturer: 'Champion Products',
                    fabric: '100% Cotton',
                    fit: 'Regular',
                    color: 'Oxford'
                },
                price: 19.50,
                points: 60,
                img: "https://i.imgur.com/Kt4sVwL.png"
            },
            {
                product: 'Texas A & M International University Reverse Weave Crewneck Sweatshirt',
                description: {
                    brand: 'Champion',
                    manufacturer: 'Champion Products',
                    fabric: '80% Cotton/20% Polyester',
                    fit: 'Regular',
                    color: 'Silver Grey'
                },
                price: 62,
                points: 300,
                img: "https://i.imgur.com/GfUuNF8.png"
            }
            {
                product: 'Texas A & M International University Dustdevils Youth Short Sleeve T-Shirt',
                description: {
                    brand: 'Champion',
                    manufacturer: 'Champion Products',
                    fabric: '100% Cotton',
                    fit: 'Youth',
                    color: 'Maroon'
                },
                price: 18,
                points: 60,
                img: "https://i.imgur.com/kzeduna.png"
            },
            {
                product: 'Texas A & M International University Backsack',
                description: {
                    brand: 'Logo Brands',
                    manufacturer: 'Logo Brands',
                    fabric: '100% Polyester',
                    fit: 'One Size',
                    color: 'Maroon'
                },
                price: 14,
                points: 30,
                img: "https://i.imgur.com/qqZmwHJ.png"
            },
            {
                product: "Texas A & M International University Women's Spirit Scrunchie",
                description: {
                    brand: 'League',
                    manufacturer: 'L2 Brands',
                    fabric: '90% Polyester/10% Spandex',
                    fit: 'One Size Fits Most',
                    color: 'Grey'
                },
                price: 9,
                points: 15,
                img: "https://i.imgur.com/0MRi5ye.png"
            },
        ],
        (error, data) => {
            res.redirect('/posts')
        }
    )
})


module.exports = store;
