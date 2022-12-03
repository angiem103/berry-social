class CreateEventVendors < ActiveRecord::Migration[6.1]
  def change
    create_table :event_vendors do |t|
      t.integer :event_id
      t.integer :vendor_id
      t.float :total_cost
      t.float :left_to_pay

      t.timestamps
    end
  end
end
