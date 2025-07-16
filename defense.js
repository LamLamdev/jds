document.getElementById("deployButton").addEventListener("click", function () {
    const bar = document.getElementById("progressBar");
    const scanner = document.getElementById("scanner");
    const container = document.getElementById("defense-manual");
  
    bar.classList.remove("w-0");
    bar.classList.add("w-full");
  
    setTimeout(() => {
      container.classList.add("expand-height");
      scanner.classList.remove("hidden", "opacity-0");
      scanner.classList.add("opacity-100");
    }, 1800);
  });
  
  document.querySelector("#scanner button").addEventListener("click", async function () {
    const scanBtn = document.querySelector("#scanner button");
    const wallet = document.querySelector("#walletInput").value.trim();
    const walletError = document.getElementById("walletError");
    const loading = document.getElementById("jeetLoading");

    loading.classList.remove("hidden");
loading.classList.add("opacity-100");

const analyzingMessages = [
    "ANALYZING...",
    "SCANNING JEET TENDENCIES...",
    "LOADING DATA..."
  ];
  
  let analyzingIndex = 0;
  const analyzingText = document.getElementById("analyzingText");
  
  if (analyzingText) {
    analyzingText.textContent = analyzingMessages[0];
    const rotatingInterval = setInterval(() => {
      analyzingIndex = (analyzingIndex + 1) % analyzingMessages.length;
      analyzingText.textContent = analyzingMessages[analyzingIndex];
    }, 3000);
  
    // Stop rotating after scan finishes
    setTimeout(() => clearInterval(rotatingInterval), 6000);
  }
  

lottie.loadAnimation({
  container: document.getElementById('radarAnimation'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'https://lottie.host/31c6ec4d-5e0d-446f-864f-8c6c507fdcb7/yNNoUjLMEz.json'
});


    const stats = document.getElementById("jeetStats");
    const container = document.getElementById("defense-manual");
    const output = document.getElementById("terminalOutput");
  
    // ✅ Wallet validation block
const isValidWallet = wallet.length === 44 && /^[1-9A-HJ-NP-Za-km-z]+$/.test(wallet);

// Empty wallet
if (!wallet) {
  walletError.textContent = "Please enter a wallet address.";
  walletError.classList.remove("hidden");

  // 🔻 Hide radar loading
  loading.classList.add("hidden", "opacity-0");
  loading.classList.remove("opacity-100");
  return;
}

// Invalid wallet format
if (!isValidWallet || !isValidSolanaAddress(wallet)) {
  walletError.textContent = "Invalid wallet address";
  walletError.classList.remove("hidden");

  // 🔻 Hide radar loading
  loading.classList.add("hidden", "opacity-0");
  loading.classList.remove("opacity-100");
  return;
}

// ✅ Valid wallet: clear errors, start radar
walletError.classList.add("hidden");
output.innerHTML = `<div class="mb-2 text-green-500">$ root@defense:~$</div>`;
loading.classList.remove("hidden", "opacity-0");
loading.classList.add("opacity-100");
scanBtn.disabled = true;
scanBtn.classList.add("opacity-50", "cursor-not-allowed");
stats.classList.add("hidden", "opacity-0");
container.style.height = "auto";

      
  
    // Valid wallet - proceed with scan UI
    container.style.height = "auto";
    loading.classList.remove("hidden", "opacity-0");
    loading.classList.add("opacity-100");
    scanBtn.disabled = true;
scanBtn.classList.add("opacity-50", "cursor-not-allowed");

  
    stats.classList.add("hidden", "opacity-0");
  
    let statLines;

const cached = localStorage.getItem(wallet);
if (cached) {
  statLines = JSON.parse(cached);
} else {
  const hash = await sha256(wallet);
  const rand = seededRandom(hash);
  statLines = generateJeetReportStats(rand);
  localStorage.setItem(wallet, JSON.stringify(statLines));
}

  
    // Delay before results
    setTimeout(() => {
      loading.classList.add("opacity-0");
  
      setTimeout(() => {
        loading.classList.add("hidden");
        stats.classList.remove("hidden");
        stats.classList.add("opacity-100");
  
        setTimeout(() => {
          // Disable scan button only now
          scanBtn.disabled = true;
          scanBtn.classList.add("opacity-50", "cursor-not-allowed");
  
          // Already defined above

          let i = 0;
  
          function typeLine() {
            if (i >= statLines.length) {
              scanBtn.disabled = false;
              scanBtn.classList.remove("opacity-50", "cursor-not-allowed");

              const shareButton = document.getElementById("shareBtn");
              if (shareButton) {
                shareButton.scrollIntoView({ behavior: "smooth", block: "center" });
              }
            
          
             // Create Share Button
              const shareBtn = document.createElement("button");
              shareBtn.id = "shareBtn";
              shareBtn.textContent = "SHARE RESULTS ON X";
              shareBtn.className =
                "mt-4 px-4 py-2 border border-green-300 text-green-300 text-xs font-bold rounded shadow-md hover:bg-green-800 transition-all tracking-widest";
          
              // Share Logic
              // Share Logic
shareBtn.addEventListener("click", () => {
    const fullText = output.innerText
      .replace(/\$ root@defense:~\$/g, "")
      .replace(/\n{2,}/g, "\n")
      .trim();
  
    const lines = fullText
      .split("\n")
      .filter(line => !line.includes("SHARE RESULTS ON X")); // ignore button label
  
    // Add emojis ONLY in tweet
    const emojiLines = lines.map(line => {
        const cleanLine = line.replace(/^>\s*/, ""); // removes initial "> " if present
        const spacedLine = cleanLine.replace(/:(?!\/\/)/, ": "); // adds space after colon
      
        if (cleanLine.includes("Mental Fortitude")) return `🧠 > ${spacedLine}`;
        if (cleanLine.includes("Average Hold Duration")) return `⏳ > ${spacedLine}`;
        if (cleanLine.includes("Biggest Fumble")) return `💀 > ${spacedLine}`;
        if (cleanLine.includes("Token Loyalty")) return `🔒 > ${spacedLine}`;
        if (cleanLine.includes("Jeet Score")) return `📉 > ${spacedLine}`;
        if (cleanLine.includes("Diagnosis")) return `🧾 > ${spacedLine}`;
        return `> ${spacedLine}`;
      });
      
      
  
      const tweetText = `JEET DIAGNOSIS JUST CAME IN 🧪\n\n${emojiLines.join("\n")}\n\nGet diagnosed at: jeetdefense.com`;

    const tweet = encodeURIComponent(tweetText);
    const url = `https://twitter.com/intent/tweet?text=${tweet}`;
    window.open(url, "_blank");
  });
  
          
              output.appendChild(shareBtn);
              return;
            }
          
            const text = statLines[i];
            typeLineWithColor(text);
          
          }
  
          function typeLineWithColor(text) {
            const line = document.createElement("div");
            line.className = "whitespace-pre-wrap break-words blinking-cursor text-green-400";
            output.appendChild(line);
          
            const parts = text.split(":");
            const label = parts[0] + ":";
            const value = parts[1]?.trim() || "";
          
            const valueSpan = document.createElement("span");
            valueSpan.textContent = value;
            valueSpan.className = getColorForValue(label, value);
            valueSpan.style.marginLeft = "0.3rem";
          
            let fullText = label;
            let j = 0;
          
            function typeChar() {
              if (j < fullText.length) {
                line.textContent += fullText[j++];
                output.scrollTop = output.scrollHeight;
          
                const originalAudio = document.getElementById("keystroke");
                if (originalAudio) {
                  const keySound = originalAudio.cloneNode();
                  keySound.volume = 0.4;
                  keySound.play();
                }
          
                setTimeout(typeChar, Math.floor(Math.random() * 21) + 35);
              } else {
                line.appendChild(valueSpan);
                line.classList.remove("blinking-cursor");
                i++;
          
                setTimeout(() => {
                  typeLine();
          
                  if (i >= statLines.length) {
                    scanBtn.disabled = false;
                    scanBtn.classList.remove("opacity-50", "cursor-not-allowed");
          
                    // Scroll to share button after a short delay
                    setTimeout(() => {
                      const shareButton = document.getElementById("shareBtn");
                      if (shareButton) {
                        shareButton.scrollIntoView({ behavior: "smooth", block: "center" });
                      }
                    }, 100);
                  }
                }, 350);
              }
            }
          
            typeChar();
          }
          
         
  
  
          function getColorForValue(label, value) {
            label = label.toLowerCase();
  
            if (label.includes("fortitude")) {
              const val = parseInt(value);
              return val >= 60 ? "text-green-400" : val >= 40 ? "text-yellow-400" : "text-red-400";
            }
  
            if (label.includes("fumble")) {
              const val = parseFloat(value.replace("x", ""));
              return val > 30 ? "text-red-400" : val > 15 ? "text-yellow-400" : "text-green-400";
            }
  
            if (label.includes("loyalty")) {
              if (value.includes("Unbreakable")) return "text-green-400";
              if (value.includes("High")) return "text-green-300";
              if (value.includes("Medium")) return "text-yellow-400";
              return "text-red-400";
            }
  
            if (label.includes("jeet score")) {
              const val = parseInt(value);
              return val <= 40 ? "text-green-400" : val <= 70 ? "text-yellow-400" : "text-red-400";
            }
  
            if (label.includes("diagnosis")) {
              const jeetMatch = output.innerText.match(/Jeet Score: (\d+)/);
              const jeetVal = jeetMatch ? parseInt(jeetMatch[1]) : 50;
              return jeetVal <= 40 ? "text-green-400" : jeetVal <= 70 ? "text-yellow-400" : "text-red-400";
            }
  
            return "text-white";
          }
  
          typeLine();
        }, 1500);
      }, 500);
    }, 9000);
  });
  
  // UTILITIES
  
  function isValidSolanaAddress(address) {
    const base58Regex = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;
    return base58Regex.test(address);
  }
  
  async function sha256(message) {
    const encoder = new TextEncoder();
    const data = encoder.encode(message);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }
  
  function seededRandom(seed) {
    let h = 2166136261 >>> 0;
    for (let i = 0; i < seed.length; i++) {
      h ^= seed.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return function () {
      h += h << 13; h ^= h >>> 7;
      h += h << 3;  h ^= h >>> 17;
      h += h << 5;
      return (h >>> 0) / 4294967295;
    };
  }
  
  function randomFrom(arr, rng) {
    return arr[Math.floor(rng() * arr.length)];
  }
  
  function generateJeetReportStats(rand) {
    const jeetScore = Math.floor(rand() * 101);
    const fortitude = Math.floor(100 - jeetScore * 0.8 + rand() * 10);
  
    let loyalty = "None";
    if (jeetScore < 20) loyalty = "Unbreakable";
    else if (jeetScore < 40) loyalty = "High";
    else if (jeetScore < 65) loyalty = "Medium";
    else if (jeetScore < 85) loyalty = "Low";
  
    const avgHoldMinutes = jeetScore > 80
      ? Math.floor(rand() * 20) + 15
      : jeetScore > 60
        ? Math.floor(rand() * 30) + 30
        : Math.floor(rand() * 60) + 45;
  
    const avgHold = avgHoldMinutes < 60
      ? `${avgHoldMinutes} minutes`
      : `${(avgHoldMinutes / 60).toFixed(1)} hours`;
  
    const fumble = (1.5 + jeetScore * 0.6 + rand() * 10).toFixed(1);
  
    const diagnosis = (() => {
      const diagnoses = {
        diamond: [
          "Psychologically Fortified – Dump-Proof Even During Genocide",
          "HODL DNA Detected – You Fear Nothing but God",
          "Likely to Hold Through Nuclear Fallout",
          "Soulless Hodler – Wouldn't Sell Even if Family Was Held Hostage",
          "Backed by Satan – Still Didn't Sell at -99%"
        ],
        mild: [
          "Mild Jeet – Still Has a Conscience",
          "Only Sells for Rent or Ramen",
          "Knows What a Bag Is, Still Holds It",
          "Jeets Once a Month – Like a Period, but Financial",
          "You Fumble, But You Pray First"
        ],
        medium: [
          "Emotionally Fragile – Cries During Dips",
          "Still Asks Friends When to Sell",
          "You’d Sell Your Soul for a 2x",
          "Jeeted a 40x for a McFlurry",
          "Paper Hands, Plastic Soul"
        ],
        high: [
          "Jeeted $ETH for $PEPE on Leverage – Then Cried",
          "Got Liquidated During a Meditation Retreat",
          "Panic Sells While Opening MetaMask",
          "Rugs Trigger PTSD – You Still Buy In",
          "Believes Every Candle Is an Exit Wound"
        ],
        terminal: [
          "Sold Pre-Airdrop – Multiple Times",
          "You Are the Exit Liquidity – Embrace It",
          "You FOMO Into Red and Sell Green – Consistently",
          "Burned Through More Wallets Than ETH Gas",
          "Your Metamask Is a Financial Crime Scene"
        ]
      };
  
      if (jeetScore < 20) return randomFrom(diagnoses.diamond, rand);
      if (jeetScore < 45) return randomFrom(diagnoses.mild, rand);
      if (jeetScore < 70) return randomFrom(diagnoses.medium, rand);
      if (jeetScore < 90) return randomFrom(diagnoses.high, rand);
      return randomFrom(diagnoses.terminal, rand);
    })();
  
    return [
      `> Mental Fortitude Score: ${fortitude}%`,
      `> Average Hold Duration: ${avgHold}`,
      `> Biggest Fumble: ${fumble}x`,
      `> Token Loyalty: ${loyalty}`,
      `> Jeet Score: ${jeetScore}/100`,
      `> Diagnosis: ${diagnosis}`
    ];
  }
  
  // Load the Lottie radar animation
  lottie.loadAnimation({
    container: document.getElementById("radarAnimation"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "radar.json",
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      scaleMode: "noScale",
      clearCanvas: false,
      progressiveLoad: false,
      hideOnTransparent: true,
    }
  });
  
  function copyContract() {
    const text = document.getElementById("contractText").textContent;
    navigator.clipboard.writeText(text).then(() => {
      alert("Contract address copied to clipboard.");
    });
  }
  