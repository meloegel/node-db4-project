
exports.seed = function (knex, Promise) {
  return knex('recipe_ingredients').truncate()
    .then(function () {
      return knex('recipe_ingredients').insert([
        { id: 1, recipe_id: 1, ingredient_id: 1, quantity: '1 tbsp' },
        { id: 2, recipe_id: 1, ingredient_id: 2, quantity: '2 cups' },
        { id: 3, recipe_id: 1, ingredient_id: 3, quantity: '1 pinch' }
      ]);
    })
}


