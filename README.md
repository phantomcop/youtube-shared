# [Youtube shared](https://youtube-shared.herokuapp.com)
- Install
  - Install rails following [here](https://gorails.com/setup/osx/10.14-mojave)
  - Get your GOOGLE_API_KEY [here](https://console.cloud.google.com/) and enable [Youtube API](https://console.cloud.google.com/apis/api/youtube.googleapis.com/overview?project=ytshared) or ping me to get the API. Save it to `.env` file
  ```sh
  git clone git@github.com:dthtien/youtube-shared.git
  cd youtube-shared
  bundle
  rails db:setup db:migrate
  rails s
  ```
  - Open [localhost:3000](localhost:3000)

  - For test
  ```
  rails test
  ```
## App technical
- Rails 6
- PostgreSQL
- Action cable
- Sidekiq
