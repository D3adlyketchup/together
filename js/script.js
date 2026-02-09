const startDate = new Date("2025-11-11T17:00:00");

function updateTimer() {
    const now = new Date();
    let diffMs = now - startDate;

    if (diffMs < 0) {
        document.getElementById("totalTime").innerHTML = "Nog niet begonnen ❤️";
        document.getElementById("splitTime").innerHTML = "Nog even geduld 💕";
        return;
    }

    // Totale tijd
    const totalSeconds = Math.floor(diffMs / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);
    const totalWeeks = Math.floor(totalDays / 7);
    const totalMonths = Math.floor(totalDays / 30.44);

    // Opgesplitste tijd
    let remaining = totalSeconds;

    const years = Math.floor(remaining / (365.25 * 24 * 3600));
    remaining -= years * 365.25 * 24 * 3600;

    const months = Math.floor(remaining / (30.44 * 24 * 3600));
    remaining -= months * 30.44 * 24 * 3600;

    const days = Math.floor(remaining / (24 * 3600));
    remaining -= days * 24 * 3600;

    const hours = Math.floor(remaining / 3600);
    remaining -= hours * 3600;

    const minutes = Math.floor(remaining / 60);
    const seconds = Math.floor(remaining % 60);

    document.getElementById("totalTime").innerHTML = `
        💕 ${totalMonths} maanden<br>
        💖 ${totalWeeks} weken<br>
        💗 ${totalDays} dagen<br>
        💘 ${totalHours} uren<br>
        💞 ${totalMinutes} minuten<br>
        ❤️ ${totalSeconds} seconden
    `;

    document.getElementById("splitTime").innerHTML = `
        ❤️ ${years} jaar<br>
        💕 ${months} maanden<br>
        💗 ${days} dagen<br>
        💘 ${hours} uren<br>
        💞 ${minutes} minuten<br>
        ❤️ ${seconds} seconden
    `;
}

updateTimer();
setInterval(updateTimer, 1000);
