class AddCurrentCostToEventVendors < ActiveRecord::Migration[6.1]
  def change
    add_column :event_vendors, :current_cost, :float
  end
end
