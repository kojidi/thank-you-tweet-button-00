import React from "react";
import "./index.css";

export function TweetButton() {
    const tweetURL = "https://hamidrajabi.com";
    
    return (
        <div className="tweet-btn-container">
            <a className="tweet-button" href={tweetURL} target="_blank">
                Send a thank you tweet
            </a>
        </div>
    );
}