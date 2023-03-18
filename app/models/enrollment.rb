class Enrollment < ApplicationRecord
  belongs_to :user
  belongs_to :activity

  validates :user_id, uniqueness: { scope: :activity_id, message: "has already signed up for this activity"}
  # validates :number_of_attendees, numericality: { greater_than: 0}
end
