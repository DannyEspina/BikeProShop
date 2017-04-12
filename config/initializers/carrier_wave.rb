if Rails.env.production?
  CarrierWave.configure do |config|
    config.fog_credentials = {
      # Configuration for Amazon S3
      :provider              => 'AWS',
      :aws_access_key_id     => ENV['AKIAI2DDZMOWS4IUR3DA'],
      :aws_secret_access_key => ENV['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']
    }
    config.fog_directory     =  ENV['bikeproshop']
  end
end