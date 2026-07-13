// ======================================================
// Sample restaurant data
// 2 high priority
// 2 medium priority
// 3 low priority
// ======================================================

const facilities = [
    {
        id: 1,
        facilityNumber: "FAC-1024",
        name: "مطعم مذاق الرياض",
        district: "العليا",
        type: "مطعم",
        lat: 24.6909,
        lng: 46.6853,
        priority: "high",
        score: 92,
        violations: 5,
        complaints: 8,
        lastInspection: "منذ 9 أشهر",
        reason:
            "تعدد البلاغات ووجود مخالفات سابقة مع تأخر آخر زيارة تفتيشية."
    },

    {
        id: 2,
        facilityNumber: "FAC-1059",
        name: "مطعم الساحة",
        district: "النسيم",
        type: "مطعم",
        lat: 24.7482,
        lng: 46.8188,
        priority: "high",
        score: 87,
        violations: 4,
        complaints: 7,
        lastInspection: "منذ 11 شهرًا",
        reason:
            "ارتفاع عدد البلاغات وطول المدة منذ آخر زيارة تفتيشية."
    },

    {
        id: 3,
        facilityNumber: "FAC-1047",
        name: "مخبز النخبة",
        district: "الملز",
        type: "مخبز",
        lat: 24.6654,
        lng: 46.7330,
        priority: "medium",
        score: 66,
        violations: 2,
        complaints: 3,
        lastInspection: "منذ 5 أشهر",
        reason:
            "وجود بلاغات حديثة ومخالفات سابقة تحتاج إلى المتابعة."
    },

    {
        id: 4,
        facilityNumber: "FAC-1071",
        name: "كافيه لافندر",
        district: "النخيل",
        type: "مقهى",
        lat: 24.7537,
        lng: 46.6365,
        priority: "medium",
        score: 59,
        violations: 1,
        complaints: 4,
        lastInspection: "منذ 6 أشهر",
        reason:
            "تزايد عدد البلاغات خلال الفترة الأخيرة."
    },

    {
        id: 5,
        facilityNumber: "FAC-1126",
        name: "أسواق الواحة",
        district: "الروضة",
        type: "سوبرماركت",
        lat: 24.7357,
        lng: 46.7702,
        priority: "low",
        score: 28,
        violations: 0,
        complaints: 1,
        lastInspection: "منذ شهر",
        reason:
            "لا توجد مخالفات حديثة وآخر زيارة تفتيشية كانت قريبة."
    },

    {
        id: 6,
        facilityNumber: "FAC-1152",
        name: "تموينات الخير",
        district: "الشفا",
        type: "تموينات",
        lat: 24.5663,
        lng: 46.7041,
        priority: "low",
        score: 22,
        violations: 0,
        complaints: 0,
        lastInspection: "منذ شهرين",
        reason:
            "سجل المنشأة مستقر ولا توجد بلاغات حالية."
    },

    {
        id: 7,
        facilityNumber: "FAC-1167",
        name: "مطعم تلال نجد",
        district: "حطين",
        type: "مطعم",
        lat: 24.7647,
        lng: 46.6075,
        priority: "low",
        score: 31,
        violations: 1,
        complaints: 0,
        lastInspection: "منذ 3 أشهر",
        reason:
            "عدد البلاغات منخفض مع وجود زيارة تفتيشية حديثة."
    }
];

// ======================================================
// Priority labels and colors
// ======================================================

const priorityLabels = {
    high: "عالية",
    medium: "متوسطة",
    low: "منخفضة"
};

const priorityColors = {
    high: "#d94a3d",
    medium: "#e99a36",
    low: "#4d9a68"
};

// ======================================================
// Create Riyadh map
// ======================================================

const riyadhCoordinates = [24.7136, 46.6753];

const map = L.map("map", {
    zoomControl: false,
    minZoom: 9
}).setView(riyadhCoordinates, 11);

L.control.zoom({
    position: "topleft"
}).addTo(map);

L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        maxZoom: 19,
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }
).addTo(map);

// Layer containing all restaurant markers

const markerLayer = L.layerGroup().addTo(map);

// Used to find markers later

const markerLookup = new Map();

// Current filters

let selectedPriority = "all";
let searchTerm = "";

// ======================================================
// Create custom marker
// ======================================================

function createMarkerIcon(priority) {
    return L.divIcon({
        className: `custom-marker marker-${priority}`,
        html: '<div class="marker-pin"></div>',
        iconSize: [34, 42],
        iconAnchor: [17, 38],
        popupAnchor: [0, -37]
    });
}

// ======================================================
// Create popup content
// ======================================================

