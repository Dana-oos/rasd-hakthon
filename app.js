// Sample facility data.
// Later, this data can come from a database or API.

const facilities = [
    {
        id: 1,
        name: "مطعم مذاق الرياض",
        district: "العليا",
        type: "مطعم",
        latitude: 24.6909,
        longitude: 46.6853,
        priority: "high",
        riskScore: 92,
        violations: 5,
        complaints: 8,
        lastInspection: "منذ 9 أشهر",
        reason: "تعدد البلاغات ووجود مخالفات سابقة مع تأخر آخر زيارة."
    },
    {
        id: 2,
        name: "مخبز النخبة",
        district: "الملز",
        type: "مخبز",
        latitude: 24.6654,
        longitude: 46.7330,
        priority: "medium",
        riskScore: 67,
        violations: 2,
        complaints: 3,
        lastInspection: "منذ 5 أشهر",
        reason: "وجود بلاغات حديثة ومخالفتين سابقتين."
    },
    {
        id: 3,
        name: "أسواق الواحة",
        district: "الروضة",
        type: "سوبرماركت",
        latitude: 24.7357,
        longitude: 46.7702,
        priority: "low",
        riskScore: 28,
        violations: 0,
        complaints: 1,
        lastInspection: "منذ شهر",
        reason: "لا توجد مخالفات حديثة وآخر زيارة كانت قريبة."
    },
    {
        id: 4,
        name: "مطعم الساحة",
        district: "النسيم",
        type: "مطعم",
        latitude: 24.7482,
        longitude: 46.8188,
        priority: "high",
        riskScore: 88,
        violations: 4,
        complaints: 7,
        lastInspection: "منذ 11 شهرًا",
        reason: "ارتفاع عدد البلاغات وطول المدة منذ آخر تفتيش."
    },
    {
        id: 5,
        name: "كافيه لافندر",
        district: "النخيل",
        type: "مقهى",
        latitude: 24.7537,
        longitude: 46.6365,
        priority: "medium",
        riskScore: 61,
        violations: 1,
        complaints: 4,
        lastInspection: "منذ 6 أشهر",
        reason: "تزايد البلاغات خلال الفترة الأخيرة."
    },
    {
        id: 6,
        name: "تموينات الخير",
        district: "الشفا",
        type: "تموينات",
        latitude: 24.5663,
        longitude: 46.7041,
        priority: "low",
        riskScore: 22,
        violations: 0,
        complaints: 0,
        lastInspection: "منذ شهرين",
        reason: "سجل مستقر ولا توجد بلاغات حالية."
    },
    {
        id: 7,
        name: "مطابخ الذوق",
        district: "اليرموك",
        type: "مطبخ",
        latitude: 24.8093,
        longitude: 46.7698,
        priority: "high",
        riskScore: 84,
        violations: 3,
        complaints: 6,
        lastInspection: "منذ 8 أشهر",
        reason: "مخالفات متكررة وبلاغات مرتبطة بالنظافة."
    },
    {
        id: 8,
        name: "حلويات روز",
        district: "السويدي",
        type: "حلويات",
        latitude: 24.5960,
        longitude: 46.6665,
        priority: "medium",
        riskScore: 58,
        violations: 2,
        complaints: 2,
        lastInspection: "منذ 7 أشهر",
        reason: "مرور مدة طويلة نسبيًا منذ آخر زيارة."
    },
    {
        id: 9,
        name: "مطعم تلال نجد",
        district: "حطين",
        type: "مطعم",
        latitude: 24.7647,
        longitude: 46.6075,
        priority: "low",
        riskScore: 31,
        violations: 1,
        complaints: 0,
        lastInspection: "منذ 3 أشهر",
        reason: "مستوى البلاغات منخفض مع زيارة حديثة."
    },
    {
        id: 10,
        name: "بوفيه الصباح",
        district: "العزيزية",
        type: "بوفيه",
        latitude: 24.5968,
        longitude: 46.7712,
        priority: "high",
        riskScore: 81,
        violations: 4,
        complaints: 5,
        lastInspection: "منذ سنة",
        reason: "تأخر التفتيش ووجود عدة مخالفات سابقة."
    },
    {
        id: 11,
        name: "مركز الأغذية الطازجة",
        district: "قرطبة",
        type: "سوبرماركت",
        latitude: 24.8274,
        longitude: 46.7381,
        priority: "medium",
        riskScore: 64,
        violations: 2,
        complaints: 4,
        lastInspection: "منذ 5 أشهر",
        reason: "بلاغات جديدة تحتاج إلى التحقق الميداني."
    },
    {
        id: 12,
        name: "مخبز سنابل",
        district: "الدرعية",
        type: "مخبز",
        latitude: 24.7495,
        longitude: 46.5747,
        priority: "low",
        riskScore: 19,
        violations: 0,
        complaints: 0,
        lastInspection: "منذ شهر",
        reason: "سجل جيد ولا توجد مؤشرات خطورة حالية."
    },
    {
        id: 13,
        name: "مطعم المرجان",
        district: "الربوة",
        type: "مطعم",
        latitude: 24.6986,
        longitude: 46.7639,
        priority: "high",
        riskScore: 79,
        violations: 3,
        complaints: 5,
        lastInspection: "منذ 10 أشهر",
        reason: "تكرار المخالفات مع تأخر الزيارة الدورية."
    },
    {
        id: 14,
        name: "كافيه شمال",
        district: "الياسمين",
        type: "مقهى",
        latitude: 24.8298,
        longitude: 46.6418,
        priority: "low",
        riskScore: 26,
        violations: 0,
        complaints: 1,
        lastInspection: "منذ شهرين",
        reason: "بلاغ واحد فقط ولا توجد مخالفات مسجلة."
    },
    {
        id: 15,
        name: "مطعم السدو",
        district: "المونسية",
        type: "مطعم",
        latitude: 24.8228,
        longitude: 46.7818,
        priority: "medium",
        riskScore: 55,
        violations: 2,
        complaints: 2,
        lastInspection: "منذ 6 أشهر",
        reason: "يحتاج إلى متابعة دورية بناءً على سجله السابق."
    }
];

