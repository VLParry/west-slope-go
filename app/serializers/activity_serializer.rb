class ActivitySerializer < ActiveModel::Serializer
  attributes :title, :description, :location, :date, :time, :id

  has_many :enrollments, serializer: EnrollmentSerializer
  has_many :users, through: :enrollments, serializer: UserSerializer
end
#deleted id 