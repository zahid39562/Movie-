document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector("video");
  const playBtn = document.getElementById("playBtn");
  const timeDisplay = document.getElementById("timeDisplay");
  const subtitleToggle = document.getElementById("subtitleToggle");

  // Play / Pause
  playBtn.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      playBtn.textContent = "⏸ Pause";
    } else {
      video.pause();
      playBtn.textContent = "▶ Play";
    }
  });

  // Show current time
  video.addEventListener("timeupdate", () => {
    let current = formatTime(video.currentTime);
    let duration = formatTime(video.duration);
    timeDisplay.textContent = `${current} / ${duration}`;
  });

  // Toggle Subtitles
  subtitleToggle.addEventListener("click", () => {
    let track = video.textTracks[0]; // first track
    if (track.mode === "showing") {
      track.mode = "hidden";
      subtitleToggle.textContent = "Show Subtitles";
    } else {
      track.mode = "showing";
      subtitleToggle.textContent = "Hide Subtitles";
    }
  });

  // Format time helper
  function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? "0" + sec : sec}`;
  }
});