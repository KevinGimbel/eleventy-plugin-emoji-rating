---
layout: base.njk
---

# Plugin Test Page

This page shows the `rating` shortcode in action!


## Default options

{% rating "3" %}

## Custom options

### Custom inactive emoji
{% rating "4" "🍋" "🍊" %}

### Custom inactive and custom length
{% rating "4" "🍋" "🍊" "7" %}

{% rating "5" "🤷‍♀️" %}

{% rating "2" "🙉" "🙈" %}