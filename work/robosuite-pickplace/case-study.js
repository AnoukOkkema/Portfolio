(() => {
  const iframe = document.querySelector("#demo-player");
  const seedInput = document.querySelector("#demo-seed");
  const runButton = document.querySelector("#demo-run-button");
  const statusText = document.querySelector("#demo-status-text");
  const progressLabel = document.querySelector("#demo-progress-label");
  const resultPlaced = document.querySelector("#demo-result-placed");
  const resultConfidence = document.querySelector("#demo-result-confidence");
  const resultPose = document.querySelector("#demo-result-pose");
  const phaseSteps = {
    detect: document.querySelector("#demo-phase-detect"),
    pick: document.querySelector("#demo-phase-pick"),
    place: document.querySelector("#demo-phase-place"),
  };
  if (!iframe || !runButton) return;

  // The player (trajectory_player) renders chrome-free: camera switching and
  // pause/stop/replay/speed all live as an overlay inside the player itself
  // (see #embed-camera-switch and #embed-transport in its index.html). This
  // sidebar only starts new runs and mirrors status -- see postToParent /
  // handleParentMessage in its src/main.js for the other end of that
  // contract.
  //
  // On load it points at a bundled, pre-recorded trajectory (?preset=...) so
  // a visitor sees a finished pick-and-place sequence immediately, without
  // triggering a live simulation run themselves. "Run simulation" still
  // starts a real one on demand.
  const playerOrigin = iframe.dataset.playerBase;
  const presetUrl = new URL("assets/sample-trajectory.bin", location.href).href;
  const presetResultUrl = new URL("assets/sample-trajectory.result.json", location.href).href;
  iframe.src = `${playerOrigin}/?embed=1&preset=${encodeURIComponent(presetUrl)}&presetResult=${encodeURIComponent(presetResultUrl)}`;
  let playerReady = false;
  runButton.disabled = true;

  function sendToPlayer(type, payload = {}) {
    iframe.contentWindow?.postMessage({ target: "pickplace-player", type, ...payload }, playerOrigin);
  }

  function setActivePhaseStep(step) {
    for (const [key, el] of Object.entries(phaseSteps)) el?.classList.toggle("active", key === step);
  }

  function applyPhase(phase, data) {
    runButton.disabled = phase === "running" || phase === "paused";
    // Per-object "progress" messages drive the step indicator while a run is
    // in progress (see below); only the terminal states are decided here.
    if (phase === "completed" || phase === "stopped") setActivePhaseStep("place");
    else if (phase !== "running" && phase !== "paused") {
      setActivePhaseStep("detect");
      progressLabel.textContent = "—";
    }

    if (phase === "completed" && Number.isInteger(data.placed) && data.total > 0) {
      resultPlaced.textContent = `${data.placed} / ${data.total}`;
      // Both are None (no objects ever detected) if the very first required
      // object never showed up in the agent-view scan.
      resultConfidence.textContent = Number.isFinite(data.confidence)
        ? `${Math.round(data.confidence * 100)}%`
        : "n/a";
      resultPose.textContent = Number.isFinite(data.poseErrorCm)
        ? `${data.poseErrorCm.toFixed(1)} cm off`
        : "n/a";
    } else if (phase === "running") {
      resultPlaced.textContent = "—";
      resultConfidence.textContent = "—";
      resultPose.textContent = "—";
      progressLabel.textContent = "—";
    }
  }

  window.addEventListener("message", (event) => {
    if (event.source !== iframe.contentWindow) return;
    const data = event.data;
    if (!data || data.source !== "pickplace-player") return;
    if (data.type === "ready") {
      playerReady = true;
      runButton.disabled = false;
    } else if (data.type === "status") {
      statusText.textContent = data.text;
      statusText.classList.toggle("is-error", Boolean(data.isError));
    } else if (data.type === "phase") {
      applyPhase(data.phase, data);
    } else if (data.type === "progress") {
      setActivePhaseStep(data.step);
      progressLabel.textContent = `${data.object} (${data.index} of ${data.total})`;
      resultPlaced.textContent = `${data.placedSoFar} / ${data.total}`;
      resultConfidence.textContent = Number.isFinite(data.avgConfidence)
        ? `${Math.round(data.avgConfidence * 100)}%`
        : "—";
      resultPose.textContent = Number.isFinite(data.avgPoseErrorCm)
        ? `${data.avgPoseErrorCm.toFixed(1)} cm off`
        : "—";
    }
  });

  runButton.addEventListener("click", () => {
    if (!playerReady) return;
    const seedText = seedInput.value.trim();
    const seed = seedText === "" ? null : Number(seedText);
    sendToPlayer("run", { seed: Number.isInteger(seed) ? seed : null });
  });
})();
