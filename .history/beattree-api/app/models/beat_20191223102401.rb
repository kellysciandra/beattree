class Beat < ApplicationRecord
    has_attached_file :mp3
    validates_attachment :mp3, presence: true
    do_not_validate_attachment_file_type :mp3

    def beat_params
        params.require(:beat).permit(:title, :description, :mp3)
    end
end
