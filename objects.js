const playlist = {
  Britney:'Toxic',
  Beyonce:'Single'
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName]=songTitle
  return playlist
}

//updatePlaylist(playlist, 'Adele', 'Hello')

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}

