// ======================================
// ELÄINTEN SUURI MAAILMANYMPÄRYSMATKA
// ======================================


// KAIKKI MAANOSAT JA NIIDEN ELÄIMET

const continents = [

    {
        name: "Afrikka",
        icon: "🌍",
        color: "#FCE5C1",

        description:
        "Afrikka on suuri ja lämmin maanosa. Siellä on valtavia savanneja, metsiä ja aavikoita. Afrikassa elää paljon erilaisia villieläimiä.",

        fact:
        "Afrikassa sijaitsee maailman suurin kuuma aavikko, Sahara!",

        animals: [

            {
                name: "Leijona",
                emoji: "🦁",
                home: "Leijona elää Afrikan savanneilla.",
                food: "Leijona syö lihaa.",
                fact: "Leijonaa kutsutaan eläinten kuninkaaksi. Se osaa karjua todella kovaa!"
            },

            {
                name: "Norsu",
                emoji: "🐘",
                home: "Norsu elää Afrikan savanneilla ja metsissä.",
                food: "Norsu syö ruohoa, lehtiä ja hedelmiä.",
                fact: "Norsulla on pitkä kärsä, jolla se voi juoda vettä ja poimia ruokaa."
            },

            {
                name: "Kirahvi",
                emoji: "🦒",
                home: "Kirahvi elää Afrikan savanneilla.",
                food: "Kirahvi syö puiden lehtiä.",
                fact: "Kirahvilla on todella pitkä kaula!"
            },

            {
                name: "Seepra",
                emoji: "🦓",
                home: "Seepra elää Afrikan avoimilla tasangoilla.",
                food: "Seepra syö ruohoa.",
                fact: "Jokaisella seepralla on omanlaisensa raidat."
            },

            {
                name: "Virtahepo",
                emoji: "🦛",
                home: "Virtahepo elää Afrikan joissa ja järvissä.",
                food: "Virtahepo syö pääasiassa ruohoa.",
                fact: "Virtahepo viettää paljon aikaa vedessä."
            }

        ]
    },


    {
        name: "Aasia",
        icon: "🌏",
        color: "#F6DFEA",

        description:
        "Aasia on maailman suurin maanosa. Siellä on korkeita vuoria, suuria metsiä, kuumia alueita ja kylmiä paikkoja.",

        fact:
        "Aasiassa sijaitsee maailman korkein vuori Mount Everest!",

        animals: [

            {
                name: "Panda",
                emoji: "🐼",
                home: "Panda elää Kiinan vuoristometsissä.",
                food: "Panda syö enimmäkseen bambua.",
                fact: "Panda voi syödä bambua monta tuntia päivässä."
            },

            {
                name: "Tiikeri",
                emoji: "🐯",
                home: "Tiikeri elää Aasian metsissä.",
                food: "Tiikeri syö lihaa.",
                fact: "Tiikerillä on kauniit mustat raidat oranssissa turkissaan."
            },

            {
                name: "Oranki",
                emoji: "🦧",
                home: "Oranki elää Kaakkois-Aasian sademetsissä.",
                food: "Oranki syö hedelmiä ja lehtiä.",
                fact: "Oranki viettää paljon aikaa puissa."
            },

            {
                name: "Kameli",
                emoji: "🐫",
                home: "Kameli elää kuivilla ja aavikkoalueilla.",
                food: "Kameli syö kasveja.",
                fact: "Kamelin kyttyrässä on rasvaa, jota se käyttää energiaksi."
            },

            {
                name: "Riikinkukko",
                emoji: "🦚",
                home: "Riikinkukko elää Etelä-Aasian metsissä ja avoimilla alueilla.",
                food: "Riikinkukko syö siemeniä, kasveja ja pieniä eläimiä.",
                fact: "Riikinkukon pyrstössä on upeita värikkäitä kuvioita."
            }

        ]
    },


    {
        name: "Eurooppa",
        icon: "🌍",
        color: "#DDECF9",

        description:
        "Euroopassa on paljon metsiä, järviä, vuoria ja niittyjä. Täällä elää monia eläimiä, joita voimme nähdä myös Suomessa.",

        fact:
        "Suomi sijaitsee Euroopassa!",

        animals: [

            {
                name: "Karhu",
                emoji: "🐻",
                home: "Karhu elää Euroopan metsissä.",
                food: "Karhu syö marjoja, kasveja ja pieniä eläimiä.",
                fact: "Karhu nukkuu talvella talviunta."
            },

            {
                name: "Kettu",
                emoji: "🦊",
                home: "Kettu elää metsissä ja maaseudulla.",
                food: "Kettu syö esimerkiksi hiiriä ja marjoja.",
                fact: "Ketulla on tuuhea häntä."
            },

            {
                name: "Susi",
                emoji: "🐺",
                home: "Susi elää Euroopan metsissä.",
                food: "Susi syö muita eläimiä.",
                fact: "Sudet voivat elää yhdessä laumoissa."
            },

            {
                name: "Siili",
                emoji: "🦔",
                home: "Siili elää puutarhoissa ja metsien reunoilla.",
                food: "Siili syö esimerkiksi hyönteisiä ja matoja.",
                fact: "Siilillä on selässään piikkejä."
            },

            {
                name: "Orava",
                emoji: "🐿️",
                home: "Orava elää Euroopan metsissä ja puistoissa.",
                food: "Orava syö siemeniä, pähkinöitä ja marjoja.",
                fact: "Orava osaa kiivetä taitavasti puissa."
            }

        ]
    },


    {
        name: "Pohjois-Amerikka",
        icon: "🌎",
        color: "#DCEDE5",

        description:
        "Pohjois-Amerikassa on suuria metsiä, korkeita vuoria, järviä ja laajoja tasankoja.",

        fact:
        "Pohjois-Amerikassa sijaitsee kuuluisa Grand Canyon -kanjoni!",

        animals: [

            {
                name: "Biisoni",
                emoji: "🦬",
                home: "Biisoni elää Pohjois-Amerikan niityillä.",
                food: "Biisoni syö ruohoa.",
                fact: "Biisonilla on suuri ja karvainen pää."
            },

            {
                name: "Majava",
                emoji: "🦫",
                home: "Majava elää jokien ja järvien lähellä.",
                food: "Majava syö puiden kuorta ja kasveja.",
                fact: "Majava rakentaa patoja puunrungoista."
            },

            {
                name: "Kotka",
                emoji: "🦅",
                home: "Kotka elää metsissä ja vuoristoissa.",
                food: "Kotka syö esimerkiksi kaloja ja pieniä eläimiä.",
                fact: "Kotkalla on erittäin hyvä näkö."
            },

            {
                name: "Pesukarhu",
                emoji: "🦝",
                home: "Pesukarhu elää metsissä ja kaupunkien lähellä.",
                food: "Pesukarhu syö hedelmiä, hyönteisiä ja muita pieniä eläimiä.",
                fact: "Pesukarhulla on silmien ympärillä tumma naamio."
            },

            {
                name: "Harmaakarhu",
                emoji: "🐻",
                home: "Harmaakarhu elää Pohjois-Amerikan metsissä ja vuoristoissa.",
                food: "Se syö marjoja, kalaa ja muita eläimiä.",
                fact: "Harmaakarhu voi olla todella suuri."
            }

        ]
    },


    {
        name: "Etelä-Amerikka",
        icon: "🌎",
        color: "#DDF0D8",

        description:
        "Etelä-Amerikassa on valtavia sademetsiä, korkeita vuoria ja pitkiä jokia. Amazonin sademetsä on täynnä elämää.",

        fact:
        "Amazonin sademetsä on yksi maailman suurimmista sademetsistä!",

        animals: [

            {
                name: "Laiskiainen",
                emoji: "🦥",
                home: "Laiskiainen elää Etelä-Amerikan sademetsissä.",
                food: "Laiskiainen syö lehtiä.",
                fact: "Laiskiainen liikkuu todella hitaasti ja viettää aikaa puissa."
            },

            {
                name: "Jaguaari",
                emoji: "🐆",
                home: "Jaguaari elää Etelä-Amerikan metsissä.",
                food: "Jaguaari syö lihaa.",
                fact: "Jaguarilla on täplikkään kaunis turkki."
            },

            {
                name: "Tukaani",
                emoji: "🐦",
                home: "Tukaani elää trooppisissa sademetsissä.",
                food: "Tukaani syö hedelmiä.",
                fact: "Tukaanilla on suuri ja värikäs nokka."
            },

            {
                name: "Kapibara",
                emoji: "🐹",
                home: "Kapibara elää Etelä-Amerikan vesistöjen lähellä.",
                food: "Kapibara syö ruohoa ja vesikasveja.",
                fact: "Kapibara on maailman suurin nykyään elävä jyrsijä."
            },

            {
                name: "Anakonda",
                emoji: "🐍",
                home: "Anakonda elää Etelä-Amerikan vesistöissä.",
                food: "Anakonda syö muita eläimiä.",
                fact: "Anakonda on todella suuri käärme."
            }

        ]
    },


    {
        name: "Australia ja Oseania",
        icon: "🌏",
        color: "#F9E7CC",

        description:
        "Australia ja Oseania tunnetaan erikoisista eläimistä, suurista aavikoista, metsistä ja kauniista saarista.",

        fact:
        "Monia Australian eläimiä ei luonnossa tavata missään muualla maailmassa!",

        animals: [

            {
                name: "Kenguru",
                emoji: "🦘",
                home: "Kenguru elää Australian avoimilla alueilla.",
                food: "Kenguru syö ruohoa ja muita kasveja.",
                fact: "Kenguru liikkuu hyppimällä ja sen poikaset kasvavat emon pussissa."
            },

            {
                name: "Koala",
                emoji: "🐨",
                home: "Koala elää Australian eukalyptusmetsissä.",
                food: "Koala syö eukalyptuksen lehtiä.",
                fact: "Koala nukkuu suuren osan päivästä."
            },

            {
                name: "Vompatti",
                emoji: "🐾",
                home: "Vompatti elää Australian metsissä ja niityillä.",
                food: "Vompatti syö ruohoa ja juuria.",
                fact: "Vompatti kaivaa maahan omia käytäviä."
            },

            {
                name: "Nokkasiili",
                emoji: "🦔",
                home: "Nokkasiili elää Australiassa ja Uudessa-Guineassa.",
                food: "Nokkasiili syö muurahaisia ja termiittejä.",
                fact: "Nokkasiili munii, vaikka se on nisäkäs."
            },

            {
                name: "Kiivi",
                emoji: "🐦",
                home: "Kiivilintu elää Uudessa-Seelannissa.",
                food: "Kiivi syö matoja ja pieniä hyönteisiä.",
                fact: "Kiivilintu ei osaa lentää."
            }

        ]
    },


    {
        name: "Etelämanner",
        icon: "🌍",
        color: "#DDEFFA",

        description:
        "Etelämanner on maapallon kylmin maanosa. Se on lähes kokonaan jään ja lumen peitossa.",

        fact:
        "Etelämantereella on niin kylmä, että siellä ei asu pysyvästi ihmisiä!",

        animals: [

            {
                name: "Pingviini",
                emoji: "🐧",
                home: "Monet pingviinit elävät Etelämantereella.",
                food: "Pingviini syö kalaa ja muita merieläimiä.",
                fact: "Pingviini ei osaa lentää, mutta se on taitava uimari."
            },

            {
                name: "Hylje",
                emoji: "🦭",
                home: "Hylkeitä elää Etelämantereen ympärillä.",
                food: "Hylje syö kalaa ja muita merieläimiä.",
                fact: "Hylje osaa uida todella hyvin."
            },

            {
                name: "Miekkavalas",
                emoji: "🐋",
                home: "Miekkavalaita elää myös Etelämantereen vesillä.",
                food: "Miekkavalas syö kaloja ja muita merieläimiä.",
                fact: "Miekkavalas on delfiinien heimoon kuuluva eläin."
            },

            {
                name: "Albatrossi",
                emoji: "🕊️",
                home: "Albatrosseja elää eteläisillä merialueilla.",
                food: "Albatrossi syö kaloja ja kalmareita.",
                fact: "Albatrossi osaa lentää todella pitkiä matkoja."
            }

        ]
    }

];


