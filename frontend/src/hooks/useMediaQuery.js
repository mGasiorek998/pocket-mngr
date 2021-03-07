import { useState, useEffect } from 'react';

/**
 * Handles rendering a component based on media query
 * @param {string} query - media query to check for the match
 * @returns {bool} true when there is a match with given query
 */
export function useMediaQuery(query) {
    const [isMatch, setIsMatch] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);

        if (media.matches !== isMatch) {
            setIsMatch(media.matches);
        }

        const listener = () => {
            setIsMatch(media.matches);
        };

        media.addEventListener("change", listener);

        return () => media.removeEventListener("change", listener);
    }, [isMatch, query])

    return isMatch;
}

