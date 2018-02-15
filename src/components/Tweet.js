import React from 'react'

const Tweet = (props) => {
  let img;
  let body = props.text;
  if (props.entities.media) {
    img = <img src={props.entities.media[0].media_url} />
    body = props.text.replace(props.entities.media[0].display_url, "");
  }

 let date = new Date(parseInt(props.timestamp_ms)); //thanks for Jake, Brett, and Pat C. for helping me out with this, among other things.
 let monthNames = [
    "Jan", "Feb", "Mar",
    "Apr", "May", "Jun", "Jul",
    "Aug", "Sep", "Oct",
    "Nov", "Dec"
  ];
  let day = date.getDate();
  let monthIndex = date.getMonth();
  date = monthNames[monthIndex] + ' ' + day;

 let handleReply = (event) => {
    alert("Reply");
  }
  let handleFavorite = (event) => {
    alert("Favorite");
  }
  let handleLike = (event) => {
    alert("Like");
  }
  let handleRetweet = (event) => {
    alert("Retweet");
  }
  let retweetClass = "fa fa-retweet icon"
  if (props.retweeted) {
    retweetClass += " green"
  }

  let likeClass = "fa fa-heart icon"
  if (props.favorited) {
    likeClass += " red"
  }

  let

  return(
    <div className="tweet">
      <div className="profile_picture">
        <img src={props.profile_image_url} />
      </div>
      <div className="body">
        <ul className="header">
          <li className="name">
          <li>{props.username}</li>
          <li2>@{props.screen_name}</li2>
          <li3>&nbsp;•<span className="date">{date}</span></li3>
          </li>
        </ul>
        <div className="tweet_body">
          {body}
          {img}
        </div>
        <ul className="footer">
        <li onClick={handleReply}><i1 className="fa fa-reply"></i1></li>
          <li onClick={handleRetweet}>
            <i2 className={retweetClass}></i2>
            <i className="retweet_numbers">{props.retweet_count}</i>
          </li>
          <li onClick={handleLike}>
            <i3 className={likeClass}></i3>
            <i className="favorite_numbers"> {props.favorite_count}</i>
          </li>
          <li onClick={handleFavorite}>
            <i4 className="fa fa-ellipsis-h"></i4>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tweet;