// ÄÄNIVISAN ELÄIMET

const quizAnimals = [

    {
        name: "Leijona",
        emoji: "🦁",
        sound: "aanet/leijona.mp3",
        options: ["Leijona", "Norsu", "Apina"]
    },

    {
        name: "Norsu",
        emoji: "🐘",
        sound: "aanet/norsu.mp3",
        options: ["Kirahvi", "Norsu", "Susi"]
    },

    {
        name: "Apina",
        emoji: "🐒",
        sound: "aanet/apina.mp3",
        options: ["Panda", "Kenguru", "Apina"]
    },

    {
        name: "Panda",
        emoji: "🐼",
        sound: "aanet/panda.mp3",
        options: ["Panda", "Tiikeri", "Kettu"]
    },

    {
        name: "Kenguru",
        emoji: "🦘",
        sound: "aanet/kenguru.mp3",
        options: ["Koala", "Kenguru", "Pingviini"]
    },

    {
        name: "Pingviini",
        emoji: "🐧",
        sound: "aanet/pingviini.mp3",
        options: ["Pingviini", "Hylje", "Karhu"]
    },

    {
        name: "Susi",
        emoji: "🐺",
        sound: "aanet/susi.mp3",
        options: ["Kettu", "Susi", "Orava"]
    }

];


