class ActivitySerializer < ActiveModel::Serializer
  attributes :title, :description, :location, :date, :time
end
#deleted id 