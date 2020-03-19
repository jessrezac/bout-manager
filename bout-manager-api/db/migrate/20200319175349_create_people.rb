class CreatePeople < ActiveRecord::Migration[6.0]
  def change
    create_table :people do |t|
      t.primary_key :id
      t.string :first_name
      t.string :last_name
      t.integer :phone
      t.string :email
      t.string :snapchat
      t.string :instagram

      t.timestamps
    end
  end
end
