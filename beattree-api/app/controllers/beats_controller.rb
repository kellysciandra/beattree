class BeatsController < ApplicationController

    def beat_params
        params.require(:beat).permit(:title, :description, :mp3)
    end
end