// ======================================
// SIVUJEN VAIHTAMINEN
// ======================================

function showPage(pageId) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.add("hidden");
    });

    document.getElementById(pageId).classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

function showHome() {
    showPage("home");
}

function showMap() {
    renderContinents();
    showPage("map");
}

function showCollection() {
    renderCollection();
    showPage("collection");
}

function showQuiz() {
    showPage("quiz");

    if (!currentQuestion) {
        newQuestion();
    }
}


// ======================================
// TÄHTIEN TALLENTAMINEN
// ======================================

let explored = JSON.parse(
    localStorage.getItem("exploredContinents") || "[]"
);

function saveProgress() {

    localStorage.setItem(
        "exploredContinents",
        JSON.stringify(explored)
    );

}


// ======================================
// MAANOSIEN NÄYTTÄMINEN
// ======================================

function renderContinents() {

    const list = document.getElementById("continent-list");

    list.innerHTML = "";

    continents.forEach((continent, index) => {

        const visited = explored.includes(index);

        const card = document.createElement("div");

        card.className = "continent-card";
        card.style.background = continent.color;

        card.innerHTML = `

            <div class="continent-icon">
                ${continent.icon}
            </div>

            <h2>${continent.name}</h2>

            <p>${continent.description}</p>

            <div class="visited">
                ${visited ? "⭐ Tutkittu!" : "Tutustu eläimiin →"}
            </div>

        `;

        card.addEventListener("click", () => {
            openContinent(index);
        });

        list.appendChild(card);

    });

    renderStars();

}


