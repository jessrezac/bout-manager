class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.datetime :datetime
      t.string :location
      t.integer :season_id

      t.timestamps
    end
  end
end
