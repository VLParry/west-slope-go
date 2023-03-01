class Enrollment < ApplicationRecord
  belongs_to :user
  belongs_to :activity

  validates :user_id, uniqueness: { scope: :activity_id, message: "has already signed up for this activity"}
end