const priorityNames = {
    high: "عالية",
    medium: "متوسطة",
    low: "منخفضة"
};

const priorityColors = {
    high: "#df3e4d",
    medium: "#f19a2a",
    low: "#2da866"
};

// Riyadh coordinates

const riyadhLocation = [24.7136, 46.6753];

// Create the Leaflet map

const map = L.map("map", {
    zoomControl: false
}).setView(riyadhLocation, 11);

// Move zoom buttons to the left

L.control.zoom({
    position: "topleft"
}).addTo(map);

// Add OpenStreetMap tiles

L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        maxZoom: 19,
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }
).addTo(map);

// Layer that contains all facility markers

const markerLayer = L.layerGroup().addTo(map);

// Store markers so we can open them later

const markersById = new Map();

let selectedPriority = "all";
let searchValue = "";

// Create a different marker based on priority

function createMarkerIcon(priority) {
    return L.divIcon({
        className: `custom-map-marker ${priority}-marker`,
        html: '<div class="marker-pin"></div>',
        iconSize: [34, 42],
        iconAnchor: [17, 38],
        popupAnchor: [0, -37]
    });
}

// Create popup content

function createPopup(facility) {
    return `
        <div class="popup-content" dir="rtl">

            <h3>${facility.name}</h3>

            <span class="priority-label ${facility.priority}">
                الأولوية: ${priorityNames[facility.priority]}
            </span>

            <div class="popup-information">

                <div class="popup-box">
                    <span>درجة الخطورة</span>
                    <strong>${facility.riskScore}%</strong>
                </div>

                <div class="popup-box">
                    <span>الحي</span>
                    <strong>${facility.district}</strong>
                </div>

                <div class="popup-box">
                    <span>المخالفات السابقة</span>
                    <strong>${facility.violations}</strong>
                </div>

                <div class="popup-box">
                    <span>عدد البلاغات</span>
                    <strong>${facility.complaints}</strong>
                </div>

                <div class="popup-box" style="grid-column: 1 / -1">
                    <span>آخر تفتيش</span>
                    <strong>${facility.lastInspection}</strong>
                </div>

            </div>

            <div class="popup-reason">
                <strong>سبب التقييم:</strong>
                <br>
                ${facility.reason}
            </div>

        </div>
    `;
}

// Check whether a facility matches the current filters

