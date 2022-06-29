const Category = require('../models/category')

module.exports = {
    index,
    new: newCategory,
    create,
    show,
}

function index(req, res) {
    Category.find({}, function(err, categories) {
        res.render('categories/index', {
            categories
        })
    })
}

function newCategory(req, res) {
    res.render('categories/new')
}

function show(req, res) {
    Category.findById(req.params.id, function(err, category) {
        res.render('categories/show', {title: 'Category', category})
    })
}

function create(req, res) {
    const category = new Category(req.body)
    // console.log(req.body)
    category.save(function(err) {
        if (err) {
            return res.redirect('/categories/new')
        }
        res.redirect('/categories/new')
    })
}
