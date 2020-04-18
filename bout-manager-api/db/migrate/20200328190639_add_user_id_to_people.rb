class AddUserIdToPeople < ActiveRecord::Migration[6.0]
  def change
    add_column :people, :user_id, :integer
  end
end