function facilityMatchesFilters(facility) {
    const priorityMatches =
        selectedPriority === "all" ||
        facility.priority === selectedPriority;

    const fullText = `
        ${facility.name}
        ${facility.district}
        ${facility.type}
    `.toLowerCase();

    const searchMatches = fullText.includes(
        searchValue.toLowerCase()
    );

    return priorityMatches && searchMatches;
}

// Display markers

function displayMarkers() {
    markerLayer.clearLayers();
    markersById.clear();

    const visibleFacilities = facilities.filter(
        facilityMatchesFilters
    );

    visibleFacilities.forEach(function (facility) {
        const marker = L.marker(
            [facility.latitude, facility.longitude],
            {
                icon: createMarkerIcon(facility.priority),
                title: facility.name
            }
        );

        marker.bindPopup(
            createPopup(facility),
            {
                maxWidth: 310
            }
        );

        marker.addTo(markerLayer);

        markersById.set(facility.id, marker);
    });

    document.getElementById("visibleCount").textContent =
        visibleFacilities.length;

    if (visibleFacilities.length === 1) {
        const facility = visibleFacilities[0];

        map.setView(
            [facility.latitude, facility.longitude],
            15
        );

        const marker = markersById.get(facility.id);

        if (marker) {
            marker.openPopup();
        }
    }
}

// Filter buttons

const filterButtons =
    document.querySelectorAll(".filter-button");

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        selectedPriority = button.dataset.priority;

        filterButtons.forEach(function (otherButton) {
            otherButton.classList.remove("active");
        });

        button.classList.add("active");

        displayMarkers();
    });
});

// Search box

document
    .getElementById("searchInput")
    .addEventListener("input", function (event) {
        searchValue = event.target.value.trim();

        displayMarkers();
    });

// Reset map button

document
    .getElementById("resetButton")
    .addEventListener("click", function () {
        selectedPriority = "all";
        searchValue = "";

        document.getElementById("searchInput").value = "";

        filterButtons.forEach(function (button) {
            button.classList.remove("active");

            if (button.dataset.priority === "all") {
                button.classList.add("active");
            }
        });

        displayMarkers();

        map.setView(riyadhLocation, 11);
    });

// Update statistic cards

function updateStatistics() {
    const highCount = facilities.filter(
        facility => facility.priority === "high"
    ).length;

    const mediumCount = facilities.filter(
        facility => facility.priority === "medium"
    ).length;

    const lowCount = facilities.filter(
        facility => facility.priority === "low"
    ).length;

    document.getElementById("totalFacilities").textContent =
        facilities.length;

    document.getElementById("highFacilities").textContent =
        highCount;

    document.getElementById("mediumFacilities").textContent =
        mediumCount;

    document.getElementById("lowFacilities").textContent =
        lowCount;

    return {
        high: highCount,
        medium: mediumCount,
        low: lowCount
    };
}

// Create urgent facilities list

function displayUrgentFacilities() {
    const urgentFacilities = facilities
        .filter(facility => facility.priority === "high")
        .sort(
            (firstFacility, secondFacility) =>
                secondFacility.riskScore -
                firstFacility.riskScore
        )
        .slice(0, 5);

    const urgentContainer =
        document.getElementById("urgentFacilities");

    urgentContainer.innerHTML = urgentFacilities
        .map(function (facility) {
            return `
                <div class="urgent-item">

                    <div class="facility-details">
                        <strong>${facility.name}</strong>

                        <span>
                            ${facility.district}
                            •
                            ${facility.type}
                        </span>
                    </div>

                    <span class="score">
                        ${facility.riskScore}%
                    </span>

                    <button
                        class="location-button"
                        onclick="locateFacility(${facility.id})"
                    >
                        تحديد الموقع
                    </button>

                </div>
            `;
        })
        .join("");
}

// Find and open a facility on the map

function locateFacility(facilityId) {
    const facility = facilities.find(
        item => item.id === facilityId
    );

    if (!facility) {
        return;
    }

    selectedPriority = "all";
    searchValue = "";

    document.getElementById("searchInput").value = "";

    filterButtons.forEach(function (button) {
        button.classList.remove("active");

        if (button.dataset.priority === "all") {
            button.classList.add("active");
        }
    });

    displayMarkers();

    setTimeout(function () {
        map.setView(
            [facility.latitude, facility.longitude],
            15
        );

        const marker = markersById.get(facilityId);

        if (marker) {
            marker.openPopup();
        }

        document.querySelector(".map-card").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }, 150);
}

