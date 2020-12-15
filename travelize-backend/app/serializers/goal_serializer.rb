class GoalSerializer < ActiveModel::Serializer
  attributes :id, :name, :user_id

  belongs_to :user
  has_many :destinations
end
