class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :username

  has_many :goals
  # has_many :destinations, through: :goal_id
end
