class EditTags < ActiveRecord::Migration[5.2]
  def change
    add_column :tags, :tagger_id, :integer
    add_index :tags, :tagger_id
  end
end
