class AddIsActiveToTeams < ActiveRecord::Migration[6.0]
  def change
    add_column :teams, :is_active, :boolean, :default => false
  end
end
