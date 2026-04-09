const startDate = new Date("2026-03-29");

function getCalendarDiff(start, end) {
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();
    let hours = end.getHours() - start.getHours();
    let minutes = end.getMinutes() - start.getMinutes();
    let seconds = end.getSeconds() - start.getSeconds();

    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }

    if (minutes < 0) {
        minutes += 60;
        hours--;
    }

    if (hours < 0) {
        hours += 24;
        days--;
    }

    if (days < 0) {
        const previousMonth = new Date(end.getFullYear(), end.getMonth(), 0);
        days += previousMonth.getDate();
        months--;
    }

    if (months < 0) {
        months += 12;
        years--;
    }

    return { years, months, days, hours, minutes, seconds };
}

function updateTimer() {
    const now = new Date();

    if (now < startDate) {
        document.getElementById("totalTime").innerHTML = "Nog niet begonnen ❤️";
        document.getElementById("splitTime").innerHTML = "Nog even geduld 💕";
        return;
    }

    const diffMs = now - startDate;

    // 🔢 Totale tijd (milliseconden → alles)
    const totalSeconds = Math.floor(diffMs / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);
    const totalWeeks = Math.floor(totalDays / 7);
    const totalMonths = Math.floor(totalDays / 30.44);

    // 📅 Kalender-correct verschil
    const diff = getCalendarDiff(startDate, now);

    document.getElementById("totalTime").innerHTML = `
        💕 ${totalMonths} maanden<br>
        💖 ${totalWeeks} weken<br>
        💗 ${totalDays} dagen<br>
        💘 ${totalHours} uren<br>
        💞 ${totalMinutes} minuten<br>
        ❤️ ${totalSeconds} seconden
    `;

    document.getElementById("splitTime").innerHTML = `
        ❤️ ${diff.years} jaar<br>
        💕 ${diff.months} maanden<br>
        💗 ${diff.days} dagen<br>
        💘 ${diff.hours} uren<br>
        💞 ${diff.minutes} minuten<br>
        ❤️ ${diff.seconds} seconden
    `;
}

updateTimer();
setInterval(updateTimer, 1000);
