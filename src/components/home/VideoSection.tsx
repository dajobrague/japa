import React, { useState, useRef, useEffect } from 'react';
import AnimationWrapper from '../ui/AnimationWrapper';
import Pill from '../ui/Pill';
import { Play, Pause } from 'lucide-react';

interface VideoSectionProps {
  videoUrl: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({ videoUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Set up the video to load the first frame as thumbnail
  useEffect(() => {
    if (videoRef.current) {
      // Set preload to metadata to load just enough to show the first frame
      videoRef.current.preload = "metadata";
      
      // When metadata is loaded, we can show the video
      const handleLoadedMetadata = () => {
        setIsLoaded(true);
        
        // Try to seek to 1 second to get a better thumbnail
        try {
          videoRef.current.currentTime = 1;
        } catch (e) {
          console.error("Could not set video time:", e);
        }
      };
      
      videoRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
      
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
        }
      };
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 -mt-32 -mr-32 w-64 h-64 bg-japa-orange/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 -mb-32 -ml-32 w-64 h-64 bg-japa-blue/5 rounded-full blur-3xl -z-10" />
      
      <div className="container-wide px-4 md:px-6">
        <div className="text-center mb-10 md:mb-12">
          <AnimationWrapper animation="fade-up" delay={100}>
            <Pill className="inline-flex mb-3">See JAPA in Action</Pill>
            <h2 className="text-balance font-display font-bold text-japa-slate text-3xl sm:text-4xl md:text-5xl mb-3 md:mb-4 leading-tight mx-auto max-w-3xl">
              Experience <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-japa-orange to-japa-blue animate-gradient bg-size-200">Smart Parking</span>
            </h2>
            <p className="text-japa-slate/80 text-lg md:text-xl mb-4 md:mb-6 max-w-2xl mx-auto">
              Watch how JAPA transforms parking management with our innovative solutions
            </p>
          </AnimationWrapper>
        </div>
        
        <AnimationWrapper animation="fade-up" delay={200}>
          <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-xl border border-gray-100/50 max-w-4xl mx-auto">
            {/* Video container with 16:9 aspect ratio */}
            <div className="relative pt-[56.25%]">
              <video 
                ref={videoRef}
                className="absolute top-0 left-0 w-full h-full object-cover"
                controls={isPlaying}
                muted
                loop
                playsInline
                preload="metadata"
                poster={`${videoUrl}#t=1`}
                onEnded={handleVideoEnded}
              >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Play button overlay - only visible when video is not playing */}
              {!isPlaying && (
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer transition-opacity hover:bg-black/40"
                  onClick={togglePlay}
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-japa-orange/90 flex items-center justify-center shadow-lg transform transition-transform hover:scale-110">
                    <Play className="w-10 h-10 md:w-12 md:h-12 text-white ml-1" />
                  </div>
                </div>
              )}
              
              {/* Pause button overlay - only visible when video is playing */}
              {isPlaying && (
                <div 
                  className="absolute inset-0 flex items-center justify-center cursor-pointer opacity-0 hover:opacity-100 transition-opacity"
                  onClick={togglePlay}
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-black/50 flex items-center justify-center">
                    <Pause className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  );
};

export default VideoSection; 