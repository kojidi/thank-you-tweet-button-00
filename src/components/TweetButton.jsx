import React from "react";
import "../index.css";

function generateStarIcons(rating) {
    const megaStars = ` 􀀀􀀀􀀀􀀀􀀀 x ${Math.round(rating / 5)}`;
    let stars = "";

    for (let i = 0; i < rating; i++) {
        stars += "􀀀";
    }

    return rating > 10 ? megaStars : stars;
}

export function TweetButton(props) {
    const tweetURL = `https://twitter.com/intent/tweet?
    text=Thank+you,+%40oluwatobiss.+Your+book+helped+me+create,+test,+
    and+publish+${props.number && props.number > 1 ? props.number : "an"
        }+NPM+${props.number && props.number > 1 ? "packages" : "package"
        }.%0A%0ABook's+Rating:+${props.rating}-
    star+rating!+${generateStarIcons(props.rating)}+%0A%0ACreating%20N
    PM%20Package:%20React%20JavaScript%20Guide%0A%0Ahttps%3A%
    2F%2Famzn.to/4aUJ3Qg`;
    return props.rating ? (
        <section className="tweet-btn-container">
            <a
                className="tweet-button"
                href={tweetURL}
                target="_blank"
            >
                Send a thank you tweet
            </a>
        </section>
    ) : (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "30px",
            }}
        >
            <p
                style={{
                    backgroundColor: "#DC3545",
                    color: "#fff",
                    width: "35%",
                    borderRadius: "5px",
                    padding: "15px 20px",
                }}
            >
                􀀀 Error: Props 'rating' is missing in 'TweetButtonProps'.
            </p>
        </div>
    );
}