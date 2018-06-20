var playlist = {
  Britney:'Toxic';
  Beyonce:'Single Ladies';
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName]=song;
  return playlist
}

updatePlaylist(playlist, 'Adele', 'Hello')

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}

