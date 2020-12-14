class CreateDestinations < ActiveRecord::Migration[6.0]
  def change
    create_table :destinations do |t|
      t.integer :goal_id
      t.string :location
      t.text :description
      t.string :date_traveled
      t.boolean :completed

      t.timestamps
    end
  end
end
