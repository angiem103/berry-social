class AddVendorDetailsToEventsAsJson < ActiveRecord::Migration[6.1]
  def change
    add_column :events, :vendor_details, :json
  end
end
