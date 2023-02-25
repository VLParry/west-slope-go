class Activity < ApplicationRecord
    has_many :enrollments, dependent: :destroy
    has_many :users, through: :enrollments

    validates :title, presence: true, uniqueness: true
    validates :description, presence: true
    validates :location, presence: true
    validates :date, presence: true
    validates :time, presence: true 
end
