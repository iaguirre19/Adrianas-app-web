import { useState, useEffect } from "react";

const OtpTimer = ({ initialSeconds, onTimerEnd }) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          clearInterval(intervalId);
          onTimerEnd();
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [initialSeconds, onTimerEnd]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <div className="otp-counting">
      {minutes < 10 ? `0${minutes}` : minutes}:
      {remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}
    </div>
  );
};

export default OtpTimer;
