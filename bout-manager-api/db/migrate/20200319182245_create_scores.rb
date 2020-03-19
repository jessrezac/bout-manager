class CreateScores < ActiveRecord::Migration[6.0]
  def change
    create_table :scores do |t|
      t.primary_key :id
      t.integer :poem_id
      t.float :score
      t.integer :people_id

      t.timestamps
    end
  end
end
