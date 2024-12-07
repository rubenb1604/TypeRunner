import { NextResponse } from 'next/server';

const items: string[] = [
    "Der Entwickler schrieb schnellen Code, der effizient und gut strukturiert für alle war.",
    "Beim Debuggen fand er einen Fehler im Algorithmus, der den gesamten Prozess verzögerte.",
    "Die Programmiersprache Python bietet einfache Syntax, aber sie kann auch sehr mächtig sein.",
    "Mit Git konnte der Entwickler den Code problemlos versionieren und Änderungen nachverfolgen.",
    "Der Algorithmus optimierte die Suche nach Daten und verbesserte die Performance erheblich.",
    "Ein gutes Test-Driven Development stellt sicher, dass der Code fehlerfrei und wartbar bleibt.",
    "Der Code war gut, aber die Dokumentation fehlte – das Team musste viel Zeit damit verbringen.",
    "Beim Erstellen von APIs ist es wichtig, auf die richtige Struktur und die Datenvalidierung zu achten.",
    "Die neue Funktion wurde implementiert, doch der Entwickler merkte schnell, dass er refaktorieren musste.",
    "Die Migration auf eine neue Datenbank war kompliziert, aber die Performance verbesserte sich enorm."
];

export async function GET() {
    const randomIndex = Math.floor(Math.random() * items.length);
    const randomItem = items[randomIndex];

    return NextResponse.json({ item: randomItem });
}
