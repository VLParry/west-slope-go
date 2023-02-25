class Activity < ApplicationRecord
    has_many :enrollments, dependent: :destroy
    has_many :users, through: :enrollments

    validates :title, presence: true, uniqueness: true, length: { maximum: 100 } 
    validates :description, presence: true, length: { maximum: 250 } 
    validates :location, presence: true, length: { maximum: 250 } 
    validates :date, presence: true
    validates :time, presence: true 
end
