class DestinationSerializer < ActiveModel::Serializer
  attributes :id, :location, :description, :date_traveled, :completed, :goal_id

  belongs_to :goal
  # belongs_to :user, through :goal
end
