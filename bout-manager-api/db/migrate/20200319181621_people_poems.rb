class PeoplePoems < ActiveRecord::Migration[6.0]
  def change
    create_table :people_poems, id: false do |t|
      t.primary_key :id
      t.integer :person_id
      t.integer :poem_id

      t.timestamps
    end

    add_index :people_poems, :person_id
    add_index :people_poems, :poem_id
  end
end
