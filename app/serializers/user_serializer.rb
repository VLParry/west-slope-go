class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :name

  has_many :enrollments, serializer: EnrollmentSerializer
  has_many :activities, through: :enrollments, serializer: ActivitySerializer
end
