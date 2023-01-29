class User < ApplicationRecord
    has_secure_password 
    
    has_many :enrollments
    has_many :activites, through: :enrollments

    validates :email, presence: true, uniqueness: true
end
