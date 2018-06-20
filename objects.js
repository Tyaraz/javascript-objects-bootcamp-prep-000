var playlist = {
  artistName: 'Britney',
  songTitle: 'Toxic'
}

function updatePlaylist(playlist, artistName, songTitle) {
  return playlist;
}

updatePlaylist(playlist, 'Adele', 'Hello')

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}

