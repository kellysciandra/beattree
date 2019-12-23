class Beat < ApplicationRecord
    belongs_to :artist
    
    has_attached_file :mp3
    validates_attachment :mp3, presence: true
    do_not_validate_attachment_file_type :mp3
end
