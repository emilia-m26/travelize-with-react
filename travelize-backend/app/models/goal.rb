class Goal < ApplicationRecord
    has_many :destinations
    belongs_to :user

    accepts_nested_attributes_for :destinations

end
