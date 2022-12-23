class RemoveTotalCostFromEventVendors < ActiveRecord::Migration[6.1]
  def change
    remove_column :event_vendors, :total_cost, :float
  end
end