function createPopupContent(facility) {
    return `
        <div class="popup-card" dir="rtl">

            <h4>${facility.name}</h4>

            <span class="popup-priority ${facility.priority}">
                الأولوية: ${priorityLabels[facility.priority]}
            </span>

            <div class="popup-grid">

                <div class="popup-metric">
                    <span>رقم المنشأة</span>
                    <strong>${facility.facilityNumber}</strong>
                </div>

                <div class="popup-metric">
                    <span>درجة الخطورة</span>
                    <strong>${facility.score}%</strong>
                </div>

                <div class="popup-metric">
                    <span>الحي</span>
                    <strong>${facility.district}</strong>
                </div>

                <div class="popup-metric">
                    <span>نوع النشاط</span>
                    <strong>${facility.type}</strong>
                </div>

                <div class="popup-metric">
                    <span>المخالفات السابقة</span>
                    <strong>${facility.violations}</strong>
                </div>

                <div class="popup-metric">
                    <span>عدد البلاغات</span>
                    <strong>${facility.complaints}</strong>
                </div>

                <div
                    class="popup-metric"
                    style="grid-column: 1 / -1"
                >
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

// ======================================================
// Filter facilities
// ======================================================

function facilityMatchesFilters(facility) {
    const matchesPriority =
        selectedPriority === "all" ||
        facility.priority === selectedPriority;

    const searchableText = `
        ${facility.name}
        ${facility.facilityNumber}
        ${facility.district}
        ${facility.type}
    `.toLowerCase();

    const matchesSearch = searchableText.includes(
        searchTerm.toLowerCase()
    );

    return matchesPriority && matchesSearch;
}

// ======================================================
// Display map markers
// ======================================================

function renderMarkers() {
    markerLayer.clearLayers();
    markerLookup.clear();

    const visibleFacilities = facilities.filter(
        facilityMatchesFilters
    );

    visibleFacilities.forEach(function (facility) {
        const marker = L.marker(
            [facility.lat, facility.lng],
            {
                icon: createMarkerIcon(facility.priority),
                title: facility.name
            }
        );

        marker.bindPopup(
            createPopupContent(facility),
            {
                maxWidth: 320
            }
        );

        marker.addTo(markerLayer);

        markerLookup.set(facility.id, marker);
    });

    document.getElementById("visibleCount").textContent =
        visibleFacilities.length;

    // If the search returns only one restaurant,
    // zoom to it automatically.

    if (visibleFacilities.length === 1) {
        const facility = visibleFacilities[0];

        map.setView(
            [facility.lat, facility.lng],
            15
        );

        const marker = markerLookup.get(facility.id);

        if (marker) {
            marker.openPopup();
        }
    }
}

// ======================================================
// Priority filter buttons
// ======================================================

const filterButtons =
    document.querySelectorAll(".filter-chip");

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        selectedPriority = button.dataset.priority;

        filterButtons.forEach(function (otherButton) {
            otherButton.classList.remove("active");
        });

        button.classList.add("active");

        renderMarkers();
    });
});

// ======================================================
// Search field
// ======================================================

document
    .getElementById("facilitySearch")
    .addEventListener("input", function (event) {
        searchTerm = event.target.value.trim();

        renderMarkers();
    });

// ======================================================
// Reset map
// ======================================================

document
    .getElementById("resetMap")
    .addEventListener("click", function () {
        selectedPriority = "all";
        searchTerm = "";

        document.getElementById("facilitySearch").value = "";

        filterButtons.forEach(function (button) {
            button.classList.remove("active");

            if (button.dataset.priority === "all") {
                button.classList.add("active");
            }
        });

        renderMarkers();

        map.setView(riyadhCoordinates, 11);
    });

// ======================================================
// Dashboard statistics
// ======================================================

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

// ======================================================
// Display urgent restaurants
// ======================================================

function renderUrgentFacilities() {
    const urgentFacilities = facilities
        .filter(
            facility => facility.priority === "high"
        )
        .sort(
            (firstFacility, secondFacility) =>
                secondFacility.score -
                firstFacility.score
        );

    document.getElementById("urgentList").innerHTML =
        urgentFacilities
            .map(function (facility) {
                return `
                    <div class="urgent-item">

                        <div class="facility-main">

                            <strong>
                                ${facility.name}
                            </strong>

                            <span>
                                ${facility.district}
                                •
                                ${facility.type}
                                •
                                ${facility.facilityNumber}
                            </span>

                        </div>

                        <span class="score-badge">
                            ${facility.score}%
                        </span>

                        <button
                            class="locate-button"
                            onclick="locateFacility(${facility.id})"
                        >
                            تحديد الموقع
                        </button>

                    </div>
                `;
            })
            .join("");
}

// ======================================================
// Locate restaurant on map
// ======================================================

function locateFacility(facilityId) {
    const facility = facilities.find(
        item => item.id === facilityId
    );

    if (!facility) {
        return;
    }

    selectedPriority = "all";
    searchTerm = "";

    document.getElementById("facilitySearch").value = "";

    filterButtons.forEach(function (button) {
        button.classList.remove("active");

        if (button.dataset.priority === "all") {
            button.classList.add("active");
        }
    });

    renderMarkers();

    setTimeout(function () {
        map.setView(
            [facility.lat, facility.lng],
            15
        );

        const marker = markerLookup.get(facilityId);

        if (marker) {
            marker.openPopup();
        }

        document.querySelector(".map-card").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }, 150);
}

window.locateFacility = locateFacility;

// ======================================================
// Show only high-priority restaurants
// ======================================================

document
    .getElementById("showHighOnly")
    .addEventListener("click", function () {
        selectedPriority = "high";

        filterButtons.forEach(function (button) {
            button.classList.remove("active");

            if (button.dataset.priority === "high") {
                button.classList.add("active");
            }
        });

        renderMarkers();

        document.querySelector(".map-card").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });

// ======================================================
// Risk reasons
// These numbers are calculated from the same facilities.
// ======================================================

function renderRiskReasons() {
    const facilitiesWithComplaints = facilities.filter(
        facility => facility.complaints > 0
    ).length;

    const facilitiesWithViolations = facilities.filter(
        facility => facility.violations > 0
    ).length;

    const highScoreFacilities = facilities.filter(
        facility => facility.score >= 70
    ).length;

    const delayedFacilities = facilities.filter(
        facility =>
            facility.lastInspection.includes("9 أشهر") ||
            facility.lastInspection.includes("11 شهر")
    ).length;

    const total = facilities.length;

    const reasons = [
        {
            label: "وجود بلاغات مسجلة",
            value: Math.round(
                (facilitiesWithComplaints / total) * 100
            )
        },

        {
            label: "وجود مخالفات سابقة",
            value: Math.round(
                (facilitiesWithViolations / total) * 100
            )
        },

        {
            label: "ارتفاع درجة الخطورة",
            value: Math.round(
                (highScoreFacilities / total) * 100
            )
        },

        {
            label: "تأخر آخر زيارة تفتيشية",
            value: Math.round(
                (delayedFacilities / total) * 100
            )
        }
    ];

    document.getElementById("riskReasons").innerHTML =
        reasons
            .map(function (reason) {
                return `
                    <div class="reason-item">

                        <div class="reason-top">

                            <span>
                                ${reason.label}
                            </span>

                            <span>
                                ${reason.value}%
                            </span>

                        </div>

                        <div class="reason-track">

                            <div
                                class="reason-fill"
                                style="width: ${reason.value}%"
                            ></div>

                        </div>

                    </div>
                `;
            })
            .join("");
}

// ======================================================
// Charts
// ======================================================

function createCharts(counts) {
    Chart.defaults.font.family = "Tajawal";
    Chart.defaults.color = "#806b63";

    // Priority doughnut chart

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
                        rtl: true,

                        callbacks: {
                            label: function (context) {
                                return (
                                    " " +
                                    context.label +
                                    ": " +
                                    context.raw +
                                    " منشأة"
                                );
                            }
                        }
                    }
                }
            }
        }
    );

    // Count high-priority restaurants by district

    const highPriorityByDistrict = {};

    facilities
        .filter(
            facility =>
                facility.priority === "high"
        )
        .forEach(function (facility) {
            if (
                !highPriorityByDistrict[
                    facility.district
                ]
            ) {
                highPriorityByDistrict[
                    facility.district
                ] = 0;
            }

            highPriorityByDistrict[
                facility.district
            ]++;
        });

    const districtNames =
        Object.keys(highPriorityByDistrict);

    const districtValues =
        Object.values(highPriorityByDistrict);

    // High-priority district bar chart

    new Chart(
        document.getElementById("districtChart"),
        {
            type: "bar",

            data: {
                labels: districtNames,

                datasets: [
                    {
                        label:
                            "منشآت عالية الأولوية",

                        data: districtValues,

                        backgroundColor:
                            "rgba(217, 74, 61, 0.80)",

                        borderRadius: 8,
                        borderSkipped: false,
                        maxBarThickness: 55
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
                        rtl: true,

                        callbacks: {
                            label: function (context) {
                                return (
                                    context.raw +
                                    " منشأة عالية الأولوية"
                                );
                            }
                        }
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

                        suggestedMax: 2,

                        ticks: {
                            stepSize: 1,
                            precision: 0
                        },

                        grid: {
                            color: "#f0e8e4"
                        }
                    }
                }
            }
        }
    );
}

// ======================================================
// Start page
// ======================================================

const priorityCounts = updateStatistics();

renderMarkers();

renderUrgentFacilities();

renderRiskReasons();

createCharts(priorityCounts);