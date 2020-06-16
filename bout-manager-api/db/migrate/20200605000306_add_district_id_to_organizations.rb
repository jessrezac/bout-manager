class AddDistrictIdToOrganizations < ActiveRecord::Migration[6.0]
  def change
    add_column :organizations, :district_id, :integer
  end
end
