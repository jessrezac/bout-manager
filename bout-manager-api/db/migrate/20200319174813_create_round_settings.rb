class CreateRoundSettings < ActiveRecord::Migration[6.0]
  def change
    create_table :round_settings do |t|
      t.primary_key :id
      t.integer :number
      t.string :time_limit
      t.string :float
      t.integer :min_poets
      t.integer :max_poets
      t.integer :district_id

      t.timestamps
    end
  end
end
