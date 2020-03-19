class CreateRounds < ActiveRecord::Migration[6.0]
  def change
    create_table :rounds do |t|
      t.primary_key :id
      t.integer :event_id
      t.integer :number

      t.timestamps
    end
  end
end