// ======================================
// MAANOSAN AVAAMINEN
// ======================================

function openContinent(index) {

    const continent = continents[index];

    if (!explored.includes(index)) {

        explored.push(index);

        saveProgress();

    }

    const information = document.getElementById(
        "continent-information"
    );

    let animalHTML = "";

    continent.animals.forEach(animal => {

        animalHTML += `

            <div class="animal-card">

                <div class="animal-emoji">
                    ${animal.emoji}
                </div>

                <h3>${animal.name}</h3>

                <p>${animal.fact}</p>

                <div class="animal-detail">
                    <strong>Missä se asuu?</strong>
                    <p>${animal.home}</p>
                </div>

                <div class="animal-detail">
                    <strong>Mitä se syö?</strong>
                    <p>${animal.food}</p>
                </div>

            </div>

        `;

    });


    information.innerHTML = `

        <div class="continent-intro"
             style="background: ${continent.color}">

            <div style="font-size: 70px">
                ${continent.icon}
            </div>

            <h1>${continent.name}</h1>

            <p>${continent.description}</p>

        </div>

        <div class="continent-fact">

            <strong> Tiesitkö tämän? </strong>

            <p>${continent.fact}</p>

        </div>

        <h2 style="text-align:center">
            Tutustu tämän maanosan eläimiin!
        </h2>

        <div class="animal-grid">
            ${animalHTML}
        </div>

        <div style="text-align:center; padding:30px">

            <h2>Hienoa! Olet tutkinut maanosan!</h2>

            <p>Keräsit itsellesi yhden tähden!</p>

            <div style="font-size:65px">⭐</div>

            <button class="main-button"
                onclick="showMap()">

                TAKAISIN KARTTAAN

            </button>

        </div>

    `;

    renderStars();

    showPage("continent-page");

}


