document.addEventListener('DOMContentLoaded', function() {
    const countdownElement = document.getElementById('countdown');

    // Fecha objetivo
    const targetDate = new Date('2024-09-24T20:00:00');

    function updateCountdown() {
        const now = new Date();
        const timeDiff = targetDate - now;

        if (timeDiff <= 0) {
            countdownElement.innerHTML = 'Event has started!';
            return;
        }

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `
            ${days}d ${hours}h ${minutes}m ${seconds}s
        `;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
});
