require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Giga
  class Application < Rails::Application
    config.assets.initialize_on_precompile = false
    config.serve_static_assets = true
    config.assets.precompile += %w( *.css *.js )
    config.assets.precompile += %w(search)
    config.assets.precompile += %w(jquery) 
    config.assets.precompile += %w(jquery_ujs)
    config.assets.precompile += %w(rails) 
    config.assets.precompile += %w(turbolinks) 
    config.assets.precompile += %w(block) 
    config.assets.precompile += %w(facebox) 
    config.assets.precompile += %w(imagepop) 
    config.assets.precompile += %w(jquery-ui.min) 
    config.assets.precompile += %w(jquery.ddslick.min) 
    
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
    # Set Time.zone default to the specified zone and make Active Record auto-convert to this zone.
    # Run "rake -D time" for a list of tasks for finding time zone names. Default is UTC.
    # config.time_zone = 'Central Time (US & Canada)'
     # The default locale is :en and all translations from config/locales/*.rb,yml are auto loaded.
    # config.i18n.load_path += Dir[Rails.root.join('my', 'locales', '*.{rb,yml}').to_s]
    # config.i18n.default_locale = :de
  end
end
