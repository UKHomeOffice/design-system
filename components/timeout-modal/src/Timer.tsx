import { FC, createElement as h, useState, useEffect, useRef } from 'react';
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
    let formattedTimer = timer < 61 ? Math.ceil(timer / 20) * 20 : Math.ceil(timer / 60);
    const interval = useRef(null);

    useEffect(() => {
        if(runTimer) interval.current = setInterval(() => setTimer((timer) => timer - 1), 1000);
        else clearInterval(interval.current);
        return () => clearInterval(interval.current);
    }, [runTimer])

    if(runTimer && timer == 0) {
        clearInterval(interval.current);
        onTimeout();
    }

    return (
      <span {...attrs}>{formattedTimer} {timer <= 60 ? "seconds" : formattedTimer == 1 ? "minute" : "minutes"}</span>
    );
};
