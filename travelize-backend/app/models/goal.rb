class Goal < ApplicationRecord
    has_many :destinations
    belongs_to :user
end
