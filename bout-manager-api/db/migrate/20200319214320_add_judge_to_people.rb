class AddJudgeToPeople < ActiveRecord::Migration[6.0]
  def change
    add_column :people, :judge, :boolean
  end
end
