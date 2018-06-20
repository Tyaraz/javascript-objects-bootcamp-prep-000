var playlist = {
  Britney : "Toxic"
};


function updatePlaylist (playlist, artistName, songTitle){
  
 playlist[artistName]=songTitle;
  return playlist
  
}

updatePlaylist(playlist, Adele , "Hello");

function removeFromPlaylist (obj, key){
  
  playlist.Britney=[""];
  playlist.Sam=[""];
  playlist.Adele=[""];
  
  return obj
}

removeFromPlaylist ();