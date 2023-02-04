class User < ApplicationRecord
    has_secure_password 
    # has_many :user_activities, class_name: "Activity", foreign_key: "user_id"
    has_many :enrollments
    has_many :activities, through: :enrollments

    validates :email, presence: true, uniqueness: true
end

#need user to be able to show all their own activities that they created and joined
#added user_id to activities table 
#gives my activities
#goes through enrollments 
#Just allow a user to edit any activity