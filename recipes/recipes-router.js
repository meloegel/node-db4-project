const express = require('express')

const router = express.Router()

const Recipes = require('./recipes-model')


router.get('/', (req, res) => {
    Recipes.getRecipes()
        .then(recipes => {
            res.status(200).json(recipes)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error: 'error' })
        })
})

router.get('/:id/shoppingList', (req, res) => {
    Recipes.getShoppingList(req.params.id)
        .then(ingredients => {
            res.status(200).json(ingredients)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error: 'error' })
        })
})

router.get('/:id/instructions', (req, res) => {
    Recipes.getInstructions(req.params.id)
        .then(steps => {
            res.status(200).json(steps)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error: 'error' })
        })
})


module.exports = router;