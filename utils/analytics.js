import ReactGA from "react-ga4";

export const TrackGoogleAnalyticsEvent = (
    event_name,
    label,
    data
) => {

    let event_params = {
        label,
        ...data
    };

    ReactGA.event(event_name, event_params);
};
