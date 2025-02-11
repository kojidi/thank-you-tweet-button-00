import React from "react";
import "../index.css";

export function TweetButton(props) {
    const tweetURL = `https://twitter.com/intent/tweet? text=Thank+you,+%40oluwatobiss.+Your+book+helped+me+create,+test,+ and+publish+${props.number && props.number > 1 ? props.number : "an"}+NPM+${props.number && props.number > 1 ? "packages" : "package"}.%0A%0ACreating%20NPM%20Package:%20React%20JavaScript%20G
    uide%0A%0Ahttps%3A%2F%2Famzn.to/4aUJ3Qg`;

    return (
        <section className="tweet-btn-container">
            <a
                className="tweet-button"
                href={tweetURL}
                target="_blank"
            >
                Send a thank you tweet
            </a>
        </section>
    );
}