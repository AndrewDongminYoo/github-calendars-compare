import React, { useEffect, useState } from "react";
import GithubCalendar from "github-calendar";
import "github-calendar/dist/github-calendar-responsive.css";

const Calendar2 = () => {
    const [loaded, setLoaded] = useState(false);
    const [calendar, setCalendar] = useState(<></>);
    useEffect(() => {
        const load = async () => {
            const cal = await GithubCalendar(".calendar", "AndrewDongminYoo", {
                global_stats: true,
                tooltips: true,
                cache: 5000,
                responsive: true,
            });
            setCalendar(cal);
            setLoaded(true);
        };

        return () => {
            load();
        };
    }, []);

    if (loaded) {
        return calendar;
    } else {
        return null;
    }
};

export default Calendar2;
