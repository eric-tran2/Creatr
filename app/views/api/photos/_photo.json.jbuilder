json.extract! photo, :id, :author_id, :views, :title, :description, :created_at
json.picture_url url_for(photo.photo)