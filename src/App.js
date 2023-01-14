import React, { useState } from 'react';
import Button from './components/Button/Button';
import TrackList from './components/TrackList';
import './styles/App.css';

function App() {
  const tracks = [
    {author: 'Валентин Стрыкало', track: 'Мама я гей', duration: '2m 54s'},
    {author: 'Валентин Стрыкало', track: 'Ялта', duration: '4m 12s'},
    {author: 'Валентин Стрыкало', track: 'Ялта', duration: '10m 12s'},
    {author: 'Валентин Стрыкало', track: 'Ялта', duration: '1m 12s'},
    {author: 'Валентин Стрыкало', track: 'Ялта', duration: '2m 48s'},
  ];

  const [posts, setPosts] = useState(tracks);
  const key = 'duration';

  let newPosts = posts.map((post) => ({
    ...post,
    duration: changePostDuration(post.duration),
  }));

  function changePostDuration(duration) {
    if (typeof duration === 'string'){
      let currentDuration = duration.split(' ');
      return parseInt(currentDuration[0]) * 60 + parseInt(currentDuration[1]);
    }else{
      return duration
    }
  }

  const sortUp = () => {
    console.log('1');
    setPosts([...newPosts].sort((post1, post2) => post1[key] - post2[key]))
  };

  const sortDown = () => {
    console.log('2');

    setPosts([...newPosts].sort((post1, post2) => post1[key] - post2[key]).reverse())
  };

  return (
    <div className='App'>
      <div className='tracks'>
        <div className='container'>
          <h1 className='tracksTitle'>Сортировка</h1>

          <Button
            options={[
              { click: sortUp, text: 'По возрастанию' },
              { click: sortDown, text: 'По убыванию' },
            ]}
          />

          <TrackList posts={newPosts} />
        </div>
      </div>
    </div>
  );
}


export default App;
