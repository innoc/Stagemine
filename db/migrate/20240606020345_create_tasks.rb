class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks, force: true do |t|
      t.integer :admin_id
      t.string  :title
      t.text    :description 
      t.text    :video_url
      t.datetime :start_date
      t.datetime :end_date
      t.string   :task_type
      t.string  :status, :default=>"active"
      t.timestamps
    end
  end
end
