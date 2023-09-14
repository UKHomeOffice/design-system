import { FC, createElement as h, useState, useEffect } from 'react';
import { StandardProps } from '@not-govuk/component-helpers';

export type TimerProps = StandardProps & {
    /** Timeout starting value in seconds */
    timerFrom: number
  };

export const Timer: FC<TimerProps> = ({
    timerFrom,
    ...attrs
}) => {
    const [runTimer, setRunTimer] = useState(true)
    const [timer, setTimer] = useState(timerFrom);
    const [formattedTimer, setFormattedTimer] = useState(Math.floor(timer / 60));

    useEffect(() => {
      let interval;
      if(runTimer) {
        interval = setInterval(() => {
          setTimer((timer) => timer - 1);
        }, 1000);
      } else {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [runTimer])
    
    useEffect(() => {
      if(timer > 60) {
        if(timer % 60 == 0) {
          setFormattedTimer(Math.round(timer / 60));
        }
      } else {
        if([60,40,20,0].includes(timer)) {
          setFormattedTimer(timer);
          if(timer == 0) {
            setRunTimer(false);
          }
        }
      }
    }, [timer])

    useEffect(() => {
      return () => {
        setRunTimer(false);
      };
    }, []);

    return (
      <span {...attrs}>{formattedTimer} {timer <= 60 ? "seconds" : formattedTimer == 1 ? "minute" : "minutes"}</span>
    );
};