import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const currentTimePlayer = localStorage.getItem('videoplayer-current-time');

//Create a function to keep track of the current playback time

player
  .setCurrentTime(currentTimePlayer)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

//Create a throttled function to keep track of the current playback time

const onPlay = e => {
  localStorage.setItem('videoplayer-current-time', e.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

// Logging title
player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
