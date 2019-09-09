module ApplicationHelper
  def flash_message
    return unless flash.to_h.slice('error', 'success').present?

    content_tag :div, class: 'message' do
      flash.map do |key, msg|
        key = 'danger' if key == 'error'
        content_tag :p, msg, id: key, class: "flash has-text-#{key}".freeze
      end.join.html_safe
    end
  end
end
