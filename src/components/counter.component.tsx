import {useEffect, useState} from "react";
import DatesService from "../services/Dates.service.ts";
import EventConfig from "../config/event.config.ts";
import type {TimeLeftType} from "../types/Timeleft.type.ts";

const targetDate = EventConfig.targetDate; // Replace with your target date

export default function Counter() {

    const [timeLeft, setTimeLeft] = useState<TimeLeftType>(() => DatesService.calculateTimeLeft(targetDate));

    useEffect(() => {
        // Set up an interval to update the counter every second
        const timer = setInterval(() => {
            const updatedTime = DatesService.calculateTimeLeft(targetDate);
            setTimeLeft(updatedTime);

            // Clear interval if countdown hits zero
            if (updatedTime.total <= 0) {
                clearInterval(timer);
            }
        }, 1000);

        // Clean up the interval on component unmount to prevent memory leaks
        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className="simply-countdown simply-countdown-one">
            <div className="simply-section simply-days-section">
                <div><span className="simply-amount">{timeLeft.days}</span><span
                    className="simply-word">days</span></div>
            </div>
            <div className="simply-section simply-hours-section">
                <div><span className="simply-amount">{timeLeft.hours}</span><span
                    className="simply-word">hours</span></div>
            </div>
            <div className="simply-section simply-minutes-section">
                <div><span className="simply-amount">{timeLeft.minutes}</span><span
                    className="simply-word">minutes</span></div>
            </div>
            {/*<div className="simply-section simply-seconds-section">*/}
            {/*    <div><span className="simply-amount">{timeLeft.seconds}</span><span*/}
            {/*        className="simply-word">seconds</span></div>*/}
            {/*</div>*/}
        </div>
    );
}