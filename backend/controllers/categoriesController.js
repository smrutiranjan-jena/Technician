const Category = require('../models/categoryModel')
const categoryCltr = {}
categoryCltr.createCategory = async (req, res) => {
    const body = req.body
    const category = new Category(body)
    try {
        const categoryDoc = await category.save()
        res.json(categoryDoc)
    } catch (err) {
        res.json(err)
    }
}
categoryCltr.getAllCategory = async (req, res) => {
    try {
        const catagories = await Category.find()
        res.json(catagories)
    } catch (err) {
        re.json(err)
    }
}
categoryCltr.editCategory = (req, res) => {
    const id = req.params.categoryid
    const body = req.body
    Category.findByIdAndUpdate(id, body,)
         .then((categoryDoc)=>{
            res.json(categoryDoc)
         })
         .catch((err)=>{
            res.json(err)
         })
}
categoryCltr.removeCategory = (req, res) => {
    const id = req.params.id
    Category.findByIdAndDelete(id)
         .then((categoryDoc)=>{
            res.json(categoryDoc)
         })
         .catch((err)=>{
            res.json(err)
         })
}

module.exports = categoryCltr