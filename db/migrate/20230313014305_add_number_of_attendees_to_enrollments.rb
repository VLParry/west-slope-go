class AddNumberOfAttendeesToEnrollments < ActiveRecord::Migration[6.1]
  def change
    add_column :enrollments, :number_of_attendees, :integer
  end
end
