import React from 'react';
import Track from './Track/Track';

const TrackList = ({ posts }) => {
  return (
    <div className='tracksList'>
      {posts.map((post) => (
        <Track post={post} />
      ))}
    </div>
  );
};

export default TrackList;
