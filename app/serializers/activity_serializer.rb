class ActivitySerializer < ActiveModel::Serializer
  attributes :title, :description, :location, :date, :time, :id, :enrollments

  has_many :enrollments, serializer: EnrollmentSerializer
  has_many :users, through: :enrollments
  # serializer: UserSerializer
  
# trying to get enrollment_id to show up in the userActivities 
  # def enrollments 
  #   object.enrollments.map do |enrollment|
  #     {
  #       id: enrollment.id,
  #       user_id: enrollment.user_id,
  #       enrollment_id: enrollment.id
  #     }
  # end
end
#deleted id 