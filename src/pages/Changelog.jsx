import React, { useState, useRef, useEffect } from 'react';
import { toast } from 'react-toastify';

export const Changelog = () => {
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);

  const [visibleVideo, setVisibleVideo] = useState(1);
  const [videosLoaded, setVideosLoaded] = useState(false);

  const handleVideo = () => {
    toast.success('Riego activado');

    if (visibleVideo === 1) {
      setVisibleVideo(2);
      video2Ref.current?.play();
      video1Ref.current?.pause();
    } else {
      setVisibleVideo(1);
      video1Ref.current?.play();
      video2Ref.current?.pause();
    }
  };

  useEffect(() => {
    const loadVideos = async () => {
      try {
        // Cargar ambos videos en paralelo
        await Promise.all([
          video1Ref.current?.play(),
          video1Ref.current?.pause(),
          video2Ref.current?.play(),
          video2Ref.current?.pause(),
        ]);

        setVideosLoaded(true);
      } catch (error) {
        console.error('Error loading videos:', error);
      }
    };

    loadVideos();
  }, []);

  return (
    <>
      <button className='hover:bg-emerald-600 bg-emerald-500 text-white py-3 px-10 rounded-lg' onClick={handleVideo}>
        button
      </button>
      {videosLoaded && (
        <div className='bg-black mt-5 w-3/5 relative overflow-hidden group'>
                <video
                  ref={video1Ref}
                  src={`/b99900a9-f6cd-4066-a3c8-617b2ef539ac/6249b79b-bf3d-457f-86b5-0d9563c4fd89.webm`}
                  autoPlay
                  loop
                  muted
                  className={`bg-black max-lg:h-[310px] max-xl:h-[314px] max-2xl:h-[388px] w-full object-center object-cover mx-auto rounded-lg group-hover transition-opacity duration-300 ${visibleVideo === 1 ? 'block' : 'hidden'
                    }`}
                ></video>
                <video
                  ref={video2Ref}
                  src={`/b99900a9-f6cd-4066-a3c8-617b2ef539ac/dd7e73d4-cd05-494a-ab0a-a24a7b0515f3.webm`}
                  autoPlay
                  loop
                  muted
                  className={`bg-black max-lg:h-[310px] max-xl:h-[314px] max-2xl:h-[388px] w-full object-center object-cover mx-auto rounded-lg group-hover transition-opacity duration-300 ${visibleVideo === 2 ? 'block' : 'hidden'
                    }`}
                ></video>
          <div className=' absolute bottom-0 top-0 w-full  opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end'>
            <div className='bg-black/20 flex justify-between items-center w-full px-3 select-none rounded-b-lg'>
              <div className='h-8 flex items-center justify-start gap-1'>
                <i className='fa-solid fa-fade fa-circle text-red-600 text-[8px]'></i>
                <p className='uppercase font-extrabold text-[10px] text-white'>live</p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
