class CreateSeasons < ActiveRecord::Migration[6.0]
  def change
    create_table :seasons do |t|
      t.primary_key :id
      t.integer :year
      t.integer :district_id

      t.timestamps
    end
  end
end
