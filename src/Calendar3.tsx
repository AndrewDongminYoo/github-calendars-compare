import React from 'react';
import ReactTSGithubCalendar from 'react-ts-github-calendar';
import pkg from '../package.json';

export default function Calendar1() {
    return (
        <ReactTSGithubCalendar
            userName={pkg.author}
            responsive={true}
            tooltips={true}
            global_stats={true}
            cache={86400000} // (24 * 60 * 60) *1000
            summary_text={"Summary of pull requests, issues opened, and commits made by USERNAME"}
        />
    );
}