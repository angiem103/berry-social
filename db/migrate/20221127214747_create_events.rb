class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.integer :user_id
      t.integer :client_id
      t.string :name
      t.string :description
      t.datetime :start_date
      t.datetime :end_date
      t.string :location
      t.float :budget
      t.float :current_cost

      t.timestamps
    end
  end
end
