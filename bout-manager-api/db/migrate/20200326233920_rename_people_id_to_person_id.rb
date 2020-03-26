class RenamePeopleIdToPersonId < ActiveRecord::Migration[6.0]
  def change
    rename_column :scores, :people_id, :person_id
    rename_column :team_people, :people_id, :person_id
  end
end
