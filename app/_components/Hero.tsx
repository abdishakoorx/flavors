import React from 'react';

function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 h-full w-full object-cover"
      >
        <source
          src="/hero-video.mp4"
          type="video/mp4"
        />
      </video>
      <div className="relative z-10 flex h-full w-full items-center justify-center text-white">
        <h1 className="text-4xl font-bold">Hero</h1>
      </div>
    </div>
  );
}

export default Hero;