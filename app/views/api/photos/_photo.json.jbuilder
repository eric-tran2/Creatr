json.extract! photo, :id, :author_id, :views, :title, :description, :created_at
json.picture_url url_for(photo.photo)
json.set! "comments" do 
  photo.comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :body, :photo_id, :commenter_id, :created_at
    end
  end
end