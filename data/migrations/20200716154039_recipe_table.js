
exports.up = function (knex, Promise) {
    return knex.schema
        .createTable('recipes', tbl => {
            tbl.increments()
            tbl.string('name').notNullable()
        })
        .createTable('steps', tbl => {
            tbl.increments()
            tbl.integer('step_count').unsigned().notNullable()
            tbl.integer('recipe_id').unsigned().notNullable().references('id').inTable('recipes').onUpdate('CASCADE').onDelete('CASCADE')
            tbl.text('directions')
        })
        .createTable('ingredients', tbl => {
            tbl.increments()
            tbl.string('name')
        })
        .createTable('recipe_ingredients', tbl => {
            tbl.increments()
            tbl.integer('recipe_id').unsigned().notNullable().references('id').inTable('ingredients').onUpdate('CASCADE').onDelete('CASCADE')
            tbl.integer('ingredient_id').unsigned().notNullable().references('ingredients.id')
            tbl.float('quantity')
        })

}

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('recipes')
        .dropTableIfExists('steps')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipe_ingredients')

}
