function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Degrees for hands (no milliseconds — keeps analog & digital synced)
    const hourDeg = ((hours % 12) + minutes / 60) * 30;     // 360/12 = 30
    const minuteDeg = (minutes + seconds / 60) * 6;        // 360/60 = 6
    const secondDeg = seconds * 6;

    // Apply transforms (translateX(-50%) keeps left alignment centered)
    document.getElementById("hour").style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
    document.getElementById("minute").style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
    document.getElementById("second").style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;

    // Digital time with AM/PM
    const period = hours >= 12 ? "PM" : "AM";
    const hour12 = hours % 12 || 12;
    const h = String(hour12).padStart(2, "0");
    const m = String(minutes).padStart(2, "0");
    const s = String(seconds).padStart(2, "0");

    document.getElementById("digitalClock").innerHTML = `${h}:${m}:${s} <span>${period}</span>`;
}

// keep clocks in sync, update every 1 second
setInterval(updateClock, 1000);
updateClock();
