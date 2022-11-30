class CreateVendors < ActiveRecord::Migration[6.1]
  def change
    create_table :vendors do |t|
      t.string :name
      t.string :contact_person
      t.string :phone_number
      t.string :email
      t.string :desc_of_serv

      t.timestamps
    end
  end
end
