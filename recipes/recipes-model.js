const db = require('../data/db-config')


module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes')
}

function getShoppingList(recipe_id) {
    return db('recipes as r')
        .join('recipe_ingredients as ri', 'r.id', 'ri.recipe_id')
        .join('ingredients as i', 'i.id', 'ri.ingredient_id')
        .select('r.name as Recipe', 'i.name as Ingredient', 'ri.quantity as Quantity')
        .where({ "r.id": recipe_id })
}

function getInstructions(recipe_id) {
    return db('recipes as r')
        .join('steps as s', 'r.id', 's.recipe_id')
        .select('r.name', 's.step_count', 's.directions')
        .where({ "r.id": recipe_id })
        .orderBy('s.step_count')
}