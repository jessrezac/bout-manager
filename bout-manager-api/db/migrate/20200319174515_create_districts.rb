class CreateDistricts < ActiveRecord::Migration[6.0]
  def change
    create_table :districts do |t|
      t.primary_key :id
      t.string :name
      t.string :location
      t.float :time_penalty
      t.integer :time_penalty_grace_period
      t.integer :time_penalty_increment
      t.integer :min_team_size
      t.integer :max_team_size

      t.timestamps
    end
  end
end
