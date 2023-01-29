class CreateActivities < ActiveRecord::Migration[6.1]
  def change
    create_table :activities do |t|
      t.string :title
      t.string :description
      t.date :date
      t.time :time

      t.timestamps
    end
  end
end
