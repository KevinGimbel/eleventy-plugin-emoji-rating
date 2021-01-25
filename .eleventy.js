// {% rating "4" "🍋" "7" %} => "4/7 🍋🍋🍋🍋"

module.exports = (eleventyConfig, options) => {
  const defaults = {
    max_rating: 5,
    emoji: "⭐️",
    emoji_inactive: "",
    extra_classes: "",
    htmlTag: "span",
    aria_label: "Rating: $rating of $max_rating",
  };

  eleventyConfig.addShortcode("rating", (rating, customEmoji, emojiInactive, maxRating) => {
    let { htmlTag, emoji, extra_classes, aria_label, max_rating, emoji_inactive } = {
      ...defaults,
      ...options,
    }

    let m_rating = maxRating ? maxRating : max_rating;
    let m_emoji = customEmoji ? customEmoji : emoji;
    let m_emoji_inactive = emojiInactive ? emojiInactive : emoji_inactive;
    let label = aria_label.replace('$rating', rating).replace('$max_rating', m_rating)
    return `<${htmlTag} class="rating ${extra_classes}" role="img" aria-label="${label}">${rating}/${m_rating} ${("<span class='rating--icon' aria-hidden='true'>" + m_emoji + "</span>").repeat(rating)}${("<span class='rating--icon-inactive' aria-hidden='true'>" + m_emoji_inactive + "</span>").repeat(m_rating - rating)}</${htmlTag}>`
  });
};
