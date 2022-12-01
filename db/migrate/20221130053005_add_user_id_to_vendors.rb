class AddUserIdToVendors < ActiveRecord::Migration[6.1]
  def change
    add_column :vendors, :user_id, :integer
  end
end
