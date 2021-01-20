class Destination < ApplicationRecord
    belongs_to :goal
    # belongs_to :user, through: :goal_id
end
