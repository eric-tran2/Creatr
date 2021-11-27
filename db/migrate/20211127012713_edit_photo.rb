class EditPhoto < ActiveRecord::Migration[5.2]
  def change
    change_column_null(:photos, :title, false)
    change_column_null(:photos, :description, false)
  end
end