// Make the function available to HTML buttons

window.locateFacility = locateFacility;

// Show only high-priority facilities

document
    .getElementById("showHighButton")
    .addEventListener("click", function () {
        selectedPriority = "high";

        filterButtons.forEach(function (button) {
            button.classList.remove("active");

            if (button.dataset.priority === "high") {
                button.classList.add("active");
            }
        });

        displayMarkers();

        document.querySelector(".map-card").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });

// Display risk reasons

function displayRiskReasons() {
    const reasons = [
        {
            title: "البلاغات المتكررة",
            percentage: 82
        },
        {
            title: "المخالفات السابقة",
            percentage: 74
        },
        {
            title: "طول المدة منذ آخر تفتيش",
            percentage: 66
        },
        {
            title: "طبيعة النشاط عالية الخطورة",
            percentage: 48
        }
    ];

    const reasonsContainer =
        document.getElementById("riskReasons");

    reasonsContainer.innerHTML = reasons
        .map(function (reason) {
            return `
                <div class="reason-item">

                    <div class="reason-header">
                        <span>${reason.title}</span>
                        <span>${reason.percentage}%</span>
                    </div>

                    <div class="progress-background">
                        <div
                            class="progress-value"
                            style="width: ${reason.percentage}%"
                        ></div>
                    </div>

                </div>
            `;
        })
        .join("");
}

// Create charts

function createCharts(counts) {
    Chart.defaults.font.family = "Tajawal";
    Chart.defaults.color = "#6e7b78";

    // Priority distribution chart

    new Chart(
        document.getElementById("priorityChart"),
        {
            type: "doughnut",

            data: {
                labels: [
                    "عالية",
                    "متوسطة",
                    "منخفضة"
                ],

                datasets: [
                    {
                        data: [
                            counts.high,
                            counts.medium,
                            counts.low
                        ],

                        backgroundColor: [
                            priorityColors.high,
                            priorityColors.medium,
                            priorityColors.low
                        ],

                        borderColor: "#ffffff",
                        borderWidth: 5,
                        hoverOffset: 7
                    }
                ]
            },

            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: "67%",

                plugins: {
                    legend: {
                        position: "bottom",
                        rtl: true,

                        labels: {
                            usePointStyle: true,
                            pointStyle: "circle",
                            padding: 20
                        }
                    },

                    tooltip: {
                        rtl: true
                    }
                }
            }
        }
    );

    // Count high-priority facilities by district

    const highPriorityByDistrict = {};

    facilities
        .filter(facility => facility.priority === "high")
        .forEach(function (facility) {
            if (!highPriorityByDistrict[facility.district]) {
                highPriorityByDistrict[facility.district] = 0;
            }

            highPriorityByDistrict[facility.district]++;
        });

    const districtNames =
        Object.keys(highPriorityByDistrict);

    const districtValues =
        Object.values(highPriorityByDistrict);

    // District bar chart

    new Chart(
        document.getElementById("districtChart"),
        {
            type: "bar",

            data: {
                labels: districtNames,

                datasets: [
                    {
                        label: "منشآت عالية الأولوية",
                        data: districtValues,
                        backgroundColor: "rgba(223, 62, 77, 0.78)",
                        borderRadius: 8,
                        borderSkipped: false,
                        maxBarThickness: 48
                    }
                ]
            },

            options: {
                responsive: true,
                maintainAspectRatio: false,

                plugins: {
                    legend: {
                        display: false
                    },

                    tooltip: {
                        rtl: true
                    }
                },

                scales: {
                    x: {
                        grid: {
                            display: false
                        }
                    },

                    y: {
                        beginAtZero: true,

                        ticks: {
                            stepSize: 1,
                            precision: 0
                        },

                        grid: {
                            color: "#edf1f0"
                        }
                    }
                }
            }
        }
    );
}

// Start the page

const counts = updateStatistics();

displayMarkers();
displayUrgentFacilities();
displayRiskReasons();
createCharts(counts);