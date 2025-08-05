const AnalyticsService = (() => {
    let analyticsData = [];

    const trackEvent = (eventName, eventProperties = {}) => {
        const event = {
            name: eventName,
            properties: {
                ...eventProperties,
                timestamp: new Date().toISOString(),
            },
        };
        analyticsData.push(event);
        console.log(`Event tracked: ${eventName}`, eventProperties);
    };

    const getAnalyticsData = () => {
        return analyticsData;
    };

    const clearAnalyticsData = () => {
        analyticsData = [];
        console.log('Analytics data cleared');
    };

    return {
        trackEvent,
        getAnalyticsData,
        clearAnalyticsData,
    };
})();

export default AnalyticsService;