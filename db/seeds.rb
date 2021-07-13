# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri';

User.destroy_all
User.reset_pk_sequence
Photo.destroy_all
Photo.reset_pk_sequence


guestUser = User.create!(email: 'guestUser@creatr.com', password: 'password', first_name: 'Guest', last_name: 'User', age: '25')
photo = Photo.create!(author_id: 1).photo.attach(
  io: File.open("app/assets/images/splash_background7.jpg"), filename: "splash_background7.jpg"
  )
photo = Photo.create!(author_id: 1).photo.attach(
  io: File.open("app/assets/images/splash_background6.jpg"), filename: "splash_background6.jpg"
  )
photo = Photo.create!(author_id: 1).photo.attach(
  io: File.open("app/assets/images/splash_background5.jpg"), filename: "splash_background5.jpg"
  )
photo = Photo.create!(author_id: 1).photo.attach(
  io: File.open("app/assets/images/splash_background4.jpg"), filename: "splash_background4.jpg"
  )
photo = Photo.create!(author_id: 1).photo.attach(
  io: File.open("app/assets/images/splash_background3.jpg"), filename: "splash_background3.jpg"
  )

photo = Photo.create!(author_id: 1).photo.attach(
  io: File.open("app/assets/images/splash_background2.jpg"), filename: "splash_background2.jpg"
  )
photo = Photo.create!(author_id: 1).photo.attach(
  io: File.open("app/assets/images/splash_background.jpeg"), filename: "splash_background.jpeg"
  )






