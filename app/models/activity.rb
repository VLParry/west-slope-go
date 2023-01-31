class Activity < ApplicationRecord
    has_many :enrollments
    belongs_to :users
    has_many :users, through: :enrollments

end
