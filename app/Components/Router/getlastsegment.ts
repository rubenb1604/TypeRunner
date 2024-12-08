// utils/getLastSegment.ts

export const getLastSegment = (): string => {
    // Überprüfen, ob wir uns im Browser befinden
    if (typeof window !== "undefined") {
        const fullUrl = window.location.href; // Holt die vollständige URL der aktuellen Seite
        const lastSegment = fullUrl.substring(fullUrl.lastIndexOf('/') + 1).split('?')[0]; // Extrahiere den letzten Teil der URL, entferne Query-Parameter
        return lastSegment;
    }
    // Fallback-Wert, falls der Code auf der Server-Seite ausgeführt wird
    return '';
};
