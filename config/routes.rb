Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  resource :session

  root 'welcome#welcome'
  get '/stage' =>"stage#stage", :as=>"stage"
  get '/vid_display' => "stage#vid_display", :as=>"video"
  match '/create_vid' => "stage#create_vid", :as=>"create_vid", via: :all
  match '/create_word' => "stage#create_word", :as=>"create_word", via: :all
  match '/create_image' => "stage#create_image", :as=>"pictures", via: :all
  match '/create_comment' => "comment#create_comment", :as=>"comment", via: :all
  match '/image_display' => "stage#image_display", :as=>"picture_display", via: :all
  match '/all_comment' => 'comment#all_comment', :as=>'all_comment', via: :all
  match '/create_cheer' => 'point_allocation#create_cheer', :as=>'point', via: :all
  match '/user_avatar'=>"edit#user_avatar", :as=>'avatar', via: :all  
  match '/portfolio'=>"portfolio#portfolio", :as=>'portfolio', via: :all
  match '/notification'=>"notification#notification", :as=>'notification', via: :all
  match '/task'=>'task#task', :as=>'task', via: :all
  match '/task_info'=>"task#task_info", :as=>'task_info', via: :all
  match '/task_enroll'=>"task#task_enroll", :as=>'enroll', via: :all
  match '/task_disenroll'=>"task#task_disenroll", :as=>'disenroll', via: :all
  match '/task_checker'=>"task#task_checker", :as=>'checker', via: :all
  match '/hidden_task'=>"stage#hidden_task", :as=>'hidden_task', via: :all
  match '/create_friendship'=>"friendship#create_friendship", :as=>'add_performer', via: :all
  match '/admin'=>"admin#admin", :as=>'admin', via: :all
  match '/create_season'=>"admin#create_season", :as=>'create_season', via: :all
  match '/enroll_league'=>"season#enroll_league", :as=>'league_enroll', via: :all
  match '/disenroll_league'=>"season#disenroll_league", :as=>'league_disenroll', via: :all
  match '/see_all'=>"season#see_all", :as=>'see_all', via: :all
  match '/season_checker'=>"season#season_checker", :as=>'season_checker', via: :all
  match '/create_history'=>"admin#create_history", :as=>'create_history', via: :all
  match '/league_winner'=>"admin#league_winner", :as=>'league_winner', via: :all
  match '/login'=>"welcome#login",:as=>'login', via: :all
  match '/create'=>"users#create",:as=>'users', via: :all
  match '/alter'=>"edit#alter",:as=>'alter', via: :all
  match '/edit'=> 'edit#edit', :as=>'edit', via: :all
  match '/interest'=>"interest#interest",:as=>'create_interest', via: :all
  match '/add_interest'=>"interest#add_interest",:as=>'add_interest', via: :all
  match '/destroy'=>"sessions#destroy", :as=>'destroy', via: :all
  match '/disconnect'=>"friendship#disconnect", :as=>'disconnect', via: :all
  match '/delete_feed'=>"stage#delete_feed", :as=>'delete_feed', via: :all
  match '/create_message'=>"message#create_message", :as=>'create_message', via: :all
  match '/message'=>"message#message", :as=>"message", via: :all
  match '/display_cheer'=>"point_allocation#display_cheer", :as=>"display_cheer", via: :all
  match '/league_detail'=>"season#league_detail", :as=>"league_detail", via: :all
  match '/start_season'=>"admin#start_season", :as=>"start_season", via: :all
  match '/audition_checker'=>"season#audition_checker", :as=>"audition_checker", via: :all
  match '/see_all_friendship'=>"friendship#see_all_friendship", :as=>"see_all_friendship", via: :all
  match '/search_suggestions'=>"users#search_suggestions", :as=>"search_suggestions", via: :all
  match '/view_search'=>"users#view_search", :as=>"view_search", via: :all
  match '/badge'=>"badge#badge", :as=>"badge", via: :all
  match '/admin_task_checker'=>"admin#admin_task_checker", :as=>"admin_task_checker", via: :all
  

  resources :users
  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
