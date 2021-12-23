import React, { useState } from "react";
//   import React from "react";
import './VideoPlayer.css';
import '@mux-elements/mux-video';

export default function VideoPlayer () {
	 const [viewCount, setViewCount] = useState(0);
         const [viewerCount, setViewerCount] = useState(0);
    return (
    
    <div className="video-container">
        <div className="video-overlay">
            {"Views: " + viewCount+"  " }
            {"Unique Viewers: " + viewerCount}
        </div>
        <mux-video
             controls
             playback-id="qAXUv6502i01P5PebyhVA8wdX1LfZsjpj5xYsEiu1NIP00"
             env-key="453etipsmjhqdo6h08udt5u1n"
             stream-type="vod"
             style={{ width: "100%", maxWidth: "500px" }}
        />
        
      </div>
    );
}
