class ChangeOrganizationType < ActiveRecord::Migration[6.0]
  def change
    rename_column :organizations, :type, :org_type
    change_column :round_settings, :time_limit, :integer
    remove_column :round_settings, :float
  end
end
