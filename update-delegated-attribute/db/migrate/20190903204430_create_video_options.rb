class CreateVideoOptions < ActiveRecord::Migration[6.0]
  def change
    create_table :video_options do |t|
      t.integer :width
      t.references :video
    end
  end
end
