import type {TimeLeftType} from "../types/Timeleft.type.ts";

export default {
    calculateTimeLeft: (target:string): TimeLeftType => {
        // @ts-expect-error No actual error, but TypeScript doesn't know that target is a valid date string
        const total = Date.parse(target) - Date.parse(new Date());

        if (total <= 0) {
            return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
            total,
            days: Math.floor(total / (1000 * 60 * 60 * 24)),
            hours: Math.floor((total / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((total / 1000 / 60) % 60),
            seconds: Math.floor((total / 1000) % 60),
        };
    }
}