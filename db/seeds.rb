# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(email: "test1", password: "test1", name: "Test1")

d1 = DateTime.new(2023, 3, 22)
t1 = DateTime.new(11.00)
Activity.create(title: "test1 title", description: "test 1 description", date: d1, time: t1)


