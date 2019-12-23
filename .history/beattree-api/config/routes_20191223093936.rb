Rails.application.routes.draw do
    resources :artists, :producers, :beats, :favorites
end
