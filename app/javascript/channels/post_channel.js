import consumer from "./consumer"
import $ from 'jquery';

const elements = {
  postList: '#js-page__home-posts'
}

consumer.subscriptions.create("PostChannel", {
  connected() {
    console.log('connected')
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    console.log('received')
    if (data.status === 'success') {
      $(elements.postList).prepend(data.post)
    } else {
      console.log(data.message)
    }
  }
});
