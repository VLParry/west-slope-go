class EnrollmentSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user, serializer: UserSerializer
  has_one :activity, serializer: ActivitySerializer
end
