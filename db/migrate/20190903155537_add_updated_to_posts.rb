class AddUpdatedToPosts < ActiveRecord::Migration[6.0]
  def change
    add_column :posts, :updated, :bool, default: false
  end
end
