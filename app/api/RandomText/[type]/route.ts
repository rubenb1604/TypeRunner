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
    "Das Entwicklerteam hat die Codebasis verbessert, um die Wartbarkeit zu erhöhen und redundante Strukturen zu eliminieren.",
    "Dank des neuen Caching-Systems wurden die Ladezeiten drastisch verringert, was zu einer spürbaren Leistungssteigerung führte.",
    "Die API-Dokumentation wurde überarbeitet, um Entwicklern eine schnellere Integration der Schnittstelle zu ermöglichen.",
    "Durch die Einführung neuer Codierungsrichtlinien wurde die Struktur des Codes verbessert, was zu einer höheren Lesbarkeit führte.",
    "Asynchrone Programmierung hat dazu beigetragen, die Reaktionszeiten der Anwendung erheblich zu verkürzen.",
    "Der Code wurde optimiert, um die Ressourcennutzung zu verbessern und die Stabilität der Anwendung langfristig zu erhöhen.",
    "Durch den Einsatz bewährter Design Patterns konnte die Flexibilität des Codes deutlich verbessert werden.",
    "Ein robustes Fehlerbehandlungssystem wurde implementiert, um unerwartete Systemausfälle zu vermeiden und die Stabilität zu erhöhen.",
    "Die neue Datenbankstruktur hat die Ladezeiten erheblich reduziert und die Benutzererfahrung verbessert.",
    "Continuous Integration wurde eingeführt, um den Entwicklungsprozess zu beschleunigen und die Bereitstellung neuer Funktionen zu vereinfachen."
]



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
    "Die Umstellung auf eine containerisierte Architektur erfordert eine sorgfältige Planung, aber sie bietet enorme Vorteile in Bezug auf Skalierbarkeit, Portabilität und einfache Verwaltung in Cloud-Umgebungen. Diese Änderungen tragen auch zur Effizienzsteigerung bei.",
    "Die Umstrukturierung des Codes durch das Team führte zu einer erheblichen Verbesserung der Softwarequalität und -leistung, indem Redundanzen vermieden und unnötige Komplexität reduziert wurden. Dies optimiert nicht nur den Code, sondern auch die Performance der Anwendung.",
    "Nachdem das Team mit der Einführung von DevOps-Praktiken begonnen hatte, konnte der Entwicklungsprozess erheblich beschleunigt und die Qualität der Software durch automatisierte Tests verbessert werden. Diese Änderungen führten zu schnelleren Bereitstellungen und weniger Fehlern.",
    "Durch die enge Zusammenarbeit mit den Designern konnte das Entwicklerteam eine benutzerfreundliche Oberfläche gestalten, die den Anforderungen der Endnutzer entspricht und eine hohe Nutzerzufriedenheit gewährleistet. Ein gut gestaltetes UI trägt entscheidend zum Erfolg bei.",
    "Die Einführung von Code Reviews als Standardprozess half dem Team, Fehler im frühen Entwicklungsstadium zu identifizieren und zu beheben, was die Qualität des Codes und die Stabilität der Anwendung erhöhte. Code Reviews fördern eine Kultur der Qualität und Zusammenarbeit.",
    "Durch das Refactoring des alten Codes wurde die Wartbarkeit des Systems verbessert, was nicht nur die Entwicklerproduktivität steigerte, sondern auch den langfristigen Erfolg des Projekts sicherte. Dies führte zu einer besseren Struktur und verringerten Wartungskosten.",
    "Die Entscheidung, auf eine Microservice-Architektur umzusteigen, war entscheidend für die Flexibilität und Skalierbarkeit der Anwendung. Es ermöglichte eine schnellere Bereitstellung neuer Features und Updates, da Änderungen an einzelnen Microservices unabhängig voneinander vorgenommen werden konnten.",
    "Durch die Automatisierung von Tests und Deployment-Prozessen konnte das Team sicherstellen, dass die Software ständig auf dem neuesten Stand war und gleichzeitig hohe Qualität und Stabilität gewährleistet wurden. Dies führte zu einer zuverlässigeren und effizienteren Softwarebereitstellung.",
    "Das Projektteam entschloss sich, ein modernes Frontend-Framework zu verwenden, das nicht nur die Entwicklungszeit verkürzte, sondern auch eine besser performante und responsivere Benutzeroberfläche ermöglichte. Die Wahl des Frameworks war entscheidend für die Verbesserung der Benutzererfahrung.",
    "Die Migration zu einer Cloud-Infrastruktur war nicht nur technisch herausfordernd, sondern auch ein kultureller Wandel, der das Team dazu zwang, bestehende Prozesse zu überdenken und zu optimieren. Die Cloud ermöglichte eine bessere Skalierbarkeit und Verfügbarkeit der Anwendung."

]



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
