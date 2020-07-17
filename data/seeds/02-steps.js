
exports.seed = function (knex, Promise) {
  return knex('steps').truncate()
    .then(function () {
      return knex('steps').insert([
        { id: 1, step_count: 1, recipe_id: 1, directions: 'step one' },
        { id: 2, step_count: 2, recipe_id: 1, directions: 'step one' },
        { id: 3, step_count: 3, recipe_id: 1, directions: 'step one' }
      ]);
    })
}

