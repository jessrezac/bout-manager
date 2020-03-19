class CreateTeamPeople < ActiveRecord::Migration[6.0]
  def change
    create_table :team_people do |t|
      t.primary_key :id
      t.integer :team_id
      t.integer :people_id
      t.integer :role

      t.timestamps
    end
  end
end
