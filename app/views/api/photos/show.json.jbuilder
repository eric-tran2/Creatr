json.photo do 
  json.partial! "api/photos/photo", photo: @photo
end



json.comments do
  @photo.comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :body, :photo_id, :commenter_id, :created_at
    end
  end
end