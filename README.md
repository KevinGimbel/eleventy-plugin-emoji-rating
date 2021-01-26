# eleventy-plugin-emoji-rating
> Display accessible ratings using emoji 

<!-- BEGIN mktoc -->
- [Usage](#usage)
  - [Config Options](#config-options)
  - [Config Examples](#config-examples)
- [Examples](#examples)
  - [What makes this accessible?](#what-makes-this-accessible)
  - [More examples](#more-examples)
<!-- END mktoc -->

## Usage

Install via npm:

```bash
npm install @kevingimbel/eleventy-plugin-emoji-rating
```

Then, include it in your `.eleventy.js` config file:

```js
const emojiRating = require("@kevingimbel/eleventy-plugin-emoji-rating");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(emojiRating);
};
```
## Config
### Config Options

Global config options, set in `eleventy.js`.

| Option      | Type | Default       | Description | 
| ----------- | ---- | ------------- | ----------- | 
| `max_rating` | Number | 5 | maximum a rating can be. 5 would mean "x of 5 stars" where 5 is the best. | 
| `emoji` | String | "⭐️" | Emoji to display | 
| `emoji_inactive` | String | / | Emoji to use for inactive slots (See examples) | 
| `extra_classes` | String | / | extra CSS classes for the wrapping element | 
| `htmlTag` | String | `span` | The wrapping element | 
| `aria_label` | String | `Rating: $rating of $max_rating` | The label for screen readers, should contain all important info. `$rating` will be replaced with the rating, `$max_rating` with the maximum rating as defined inline or in plugin config | 

### Config Examples

```js
const emojiRating = require("@kevingimbel/eleventy-plugin-emoji-rating");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(emojiRating, {
    max_rating: 10,
    htmlTag: "div",
    emoji: "🙉",
    emoji_inactive: "🙈"
  });
};
```

## Examples

The plugin provides a shortcode that creates HTML. 

```html
<!-- shortcode in Markdown file -->
{% rating "3" %}

<!-- rendered HTML -->
<span class="rating " role="img" aria-label="Rating: 3 of 5">3/5 <span class="rating--icon" aria-hidden="true">⭐️</span><span class="rating--icon" aria-hidden="true">⭐️</span><span class="rating--icon" aria-hidden="true">⭐️</span><span class="rating--icon-inactive" aria-hidden="true"></span><span class="rating--icon-inactive" aria-hidden="true"></span></span>
```

### What makes this accessible?

The generated HTML is fully accessible to screen readers. The `aria-label` is read out and gives a better info than a text string `3/5 ⭐️⭐️⭐️` would, which is read aloud like "Three slash five emoji-star emoji-star emoji-star", while the accessible one is read out as "Rating: 3 of 5", and the emoji are ignored (`aria-hidden`) because they do not give any additional info. With a custom `aria_label` set the emoji could even be represented in words:

```js
const emojiRating = require("@kevingimbel/eleventy-plugin-emoji-rating");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(emojiRating, {
    aria_label: "Rating: $rating of $max_rating stars"
  });
};
```

### More examples

More examples with custom options.

```html

{% rating "4" "🍋" "🍊" "7" %} => 4/7 🍋🍋🍋🍋🍊🍊🍊

{% rating "5" "🤦‍♀️" %} => 5/5 🤦‍♀️🤦‍♀️🤦‍♀️🤦‍♀️🤦‍♀️

{% rating "2" "🙉" "🙈" %} =? 2/5 🙉🙉🙈🙈🙈
```
