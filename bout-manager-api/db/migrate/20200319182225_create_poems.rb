class CreatePoems < ActiveRecord::Migration[6.0]
  def change
    create_table :poems do |t|
      t.integer :team_id
      t.integer :round_id
      t.string :title
      t.time :time
      t.float :adjusted_score
      t.float :cumulative_score
      t.float :penalty
      t.integer :order

      t.timestamps
    end
  end
end