// ======================================
// TÄHTIEN NÄYTTÄMINEN
// ======================================

function renderStars() {

    const display = document.getElementById("star-display");

    display.innerHTML = "";

    continents.forEach((continent, index) => {

        const star = document.createElement("span");

        star.textContent = explored.includes(index) ? "⭐" : "☆";

        display.appendChild(star);

    });

    document.getElementById("progress-text").textContent =
        `Olet tutkinut ${explored.length} / 7 maanosaa.`;

}


// ======================================
// KERÄILYKOKOELMA
// ======================================

function renderCollection() {

    const list = document.getElementById("collection-list");

    list.innerHTML = "";

    continents.forEach((continent, index) => {

        const visited = explored.includes(index);

        const item = document.createElement("div");

        item.className = "collection-item";

        item.innerHTML = `

            <span>
                ${continent.name}
            </span>

            <span>
                ${visited ? "⭐" : "☆"}
            </span>

        `;

        list.appendChild(item);

    });

    const finish = document.getElementById("finish-message");

    if (explored.length === 7) {

        finish.innerHTML =
            "MAHTAVAA! Olet tutkinut kaikki seitsemän maanosaa! ⭐";

    } else {

        finish.innerHTML =
            `Sinulta puuttuu vielä ${7 - explored.length} tähteä!`;

    }

}


// ======================================
// ÄÄNIVISA
// ======================================

let currentQuestion = null;

let correctAnswers = 0;

let answered = false;

let currentAudio = null;


function newQuestion() {

    if (currentAudio) {
        currentAudio.pause();
        currentAudio = null;
    }

    answered = false;

    currentQuestion = quizAnimals[
        Math.floor(Math.random() * quizAnimals.length)
    ];

    document.getElementById("quiz-feedback").textContent = "";

    document.getElementById("next-question").classList.add("hidden");

    document.querySelector(".quiz-animal").textContent = "🐾";

    const answers = document.getElementById("quiz-answers");

    answers.innerHTML = "";

    const shuffled = [...currentQuestion.options].sort(
        () => Math.random() - 0.5
    );

    shuffled.forEach(answer => {

        const button = document.createElement("button");

        button.textContent = answer;

        button.addEventListener("click", () => {

            checkAnswer(answer, button);

        });

        answers.appendChild(button);

    });

}


// ======================================
// ÄÄNEN SOITTAMINEN
// ======================================

function playQuizSound() {

    if (!currentQuestion) {
        return;
    }

    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    currentAudio = new Audio(currentQuestion.sound);

    currentAudio.play().catch(() => {

        document.getElementById("quiz-feedback").textContent =
            "Ääntä ei löytynyt. Tarkista äänitiedostot!";

    });

}


// ======================================
// VASTAUKSEN TARKISTAMINEN
// ======================================

function checkAnswer(answer, button) {

    if (answered) {
        return;
    }

    answered = true;

    const feedback = document.getElementById("quiz-feedback");

    const buttons = document.querySelectorAll("#quiz-answers button");

    buttons.forEach(item => {
        item.disabled = true;
    });

    if (answer === currentQuestion.name) {

        correctAnswers++;

        feedback.textContent = "Hienoa! Oikea vastaus! ⭐";

        document.querySelector(".quiz-animal").textContent =
            currentQuestion.emoji;

        document.getElementById("score").textContent =
            correctAnswers;

        button.style.background = "#b9e7ae";

    } else {

        feedback.textContent =
            "Hyvä yritys! Oikea eläin oli " +
            currentQuestion.name + ".";

        button.style.background = "#f5c6c6";

    }

    document.getElementById("next-question").classList.remove("hidden");

}


// ======================================
// SIVUSTON KÄYNNISTYS
// ======================================

renderContinents();

renderStars();

renderCollection();

showHome();