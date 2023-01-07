/**
 * GitHubCalendar
 * Brings the contributions calendar from GitHub (provided username) into your page.
 *
 * @name GitHubCalendar
 * @function
 * @param {String|HTMLElement} container The calendar container (query selector or the element itself).
 * @param {String} username The GitHub username.
 * @param {Object} options An object containing the following fields:
 *
 *    - `summary_text` (String): The text that appears under the calendar (defaults to: `"Summary of pull requests, issues opened, and commits made by <username>"`).
 *    - `proxy` (Function): A function that receives as argument the username (string) and should return a promise resolving the HTML content of the contributions page. The default is using @Bloggify's APIs.
 *    - `global_stats` (Boolean): If `false`, the global stats (total, longest and current streaks) will not be calculated and displayed. By default this is enabled.
 *    - `responsive` (Boolean): If `true`, the graph is changed to scale with the container. Custom CSS should be applied to the element to scale it appropriately. By default this is disabled.
 *    - `tooltips` (Boolean): If `true`, tooltips will be shown when hovered over calendar days. By default this is disabled.
 *    - `cache` (Number) The cache time in seconds.
 *
 * @return {Promise} A promise returned by the `fetch()` call.
 * @example
 * GitHubCalendar(".calendar", "USERNAME", { responsive: true });
 * @see {@link https://github.com/Bloggify/github-calendar}
 */
declare module 'github-calendar';