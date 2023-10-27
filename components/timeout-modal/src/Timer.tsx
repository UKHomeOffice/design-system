import { FC, createElement as h, useState, useEffect } from 'react';
import { StandardProps } from '@not-govuk/component-helpers';

export type TimerProps = StandardProps & {
    /** Timeout starting value in seconds */
    timerFrom: number,
    /** Function called when timeout timer ends */
    onTimeout: () => void
  };

export const Timer: FC<TimerProps> = ({
    timerFrom,
    onTimeout,
    ...attrs
}) => {
    const [runTimer, setRunTimer] = useState(true)
    const [timer, setTimer] = useState(timerFrom);
    let formattedTimer = timer < 60 ? Math.ceil(timer / 20) * 20 : Math.ceil(timer / 60);

    useEffect(() => {
        let interval;
        if(runTimer) {
            interval = setInterval(() => setTimer((timer) => timer - 1), 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [runTimer])

    if(runTimer) {
        if(timer > 60) {
            if(timer % 60 == 0) {
                formattedTimer = Math.round(timer / 60);
            }
        } else {
            if([60,40,20,0].includes(timer)) {
                formattedTimer = timer;
                if(timer == 0) {
                    setRunTimer(false);
                    onTimeout;
                }
            }
        }
    }

    console.log(timer);

    return (
      <span {...attrs}>{formattedTimer} {timer <= 60 ? "seconds" : formattedTimer == 1 ? "minute" : "minutes"}</span>
    );
};
