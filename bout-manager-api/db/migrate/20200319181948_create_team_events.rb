class CreateTeamEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :team_events do |t|
      t.primary_key :id
      t.integer :team_id
      t.integer :event_id
      t.integer :rank
      t.float :total_score
      t.float :score_difference

      t.timestamps
    end
  end
end
