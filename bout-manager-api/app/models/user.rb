class User < ApplicationRecord
  has_one :person

  has_many :access_grants,
  class_name: 'Doorkeeper::AccessGrant',
  foreign_key: :resource_owner_id,
  dependent: :delete_all # or :destroy if you need callbacks


  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :validatable, :confirmable, :trackable


    def self.authenticate(email, password)
      user = User.find_for_authentication(email: email)
      user.try(:valid_password?, password) ? user : nil
    end

  end
