class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.integer :author_id, null: false
      t.integer :views, null: false, :default => 0
      t.string :title
      t.string :description

      t.timestamps
    end
    add_index :photos, :author_id
  end
end
