import React from 'react';
import classes from './Track.module.css';

const TrackList = (props) => {
  return (
    <div className={classes.track}>
      <h2 className={classes.trackTitle}>{props.post.author}</h2>
      <p className={classes.trackName}>{props.post.track}</p>
      <p className={classes.trackTime}>{props.post.duration}</p>
    </div>
  );
};

export default TrackList;
