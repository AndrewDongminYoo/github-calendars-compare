import React, { useEffect, useState } from "react";
import GithubCalendar from "github-calendar";
import "github-calendar/dist/github-calendar-responsive.css";

const Calendar1 = () => {
    const [calendar, setCalendar] = useState(<div>loading</div>);
    useEffect(() => {
        const renderCalendar = async () => {
            const cal = await GithubCalendar(".calendar", "AndrewDongminYoo", {
                global_stats: true,
                tooltips: true,
                cache: 24 * 60 * 60 * 1000,
                responsive: true,
            });
            setCalendar(cal);
        };
        return () => {
            renderCalendar();
        };
    }, []);

    return calendar;
};

export default Calendar1;
