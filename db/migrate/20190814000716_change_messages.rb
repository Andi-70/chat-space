class ChangeMessages < ActiveRecord::Migration[5.0]
  def change
    change_table :messages do |t|
      t.string :image
      t.references :group, foreign_key: true
      t.references :user, foreign_key: true
    end
  end
end
