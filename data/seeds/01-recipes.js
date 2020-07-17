
exports.seed = function (knex, Promise) {
  return knex('recipes').truncate()
    .then(function () {
      return knex('recipes').insert([
        { id: 1, name: 'recipe one' },
        { id: 2, name: 'recipe test' },
        { id: 3, name: 'recipe three' }
      ]);
    })
}
