class User < ApplicationRecord
    has_secure_password 
    has_many :user_activities
    has_many :enrollments
    has_many :activities, through: :enrollments

    validates :email, presence: true, uniqueness: true
end
