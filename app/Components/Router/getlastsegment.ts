export const getLastSegment = (): string => {
    if (typeof window !== "undefined") {
        const fullUrl = window.location.href;
        const lastSegment = fullUrl.substring(fullUrl.lastIndexOf('/') + 1).split('?')[0];
        return lastSegment;
    }
    return '';
};
