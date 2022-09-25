import React from "react";
function PlaySong(song){
const songToUpdate = song;
console.log(songToUpdate)
console.log(songToUpdate.song.src)
return (
<div>
    {
        <div className="container">
            <div className="mx-auto col-lg-3 col-md-3 col-sm-4 col-xs-6">
            <audio controls>
                <source src={songToUpdate.song.src} type="audio/mpeg" />                
            </audio>
            </div>
        </div>
    
    }

</div> 

)
}
export default PlaySong;