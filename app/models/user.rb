# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  session_token   :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  age             :integer          not null
#  email           :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#



class User < ApplicationRecord

  attr_reader :password

  validates :email, presence:true, uniqueness:true, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6 }, allow_nil: true
  validates :password_digest, :session_token, :first_name, :last_name, :age, presence: true
  
  after_initialize :ensure_session_token

  has_many :photos,
    foreign_key: :author_id,
    class_name: :Photo

  has_many :comments,
    foreign_key: :commenter_id,
    class_name: :Comment

  has_many :favorites,
    foreign_key: :favoriter_id,
    class_name: :Favorite

  has_many :favorited_photos,
    through: :favorites,
    source: :photo
  
  has_many :tags,
    foreign_key: :tagger_id,
    class_name: :Tag


  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    self.session_token
  end

  private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end

end
