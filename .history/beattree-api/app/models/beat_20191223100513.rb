class Beat < ApplicationRecord
    has_attached_file :mp3
    validates_attachment :mp3, presence: true
    do_not_validate_attachment_file_type :picture
end
