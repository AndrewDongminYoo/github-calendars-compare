import React from 'react';
import ReactGithubCalendar from 'react-github-calendar';
import pkg from '../package.json';
import { Tooltip as ReactTooltip } from 'react-tooltip';

export default function Calendar1() {
    return (
        <>
            <ReactGithubCalendar username={pkg.author}>
                <ReactTooltip />
            </ReactGithubCalendar>
        </>
    );
}
