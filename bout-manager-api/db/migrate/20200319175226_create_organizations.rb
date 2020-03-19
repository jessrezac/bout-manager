class CreateOrganizations < ActiveRecord::Migration[6.0]
  def change
    create_table :organizations do |t|
      t.primary_key :id
      t.string :name
      t.integer :type

      t.timestamps
    end
  end
end
