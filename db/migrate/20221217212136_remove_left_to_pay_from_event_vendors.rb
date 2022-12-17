class RemoveLeftToPayFromEventVendors < ActiveRecord::Migration[6.1]
  def change
    remove_column :event_vendors, :left_to_pay, :float
  end
end
