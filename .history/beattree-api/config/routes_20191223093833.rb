Rails.application.routes.draw do
    resources :artists
    resources :producers
    resources :favorites
    resources :beats
end
