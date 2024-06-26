"use client"
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";

const isSafari = () => {
  const ua = navigator.userAgent.toLowerCase();
  return ua.indexOf("safari") > -1 && ua.indexOf("chrome") < 0;
};

const mainVideo ="/videos/ocean-and-canal-2.mp4";

const VideoAutoplayOcean = (n) => {
    const videoParentRef = useRef();
    const [shouldUseImage, setShouldUseImage] = useState(false);
    useEffect(() => {
      // check if user agent is safari and we have the ref to the container <div />
      if (isSafari() && videoParentRef.current) {
        // obtain reference to the video element
        const player = videoParentRef.current.children[0];
  
        // if the reference to video player has been obtained
        if (player) {
          // set the video attributes using javascript as per the
          // webkit Policy
          player.controls = false;
          player.playsinline = true;
          player.muted = true;
          player.setAttribute("muted", ""); // leave no stones unturned :)
          player.autoplay = true;
  
          // Let's wait for an event loop tick and be async.
          setTimeout(() => {
            // player.play() might return a promise but it's not guaranteed crossbrowser.
            const promise = player.play();
            // let's play safe to ensure that if we do have a promise
            if (promise.then) {
              promise
                .then(() => {})
                .catch(() => {
                  // if promise fails, hide the video and fallback to <img> tag
                  videoParentRef.current.style.display = "none";
                  setShouldUseImage(true);
                });
            }
          }, 0);
        }
      }
    }, []);

    return shouldUseImage ? (
        <Image src={mainVideo} alt="Muted Video" width={1920} height={1080}/>
      ) : (
        <div className="w-full h-[100dvh]"
          ref={videoParentRef}
          dangerouslySetInnerHTML={{
            __html: `
            <video
              loop
              muted
              autoplay
              playsinline
              preload="metadata"
              style="object-fit:cover; height:100%; width:100%"
            >
            <source src="${mainVideo}" type="video/mp4" />
            </video>`
          }}
        />
      );
}

export default VideoAutoplayOcean