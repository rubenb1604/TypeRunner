import { NextResponse } from 'next/server';

const items60: string[] = [
    "Der Entwickler implementierte eine neue Funktion erfolgreich.",
    "Die API wurde optimiert, um die Antwortzeit zu verkürzen.",
    "Der Code wurde refaktoriert, um die Wartbarkeit zu verbessern.",
    "Das Team konnte den Fehler im Code schnell identifizieren.",
    "Die Tests zeigten, dass die Änderungen den Fehler behoben haben.",
    "Der neue Algorithmus verbessert die Leistung der Anwendung.",
    "Die Datenbankabfragen wurden für bessere Performance optimiert.",
    "Das Frontend wurde für eine bessere Benutzererfahrung überarbeitet.",
    "Der Entwickler behebt regelmäßig Bugs, um die Qualität zu sichern.",
    "Die Migration auf das neue Framework verlief ohne größere Probleme."
];


const items100: string[] = [
    "Der Entwickler passte den Code so an, dass er nun effizienter und besser wartbar ist.",
    "Die API-Integration war erfolgreich, jedoch gab es einige unerwartete Performance-Probleme.",
    "Mit der Umstellung auf ein neues Framework konnte die Entwicklungszeit reduziert werden.",
    "Der Entwickler nutzte Design Patterns, um den Code besser strukturiert und flexibler zu gestalten.",
    "Das Team hat die neue Version der Anwendung erfolgreich auf den Server implementiert.",
    "Der Code wurde refaktoriert, um Redundanzen zu vermeiden und die Wartung zu erleichtern.",
    "Dank eines besseren Error-Handling-Mechanismus funktioniert die Software nun stabiler.",
    "Die neue Datenbanklösung sorgt für schnelleres Abrufen von Informationen und reduziert Ladezeiten.",
    "Das Team hat erfolgreich den ersten Prototyp der App entwickelt und getestet.",
    "Die Einführung des neuen Tools hat die Effizienz des Teams erheblich gesteigert."
];


const items150: string[] = [
    "Durch die Einführung von Unit-Tests konnte das Team die Codequalität verbessern und Fehler frühzeitig erkennen, bevor sie in die Produktion gelangten.",
    "Die Implementierung eines effizienten Caching-Systems hat die Antwortzeiten der Anwendung erheblich verkürzt und die Nutzererfahrung signifikant verbessert.",
    "Der Entwickler entschloss sich, das Frontend auf ein moderneres Framework umzustellen, um die Wartung zu vereinfachen und neue Features schneller einzuführen.",
    "Trotz zahlreicher Herausforderungen bei der API-Integration konnte das Team die bestehenden Probleme lösen und das System auf die neue Architektur migrieren.",
    "Die Umstellung auf eine microservice-basierte Architektur hat die Skalierbarkeit des Systems deutlich erhöht und ermöglicht eine schnellere Weiterentwicklung neuer Features.",
    "Das Team stellte fest, dass das Hinzufügen einer ordnungsgemäßen Fehlerbehandlung nicht nur die Stabilität des Codes verbesserte, sondern auch die Wartung erleichterte.",
    "Nach mehreren Iterationen und Tests konnte der Entwickler die Anwendung optimieren, wodurch die Performance deutlich gestiegen und der Speicherverbrauch gesenkt wurde.",
    "Der Entwickler und das Team arbeiteten eng zusammen, um die komplexen Anforderungen des neuen Features zu erfüllen und dabei die Codequalität zu sichern.",
    "Die Migration auf eine neue Datenbanklösung dauerte länger als erwartet, aber das Team konnte die notwendigen Anpassungen vornehmen, um die Performance zu steigern.",
    "Mit der Einführung von Continuous Integration und Deployment-Prozessen konnte das Team die Entwicklungszyklen verkürzen und die Fehlerquote im Code drastisch senken."
];


const items200: string[] = [
    "Die Umstellung auf eine containerisierte Architektur erfordert eine sorgfältige Planung, aber sie bietet enorme Vorteile in Bezug auf Skalierbarkeit, Portabilität und einfache Verwaltung in Cloud-Umgebungen.",
    "Die Umstrukturierung des Codes durch das Team führte zu einer erheblichen Verbesserung der Softwarequalität und -leistung, indem Redundanzen vermieden und unnötige Komplexität reduziert wurden.",
    "Nachdem das Team mit der Einführung von DevOps-Praktiken begonnen hatte, konnte der Entwicklungsprozess erheblich beschleunigt und die Qualität der Software durch automatisierte Tests verbessert werden.",
    "Durch die enge Zusammenarbeit mit den Designern konnte das Entwicklerteam eine benutzerfreundliche Oberfläche gestalten, die den Anforderungen der Endnutzer entspricht und eine hohe Nutzerzufriedenheit gewährleistet.",
    "Die Einführung von Code Reviews als Standardprozess half dem Team, Fehler im frühen Entwicklungsstadium zu identifizieren und zu beheben, was die Qualität des Codes und die Stabilität der Anwendung erhöhte.",
    "Durch das Refactoring des alten Codes wurde die Wartbarkeit des Systems verbessert, was nicht nur die Entwicklerproduktivität steigerte, sondern auch den langfristigen Erfolg des Projekts sicherte.",
    "Die Entscheidung, auf eine Microservice-Architektur umzusteigen, war entscheidend für die Flexibilität und Skalierbarkeit der Anwendung. Es ermöglichte eine schnellere Bereitstellung neuer Features und Updates.",
    "Durch die Automatisierung von Tests und Deployment-Prozessen konnte das Team sicherstellen, dass die Software ständig auf dem neuesten Stand war und gleichzeitig hohe Qualität und Stabilität gewährleistet wurden.",
    "Das Projektteam entschloss sich, ein modernes Frontend-Framework zu verwenden, das nicht nur die Entwicklungszeit verkürzte, sondern auch eine besser performante und responsivere Benutzeroberfläche ermöglichte.",
    "Die Migration zu einer Cloud-Infrastruktur war nicht nur technisch herausfordernd, sondern auch ein kultureller Wandel, der das Team dazu zwang, bestehende Prozesse zu überdenken und zu optimieren."
];


export async function GET(req: Request) {
    const url = new URL(req.url);
    const path = url.pathname;

    const type = path.split('/').pop();

    let items: string[];

    switch (type) {
        case 'easy':
            items = items60;
            break;
        case 'medium':
            items = items100;
            break;
        case 'hard':
            items = items150;
            break;
        case 'extreme':
            items = items200;
            break;
        default:
            return NextResponse.json({ error: 'Invalid type. Use /short, /medium, or /long.' }, { status: 400 });
    }

    const randomIndex = Math.floor(Math.random() * items.length);
    const randomItem = items[randomIndex];

    return NextResponse.json({ item: randomItem });
}
