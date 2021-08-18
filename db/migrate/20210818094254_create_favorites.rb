class CreateFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table :favorites do |t|
      t.integer :photo_id, null: false
      t.integer :favoriter_id, null: false
      t.timestamps
    end
    add_index :favorites, :photo_id
    add_index :favorites, [:favoriter_id, :photo_id], unique: true
  end
end
