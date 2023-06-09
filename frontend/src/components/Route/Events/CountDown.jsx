import React, { useEffect, useState } from "react";

const CountDown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  function calculateTimeLeft(){
    const difference  = + new Date('2023-6-9') - +new Date();
    let timeLeft = {}

    if(difference > 0){
        timeLeft = {
            days: Math.floor(difference /(1000 * 60 *60 *24)),
            hours: Math.floor((difference /(1000 * 60 *60)) % 24),
            minutes: Math.floor((difference / 1000 * 60)% 60 ),
            seconds: Math.floor((difference / 1000) % 60),

        };
    }
  }
  return <div>CountDown</div>;
};

export default CountDown;
