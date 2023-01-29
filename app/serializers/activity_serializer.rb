class ActivitySerializer < ActiveModel::Serializer
  attributes :title, :description, :date, :time
end
#deleted id 