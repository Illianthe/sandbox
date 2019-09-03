class Video < ApplicationRecord
  has_one :video_options

  delegate :width, :width=, :to => :video_options
end
