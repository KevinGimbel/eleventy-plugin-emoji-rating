# eleventy-plugin-emoji-rating
> Display accessible ratings using emoji 

<!-- BEGIN mktoc -->
- [Usage](#usage)
  - [Config Options](#config-options)
  - [Config Examples](#config-examples)
- [Examples](#examples)
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
    emoji: "🙉"
    emoji_inactive: "🙈"
  });
};
```

## Examples

```txt
{% rating "3" %} => 3/5 ⭐️⭐️⭐️

{% rating "4" "🍋" "🍊" "7" %} => 4/7 🍋🍋🍋🍋🍊🍊🍊

{% rating "5" "🤦‍♀️" %} => 5/5 🤦‍♀️🤦‍♀️🤦‍♀️🤦‍♀️🤦‍♀️

{% rating "2" "🙉" "🙈" %}
```
