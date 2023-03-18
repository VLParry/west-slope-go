class EnrollmentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :activity_id, :number_of_attendees
  has_one :user, serializer: UserSerializer
  has_one :activity, serializer: ActivitySerializer
end
