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
        const categories = await Category.find()
        res.json(categories)
    } catch (err) {
        re.json(err)
    }
}
categoryCltr.editCategory = async (req, res) => {
    const id = req.params.categoryid
    const body = req.body
    try {
        const categoryDoc = await Category.findByIdAndUpdate(id, body,)
        res.json(categoryDoc)
    } catch (err) {
        re.json(err)
    }
}
categoryCltr.removeCategory = async (req, res) => {
    const id = req.params.id
    try {
        const categoryDoc = await Category.findByIdAndDelete(id)
        res.json(categoryDoc)
    } catch (err) {
        re.json(err)
    }

}

module.exports = categoryCltr