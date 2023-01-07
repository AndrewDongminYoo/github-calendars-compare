import React from 'react';
import ReactGithubCalendar from 'react-github-calendar';
import pkg from '../package.json';
import { Tooltip as ReactTooltip } from 'react-tooltip';

export default function Calendar1() {
    return (
        <>
            <ReactGithubCalendar
                username={pkg.author}
                color="#0969da"
                style={{
                    margin: 'auto',
                    display: 'block',
                    maxWidth: '100%',
                    height: 'auto',
                    overflow: 'visible',
                }}>
                <ReactTooltip />
            </ReactGithubCalendar>
        </>
    );
}