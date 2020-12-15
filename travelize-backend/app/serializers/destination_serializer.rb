class DestinationSerializer < ActiveModel::Serializer
  attributes :id, :location, :description, :date_traveled, :completed

  belongs_to :goal
end
