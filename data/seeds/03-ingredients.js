
exports.seed = function (knex, Promise) {
  return knex('ingredients').truncate()
    .then(function () {
      return knex('ingredients').insert([
        { id: 1, name: 'fire' },
        { id: 2, name: 'water' },
        { id: 3, name: 'earth' }
      ]);
    })
}
