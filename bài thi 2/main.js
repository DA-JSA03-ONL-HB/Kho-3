let timers = {};
    let intervals = {};

    function startTimer(timerId) {
      if (intervals[timerId]) return;

      timers[timerId] = 0;
      intervals[timerId] = setInterval(() => {
        timers[timerId]++;
        updateTimer(timerId);
      }, 10);
    }

    function stopTimer(timerId) {
      clearInterval(intervals[timerId]);
      intervals[timerId] = null;
      timers[timerId] = 0;
      updateTimer(timerId);
    }

    function pauseTimer(timerId) {
      clearInterval(intervals[timerId]);
      intervals[timerId] = null;
    }

    function startAllTimers() {
      for (let i = 1; i <= 3; i++) {
        startTimer(i);
      }
    }

    function stopAllTimers() {
      for (let i = 1; i <= 3; i++) {
        stopTimer(i);
      }
    }

    function updateTimer(timerId) {
      let minutes = Math.floor(timers[timerId] / 600);
      let seconds = Math.floor((timers[timerId] % 600) / 10);
      let milliseconds = timers[timerId] % 10;

      document.getElementById(`timer${timerId}`).textContent = `${pad(minutes)}:${pad(seconds)}.${milliseconds}`;
    }

    function pad(num) {
      return ("0" + num).slice(-2);
    }