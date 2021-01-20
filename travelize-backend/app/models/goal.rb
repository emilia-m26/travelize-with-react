class Goal < ApplicationRecord
    has_many :destinations
    belongs_to :user
    # belongs_to :destination
end
