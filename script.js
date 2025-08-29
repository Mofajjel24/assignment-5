const services = [
  {
    icon: "./assets/emergency.png",
    name: "জাতীয় জরুরি সেবা",
    en: "National Emergency",
    number: "999",
    category: "সার্বজনীন",
  },
  {
    icon: "./assets/police.png",
    name: "পুলিশ",
    en: "Police",
    number: "999",
    category: "পুলিশ",
  },
  {
    icon: "./assets/fire-service.png",
    name: "ফায়ার সার্ভিস",
    en: "Fire Service",
    number: "999",
    category: "জরুরি",
  },
  {
    icon: "./assets/ambulance.png",
    name: "অ্যাম্বুলেন্স",
    en: "Ambulance",
    number: "1994-999999",
    category: "স্বাস্থ্য",
  },
  {
    icon: "./assets/heart.png",
    name: "নারী ও শিশু সহায়তা",
    en: "Women & Child Helpline",
    number: "109",
    category: "সহায়তা",
  },
  {
    icon: "./assets/coin.png",
    name: "দুদক",
    en: "Anti-Corruption",
    number: "106",
    category: "সরকারি",
  },
  {
    icon: "./assets/coin.png",
    name: "বিদ্যুৎ বিভাগ",
    en: "Electricity Outage",
    number: "16216",
    category: "বিদ্যুৎ",
  },
  {
    icon: "./assets/brac.png",
    name: "ব্র্যাক",
    en: "Brac",
    number: "16445",
    category: "প্রাইভেট",
  },
  {
    icon: "./assets/Bangladesh-Railway.png",
    name: "বাংলাদেশ রেলওয়ে",
    en: "Bangladesh Railway",
    number: "163",
    category: "পরিবহন",
  },
];

const cardSection = document.getElementById("cardSection");
const heartCountEl = document.getElementById("heartCount");
const coinCountEl = document.getElementById("coinCount");
const copyCountEl = document.getElementById("copyCount");
const historyList = document.getElementById("historyList");
const clearHistoryBtn = document.getElementById("clearHistoryBtn");

let hearts = 0,
  coins = 100,
  copies = 0;

function formattedTime(date = new Date()) {
  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

function renderCards() {
  cardSection.innerHTML = "";
  services.forEach((svc) => {
    const card = document.createElement("div");
    card.className =
      "bg-white rounded-xl border shadow-md hover:shadow-lg p-5 flex flex-col justify-between transition transform hover:-translate-y-1";

    card.innerHTML = `
      <div class="flex items-start justify-between mb-3">
        <div class="flex items-center gap-3">
          <img src="${svc.icon}" alt="${svc.en}" class="w-12 h-12 object-contain rounded" />
          <div>
            <h3 class="font-bold text-base">${svc.name}</h3>
            <p class="text-xs text-gray-500">${svc.en}</p>
          </div>
        </div>
        <button class="like-btn text-gray-400 hover:text-red-500">♡</button>
      </div>
      <p class="font-mono text-lg">${svc.number}</p>
      <span class="inline-block mt-1 text-xs text-gray-600">${svc.category}</span>
      <div class="mt-4 grid grid-cols-2 gap-3">
        <button class="copy-btn border rounded px-3 py-1 text-sm text-gray-600 hover:bg-gray-50 transition" data-number="${svc.number}" data-name="${svc.name}">
          📋 Copy
        </button>
        <button class="call-btn bg-green-600 text-white rounded px-3 py-1 text-sm hover:bg-green-700 transition" data-number="${svc.number}" data-name="${svc.name}">
          📞 Call
        </button>
      </div>
    `;

    const likeBtn = card.querySelector(".like-btn");
    const copyBtn = card.querySelector(".copy-btn");
    const callBtn = card.querySelector(".call-btn");

    likeBtn.addEventListener("click", () => {
      hearts++;
      heartCountEl.textContent = hearts;
      likeBtn.textContent = "❤️";
    });

    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(copyBtn.dataset.number);
      } catch {
        const ta = document.createElement("textarea");
        ta.value = copyBtn.dataset.number;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        ta.remove();
      }
      copies++;
      copyCountEl.textContent = copies;
      alert(`📋 ${copyBtn.dataset.name} copied!`);
    });

    callBtn.addEventListener("click", () => {
      if (coins < 20) {
        alert(
          "⚠️ Not enough coins to make this call! You need at least 20 coins."
        );
        return;
      }

      coins -= 20;
      coinCountEl.textContent = coins;
      alert(
        `📞 Calling ${callBtn.dataset.name} (${callBtn.dataset.number})...`
      );

      const li = document.createElement("li");
      li.className = "border rounded px-3 py-2 bg-gray-50 text-sm";
      li.innerHTML = `
    <div class="flex justify-between items-start">
      <div>
        <span class="font-bold block">${callBtn.dataset.name}</span>
        <span class="text-gray-500 text-xs">${callBtn.dataset.number}</span>
      </div>
      <span class="text-xs text-gray-500">${formattedTime()}</span>
    </div>
  `;
      document.getElementById("emptyHistory")?.remove();
      historyList.appendChild(li);
    });

    cardSection.appendChild(card);
  });
}

clearHistoryBtn.addEventListener("click", () => {
  historyList.innerHTML =
    '<li id="emptyHistory" class="text-gray-400">No calls made yet</li>';
});

renderCards();
