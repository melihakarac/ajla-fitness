import { useEffect, useRef, useState } from 'react';

const useCarousel = ({ length = 0, autoInterval = 5000, resumeDelay = 10000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);
  const resumeTimeoutRef = useRef(null);

  const clearTimers = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = null;
    }
  };

  const startResumeTimer = () => {
    clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, resumeDelay);
  };

  useEffect(() => {
    if (length === 0 || isPaused) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      return undefined;
    }

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % length);
    }, autoInterval);

    return () => clearInterval(intervalRef.current);
  }, [length, isPaused, autoInterval]);

  useEffect(() => () => clearTimers(), []);

  const goTo = (index) => {
    if (length === 0) return;
    setCurrentIndex(index % length);
    setIsPaused(true);
    startResumeTimer();
  };

  const goPrevious = () => {
    if (length === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex - 1 + length) % length);
    setIsPaused(true);
    startResumeTimer();
  };

  const goNext = () => {
    if (length === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % length);
    setIsPaused(true);
    startResumeTimer();
  };

  const pause = () => {
    setIsPaused(true);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    clearTimeout(resumeTimeoutRef.current);
  };

  const resume = () => {
    clearTimeout(resumeTimeoutRef.current);
    setIsPaused(false);
  };

  return {
    currentIndex,
    isPaused,
    goTo,
    goPrevious,
    goNext,
    pause,
    resume
  };
};

export default useCarousel;
