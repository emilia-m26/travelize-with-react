class DestinationSerializer < ActiveModel::Serializer
  attributes :id, :goal_id, :location, :description, :date_traveled, :completed

  belongs_to :goal
end
