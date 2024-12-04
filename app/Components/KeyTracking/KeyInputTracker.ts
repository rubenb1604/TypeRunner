

export const trackKeyInputs = (callback: (key: string, isPressed: boolean) => void) => {
    let isShiftPressed = false;

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key.toLowerCase() === "shift") {
            isShiftPressed = true;
        } else {
            if (isShiftPressed && /^[A-Z]$/.test(event.key)) {
                callback(event.key, true);
            } else if (!isShiftPressed) {
                callback(event.key, true);
            }
        }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
        if (event.key.toLowerCase() === "shift") {
            isShiftPressed = false;
        }
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("keyup", handleKeyUp);
    };
};
