class RemoveCurrentCostFromEvents < ActiveRecord::Migration[6.1]
  def change
    remove_column :events, :current_cost, :float
  end
end
