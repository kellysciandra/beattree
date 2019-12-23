class ArtistsController < ApplicationController
    def index 
        @artists = Artist.all
    end 

    def new 
        @artist = Artist.new 
    end 

    def show
        artist = Artist.find_by(id: params[:id])
        if artist 
            render json: artist 
        else 
            render json: {message: 'artist not found'}
    end

    def create 
        artist = Artist.new(artist_params)
        if artist.save
            render json: artist 
        else 
            render json: {message: 'artist not found'}
    end 

    private 

    def artist_params 
        params.require(:artist).permin(:name, :email, :city, :state)
    end 

end
