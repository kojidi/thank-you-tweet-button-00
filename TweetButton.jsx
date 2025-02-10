import React from "react";

export function TweetButton() {
    const tweetURL = "https://twitter.com/intent/tweet?text=Thank+you,+%";
    
    return (
        <div>
            <a href={tweetURL} target="_blank">
                Send a thank you tweet
            </a>
        </div>
    );
}