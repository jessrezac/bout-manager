class CreateTeams < ActiveRecord::Migration[6.0]
  def change
    create_table :teams do |t|
      t.primary_key :id
      t.integer :organization_id
      t.integer :season_id
      t.integer :total_rank
      t.float :total_score
      t.float :total_score_difference

      t.timestamps
    end
  end
end
