class User < ApplicationRecord
    has_many :goals
    # has_many :destinations, through: :goals
end
