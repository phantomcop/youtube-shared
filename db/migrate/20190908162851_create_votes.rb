class CreateVotes < ActiveRecord::Migration[6.0]
  def change
    create_table :votes do |t|
      t.integer :kind
      t.references :user, null: false, foreign_key: true
      t.references :post, null: false, foreign_key: true
      t.index %i[post_id user_id], unique: true
      t.timestamps
    end
  end
end
