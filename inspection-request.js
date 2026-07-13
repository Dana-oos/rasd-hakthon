const facilities = [
    {
        id: "FAC-1024",
        name: "مطعم مذاق الرياض",
        type: "مطعم",
        district: "العليا",
        priority: "high",
        priorityName: "عالية",
        riskScore: 92,
        complaints: 8,
        violations: 5,
        reason:
            "تعدد البلاغات ووجود مخالفات سابقة مع تأخر آخر زيارة تفتيشية."
    },

    {
        id: "FAC-1047",
        name: "مخبز النخبة",
        type: "مخبز",
        district: "الملز",
        priority: "medium",
        priorityName: "متوسطة",
        riskScore: 67,
        complaints: 3,
        violations: 2,
        reason:
            "وجود بلاغات حديثة ومخالفتين سابقتين تحتاجان إلى المتابعة."
    },

    {
        id: "FAC-1059",
        name: "مطعم الساحة",
        type: "مطعم",
        district: "النسيم",
        priority: "high",
        priorityName: "عالية",
        riskScore: 88,
        complaints: 7,
        violations: 4,
        reason:
            "ارتفاع عدد البلاغات وطول المدة منذ آخر تفتيش."
    },

    {
        id: "FAC-1071",
        name: "كافيه لافندر",
        type: "مقهى",
        district: "النخيل",
        priority: "medium",
        priorityName: "متوسطة",
        riskScore: 61,
        complaints: 4,
        violations: 1,
        reason:
            "تزايد عدد البلاغات خلال الفترة الأخيرة."
    },

    {
        id: "FAC-1090",
        name: "مطابخ الذوق",
        type: "مطبخ",
        district: "اليرموك",
        priority: "high",
        priorityName: "عالية",
        riskScore: 84,
        complaints: 6,
        violations: 3,
        reason:
            "وجود مخالفات متكررة وبلاغات مرتبطة بالنظافة."
    },

    {
        id: "FAC-1113",
        name: "بوفيه الصباح",
        type: "بوفيه",
        district: "العزيزية",
        priority: "high",
        priorityName: "عالية",
        riskScore: 81,
        complaints: 5,
        violations: 4,
        reason:
            "تأخر التفتيش ووجود عدة مخالفات سابقة."
    },

    {
        id: "FAC-1126",
        name: "أسواق الواحة",
        type: "سوبرماركت",
        district: "الروضة",
        priority: "low",
        priorityName: "منخفضة",
        riskScore: 28,
        complaints: 1,
        violations: 0,
        reason:
            "لا توجد مخالفات حديثة وآخر زيارة تفتيشية كانت قريبة."
    },

    {
        id: "FAC-1140",
        name: "حلويات روز",
        type: "حلويات",
        district: "السويدي",
        priority: "medium",
        priorityName: "متوسطة",
        riskScore: 58,
        complaints: 2,
        violations: 2,
        reason:
            "مرور مدة طويلة نسبيًا منذ آخر زيارة تفتيشية."
    },

    {
        id: "FAC-1152",
        name: "تموينات الخير",
        type: "تموينات",
        district: "الشفا",
        priority: "low",
        priorityName: "منخفضة",
        riskScore: 22,
        complaints: 0,
        violations: 0,
        reason:
            "سجل المنشأة مستقر ولا توجد بلاغات حالية."
    },

    {
        id: "FAC-1167",
        name: "مطعم تلال نجد",
        type: "مطعم",
        district: "حطين",
        priority: "low",
        priorityName: "منخفضة",
        riskScore: 31,
        complaints: 0,
        violations: 1,
        reason:
            "عدد البلاغات منخفض مع وجود زيارة تفتيشية حديثة."
    }
];

let inspectionRequests = [
    {
        id: 1,
        requestNumber: "INS-2026-0148",
        facilityName: "مطعم مذاق الرياض",
        facilityId: "FAC-1024",
        district: "العليا",
        inspectionType: "تفتيش عاجل",
        urgency: "عاجل جدًا",
        status: "scheduled",
        statusName: "تمت الجدولة",
        submittedDate: "12 يوليو 2026",
        proposedDate: "15 يوليو 2026",
        inspector: "المفتش محمد",
        team: "فريق التفتيش أ",

        reason:
            "تم تسجيل عدة بلاغات على المنشأة بالإضافة إلى وجود مخالفات سابقة وتأخر آخر زيارة تفتيشية.",

        timeline: [
            {
                title: "تم إرسال الطلب",
                date: "12 يوليو 2026 — 10:30 صباحًا",
                state: "completed",
                note:
                    "تم إرسال الطلب بنجاح إلى قسم المراجعة."
            },

            {
                title: "الطلب قيد المراجعة",
                date: "12 يوليو 2026 — 11:15 صباحًا",
                state: "completed",
                note:
                    "تمت مراجعة معلومات المنشأة وسبب طلب التفتيش."
            },

            {
                title: "تمت الموافقة على الطلب",
                date: "13 يوليو 2026 — 9:00 صباحًا",
                state: "completed",
                note:
                    "تمت الموافقة من مشرف التفتيش."
            },

            {
                title: "تمت جدولة الزيارة",
                date: "15 يوليو 2026 — 8:30 صباحًا",
                state: "current",
                note:
                    "تم تعيين فريق التفتيش أ لتنفيذ الزيارة."
            },

            {
                title: "تنفيذ الزيارة التفتيشية",
                date: "في انتظار التنفيذ",
                state: "upcoming"
            },

            {
                title: "إغلاق الطلب",
                date: "في انتظار اكتمال التفتيش",
                state: "upcoming"
            }
        ]
    },

    {
        id: 2,
        requestNumber: "INS-2026-0142",
        facilityName: "مطابخ الذوق",
        facilityId: "FAC-1090",
        district: "اليرموك",
        inspectionType: "تفتيش بسبب بلاغ",
        urgency: "عاجل جدًا",
        status: "review",
        statusName: "قيد المراجعة",
        submittedDate: "11 يوليو 2026",
        proposedDate: "14 يوليو 2026",
        inspector: "المفتش محمد",
        team: "غير محدد",

        reason:
            "وردت عدة بلاغات تتعلق بالنظافة وسلامة تخزين الأغذية.",

        timeline: [
            {
                title: "تم إرسال الطلب",
                date: "11 يوليو 2026 — 1:20 مساءً",
                state: "completed"
            },

            {
                title: "الطلب قيد المراجعة",
                date: "11 يوليو 2026 — 2:00 مساءً",
                state: "current",
                note:
                    "يقوم المشرف حاليًا بمراجعة معلومات الطلب."
            },

            {
                title: "الموافقة على الطلب",
                date: "في انتظار المراجعة",
                state: "upcoming"
            },

            {
                title: "جدولة الزيارة",
                date: "لم يتم التحديد",
                state: "upcoming"
            },

            {
                title: "تنفيذ الزيارة التفتيشية",
                date: "لم يتم التحديد",
                state: "upcoming"
            }
        ]
    },

    {
        id: 3,
        requestNumber: "INS-2026-0139",
        facilityName: "مخبز النخبة",
        facilityId: "FAC-1047",
        district: "الملز",
        inspectionType: "متابعة مخالفة سابقة",
        urgency: "متوسط",
        status: "approved",
        statusName: "تمت الموافقة",
        submittedDate: "9 يوليو 2026",
        proposedDate: "16 يوليو 2026",
        inspector: "المفتش محمد",
        team: "غير محدد",

        reason:
            "متابعة الإجراءات التصحيحية الخاصة بالمخالفات المسجلة في الزيارة السابقة.",

        timeline: [
            {
                title: "تم إرسال الطلب",
                date: "9 يوليو 2026 — 9:10 صباحًا",
                state: "completed"
            },

            {
                title: "الطلب قيد المراجعة",
                date: "9 يوليو 2026 — 10:00 صباحًا",
                state: "completed"
            },

            {
                title: "تمت الموافقة على الطلب",
                date: "10 يوليو 2026 — 12:30 مساءً",
                state: "current",
                note:
                    "تمت الموافقة ويجري حاليًا تحديد فريق التفتيش."
            },

            {
                title: "جدولة الزيارة",
                date: "في انتظار تحديد الفريق",
                state: "upcoming"
            },

            {
                title: "تنفيذ الزيارة التفتيشية",
                date: "لم يتم التحديد",
                state: "upcoming"
            }
        ]
    },

    {
        id: 4,
        requestNumber: "INS-2026-0127",
        facilityName: "كافيه لافندر",
        facilityId: "FAC-1071",
        district: "النخيل",
        inspectionType: "تفتيش دوري",
        urgency: "عادي",
        status: "completed",
        statusName: "مكتمل",
        submittedDate: "2 يوليو 2026",
        proposedDate: "5 يوليو 2026",
        inspector: "المفتش محمد",
        team: "فريق التفتيش ب",

        reason:
            "زيارة تفتيشية دورية للتحقق من الالتزام بالاشتراطات البلدية.",

        timeline: [
            {
                title: "تم إرسال الطلب",
                date: "2 يوليو 2026 — 8:45 صباحًا",
                state: "completed"
            },

            {
                title: "تمت الموافقة",
                date: "2 يوليو 2026 — 11:00 صباحًا",
                state: "completed"
            },

            {
                title: "تمت جدولة الزيارة",
                date: "5 يوليو 2026 — 9:00 صباحًا",
                state: "completed"
            },

            {
                title: "تم تنفيذ الزيارة",
                date: "5 يوليو 2026 — 10:15 صباحًا",
                state: "completed",
                note:
                    "تم تنفيذ الزيارة وتسجيل نتائج التفتيش."
            },

            {
                title: "تم إغلاق الطلب",
                date: "5 يوليو 2026 — 2:00 مساءً",
                state: "completed",
                note:
                    "تم إغلاق الطلب بعد رفع تقرير التفتيش."
            }
        ]
    },

    {
        id: 5,
        requestNumber: "INS-2026-0121",
        facilityName: "بوفيه الصباح",
        facilityId: "FAC-1113",
        district: "العزيزية",
        inspectionType: "إعادة تفتيش",
        urgency: "متوسط",
        status: "rejected",
        statusName: "مرفوض",
        submittedDate: "29 يونيو 2026",
        proposedDate: "3 يوليو 2026",
        inspector: "المفتش محمد",
        team: "غير محدد",

        reason:
            "طلب إعادة تفتيش المنشأة للتحقق من معالجة المخالفات السابقة.",

        timeline: [
            {
                title: "تم إرسال الطلب",
                date: "29 يونيو 2026 — 10:00 صباحًا",
                state: "completed"
            },

            {
                title: "الطلب قيد المراجعة",
                date: "29 يونيو 2026 — 11:10 صباحًا",
                state: "completed"
            },

            {
                title: "تم رفض الطلب",
                date: "30 يونيو 2026 — 9:30 صباحًا",
                state: "rejected",
                note:
                    "تم إجراء زيارة تفتيشية للمنشأة خلال الأسبوع الحالي، لذلك لا توجد حاجة إلى زيارة جديدة."
            }
        ]
    }
];

let selectedFacility = null;
let selectedRequestId = null;
let attachments = [];

/* Elements */

const facilitySearchInput =
    document.getElementById("facilitySearchInput");

const facilitySearchResults =
    document.getElementById("facilitySearchResults");

const selectedFacilityIdInput =
    document.getElementById("selectedFacilityId");

const clearFacilityButton =
    document.getElementById("clearFacilityButton");

const inspectionType =
    document.getElementById("inspectionType");

const urgencyLevel =
    document.getElementById("urgencyLevel");

const inspectionDate =
    document.getElementById("inspectionDate");

const requestReason =
    document.getElementById("requestReason");

const inspectionForm =
    document.getElementById("inspectionForm");

const successModal =
    document.getElementById("successModal");

/* Tabs */

document
    .querySelectorAll(".tab-button")
    .forEach(function (button) {

        button.addEventListener("click", function () {

            openTab(button.dataset.tab);

        });

    });

function openTab(tabId) {

    document
        .querySelectorAll(".tab-button")
        .forEach(function (button) {

            button.classList.toggle(
                "active",
                button.dataset.tab === tabId
            );

        });

    document
        .querySelectorAll(".tab-content")
        .forEach(function (content) {

            content.classList.toggle(
                "active",
                content.id === tabId
            );

        });

}

/* Facility search */

facilitySearchInput.addEventListener(
    "input",
    function () {

        const searchValue =
            facilitySearchInput.value
                .trim()
                .toLowerCase();

        if (
            selectedFacility &&
            facilitySearchInput.value !== selectedFacility.name
        ) {

            clearSelectedFacility(false);

        }

        clearFacilityButton.classList.toggle(
            "hidden",
            searchValue.length === 0
        );

        if (searchValue.length < 2) {

            hideFacilitySearchResults();

            return;

        }

        const matchingFacilities =
            facilities.filter(function (facility) {

                const searchableText = `
                    ${facility.name}
                    ${facility.id}
                    ${facility.district}
                    ${facility.type}
                `.toLowerCase();

                return searchableText.includes(searchValue);

            });

        displayFacilitySearchResults(
            matchingFacilities
        );

    }
);

facilitySearchInput.addEventListener(
    "focus",
    function () {

        const searchValue =
            facilitySearchInput.value
                .trim()
                .toLowerCase();

        if (
            searchValue.length >= 2 &&
            !selectedFacility
        ) {

            const matchingFacilities =
                facilities.filter(function (facility) {

                    const searchableText = `
                        ${facility.name}
                        ${facility.id}
                        ${facility.district}
                        ${facility.type}
                    `.toLowerCase();

                    return searchableText.includes(searchValue);

                });

            displayFacilitySearchResults(
                matchingFacilities
            );

        }

    }
);

function displayFacilitySearchResults(
    matchingFacilities
) {

    facilitySearchResults.classList.remove(
        "hidden"
    );

    if (matchingFacilities.length === 0) {

        facilitySearchResults.innerHTML = `
            <div class="no-search-results">
                لم يتم العثور على منشأة مطابقة.
            </div>
        `;

        return;

    }

    facilitySearchResults.innerHTML =
        matchingFacilities
            .map(function (facility) {

                return `
                    <button
                        type="button"
                        class="facility-search-result"
                        onclick="selectFacility('${facility.id}')"
                    >

                        <div class="result-main">

                            <strong>
                                ${facility.name}
                            </strong>

                            <span>
                                ${facility.id}
                                •
                                ${facility.type}
                                •
                                ${facility.district}
                            </span>

                        </div>

                        <span
                            class="result-priority ${facility.priority}"
                        >
                            ${facility.priorityName}
                        </span>

                    </button>
                `;

            })
            .join("");

}

function hideFacilitySearchResults() {

    facilitySearchResults.classList.add(
        "hidden"
    );

    facilitySearchResults.innerHTML = "";

}

function selectFacility(facilityId) {

    selectedFacility =
        facilities.find(function (facility) {

            return facility.id === facilityId;

        });

    if (!selectedFacility) {
        return;
    }

    selectedFacilityIdInput.value =
        selectedFacility.id;

    facilitySearchInput.value =
        selectedFacility.name;

    clearFacilityButton.classList.remove(
        "hidden"
    );

    hideFacilitySearchResults();

    displaySelectedFacility(
        selectedFacility
    );

}

window.selectFacility = selectFacility;

function displaySelectedFacility(facility) {

    const informationBox =
        document.getElementById(
            "facilityInformation"
        );

    informationBox.classList.remove(
        "hidden"
    );

    document.getElementById(
        "facilityName"
    ).textContent = facility.name;

    document.getElementById(
        "facilityId"
    ).textContent = facility.id;

    document.getElementById(
        "facilityType"
    ).textContent = facility.type;

    document.getElementById(
        "facilityDistrict"
    ).textContent = facility.district;

    document.getElementById(
        "facilityScore"
    ).textContent = facility.riskScore + "%";

    document.getElementById(
        "facilityComplaints"
    ).textContent = facility.complaints;

    document.getElementById(
        "facilityViolations"
    ).textContent = facility.violations;

    document.getElementById(
        "facilityReason"
    ).textContent = facility.reason;

    const priorityBadge =
        document.getElementById(
            "facilityPriority"
        );

    priorityBadge.textContent =
        "أولوية " + facility.priorityName;

    priorityBadge.className =
        "priority-badge " + facility.priority;

    document.getElementById(
        "summaryFacility"
    ).textContent = facility.name;

    if (requestReason.value.trim() === "") {

        requestReason.value = facility.reason;

        updateReasonCounter();

    }

}

clearFacilityButton.addEventListener(
    "click",
    function () {

        clearSelectedFacility(true);

        facilitySearchInput.focus();

    }
);

function clearSelectedFacility(
    clearSearchText = true
) {

    selectedFacility = null;

    selectedFacilityIdInput.value = "";

    if (clearSearchText) {

        facilitySearchInput.value = "";

    }

    clearFacilityButton.classList.toggle(
        "hidden",
        facilitySearchInput.value.length === 0
    );

    hideFacilitySearchResults();

    document
        .getElementById("facilityInformation")
        .classList.add("hidden");

    document.getElementById(
        "summaryFacility"
    ).textContent = "لم يتم الاختيار";

}

document.addEventListener(
    "click",
    function (event) {

        const clickedInsideSearch =
            event.target.closest(
                ".facility-search-wrapper"
            );

        if (!clickedInsideSearch) {

            hideFacilitySearchResults();

        }

    }
);

/* Request summary */

inspectionType.addEventListener(
    "change",
    updateRequestSummary
);

urgencyLevel.addEventListener(
    "change",
    updateRequestSummary
);

inspectionDate.addEventListener(
    "change",
    updateRequestSummary
);

function updateRequestSummary() {

    document.getElementById(
        "summaryType"
    ).textContent =
        getSelectedText(inspectionType);

    document.getElementById(
        "summaryUrgency"
    ).textContent =
        getSelectedText(urgencyLevel);

    document.getElementById(
        "summaryDate"
    ).textContent =
        inspectionDate.value
            ? formatDate(inspectionDate.value)
            : "غير محدد";

}

/* Character counter */

requestReason.addEventListener(
    "input",
    updateReasonCounter
);

function updateReasonCounter() {

    document.getElementById(
        "reasonCounter"
    ).textContent =
        requestReason.value.length;

}

/* Attachments */

document
    .getElementById("requestAttachments")
    .addEventListener(
        "change",
        function (event) {

            const selectedFiles =
                Array.from(event.target.files);

            const validFiles =
                selectedFiles.filter(function (file) {

                    const maximumSize =
                        10 * 1024 * 1024;

                    if (file.size > maximumSize) {

                        alert(
                            "الملف " +
                            file.name +
                            " أكبر من 10 MB."
                        );

                        return false;

                    }

                    return true;

                });

            attachments = [
                ...attachments,
                ...validFiles
            ];

            renderAttachments();

            event.target.value = "";

        }
    );

function renderAttachments() {

    const attachmentsList =
        document.getElementById(
            "attachmentsList"
        );

    attachmentsList.innerHTML =
        attachments
            .map(function (file, index) {

                return `
                    <div class="attachment-item">

                        <span>
                            📎 ${file.name}
                        </span>

                        <button
                            type="button"
                            onclick="removeAttachment(${index})"
                        >
                            حذف
                        </button>

                    </div>
                `;

            })
            .join("");

}

function removeAttachment(index) {

    attachments.splice(index, 1);

    renderAttachments();

}

window.removeAttachment = removeAttachment;

/* Save draft */

document
    .getElementById("saveDraftButton")
    .addEventListener(
        "click",
        function () {

            if (!selectedFacility) {

                alert(
                    "يرجى البحث عن المنشأة واختيارها من النتائج."
                );

                facilitySearchInput.focus();

                return;

            }

            const requestNumber =
                generateRequestNumber();

            const newDraft = {
                id: Date.now(),
                requestNumber: requestNumber,
                facilityName: selectedFacility.name,
                facilityId: selectedFacility.id,
                district: selectedFacility.district,
                inspectionType:
                    getSelectedText(inspectionType),
                urgency:
                    getSelectedText(urgencyLevel),
                status: "draft",
                statusName: "مسودة",
                submittedDate: "لم يتم الإرسال",
                proposedDate:
                    inspectionDate.value
                        ? formatDate(
                            inspectionDate.value
                        )
                        : "غير محدد",
                inspector: "المفتش محمد",
                team:
                    getSelectedText(
                        document.getElementById(
                            "assignedTeam"
                        )
                    ),
                reason:
                    requestReason.value.trim() ||
                    "لم تتم إضافة سبب بعد.",

                timeline: [
                    {
                        title:
                            "تم حفظ الطلب كمسودة",
                        date: "اليوم",
                        state: "current",
                        note:
                            "لم يتم إرسال الطلب للمراجعة حتى الآن."
                    }
                ]
            };

            inspectionRequests.unshift(
                newDraft
            );

            updateRequestsTotal();

            renderRequests();

            alert(
                "تم حفظ الطلب كمسودة.\nرقم الطلب: " +
                requestNumber
            );

        }
    );

/* Submit request */

inspectionForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        if (!selectedFacility) {

            alert(
                "يرجى البحث عن المنشأة واختيارها من النتائج."
            );

            facilitySearchInput.focus();

            return;

        }

        if (
            !inspectionType.value ||
            !urgencyLevel.value ||
            !inspectionDate.value ||
            requestReason.value.trim() === ""
        ) {

            alert(
                "يرجى تعبئة جميع الحقول المطلوبة."
            );

            return;

        }

        const requestNumber =
            generateRequestNumber();

        const newRequest = {
            id: Date.now(),
            requestNumber: requestNumber,
            facilityName: selectedFacility.name,
            facilityId: selectedFacility.id,
            district: selectedFacility.district,
            inspectionType:
                getSelectedText(inspectionType),
            urgency:
                getSelectedText(urgencyLevel),
            status: "submitted",
            statusName: "تم الإرسال",
            submittedDate: "اليوم",
            proposedDate:
                formatDate(inspectionDate.value),
            inspector: "المفتش محمد",
            team:
                getSelectedText(
                    document.getElementById(
                        "assignedTeam"
                    )
                ),
            reason: requestReason.value.trim(),

            timeline: [
                {
                    title: "تم إرسال الطلب",
                    date: "اليوم — الآن",
                    state: "current",
                    note:
                        "تم إرسال الطلب بنجاح إلى قسم المراجعة."
                },

                {
                    title: "الطلب قيد المراجعة",
                    date: "في انتظار المراجعة",
                    state: "upcoming"
                },

                {
                    title: "الموافقة على الطلب",
                    date: "لم يتم التحديد",
                    state: "upcoming"
                },

                {
                    title: "جدولة الزيارة",
                    date: "لم يتم التحديد",
                    state: "upcoming"
                },

                {
                    title:
                        "تنفيذ الزيارة التفتيشية",
                    date: "لم يتم التحديد",
                    state: "upcoming"
                },

                {
                    title: "إغلاق الطلب",
                    date: "لم يتم التحديد",
                    state: "upcoming"
                }
            ]
        };

        inspectionRequests.unshift(
            newRequest
        );

        selectedRequestId = newRequest.id;

        document.getElementById(
            "submittedRequestNumber"
        ).textContent = requestNumber;

        successModal.classList.remove(
            "hidden"
        );

        updateRequestsTotal();

        renderRequests();

        resetForm();

    }
);

/* Success modal */

document
    .getElementById("closeModalButton")
    .addEventListener(
        "click",
        function () {

            successModal.classList.add(
                "hidden"
            );

            openTab("trackRequests");

            const submittedRequest =
                inspectionRequests.find(
                    function (request) {

                        return (
                            request.id ===
                            selectedRequestId
                        );

                    }
                );

            renderRequests();

            if (submittedRequest) {

                displayRequestDetails(
                    submittedRequest
                );

            }

        }
    );

successModal.addEventListener(
    "click",
    function (event) {

        if (event.target === successModal) {

            successModal.classList.add(
                "hidden"
            );

        }

    }
);

/* Cancel form */

document
    .getElementById("cancelButton")
    .addEventListener(
        "click",
        function () {

            const shouldReset =
                confirm(
                    "هل تريد إلغاء الطلب ومسح البيانات المدخلة؟"
                );

            if (shouldReset) {

                resetForm();

            }

        }
    );

function resetForm() {

    inspectionForm.reset();

    attachments = [];

    renderAttachments();

    clearSelectedFacility(true);

    document.getElementById(
        "summaryType"
    ).textContent = "غير محدد";

    document.getElementById(
        "summaryUrgency"
    ).textContent = "غير محددة";

    document.getElementById(
        "summaryDate"
    ).textContent = "غير محدد";

    updateReasonCounter();

}

/* Request searching and filtering */

document
    .getElementById("requestSearch")
    .addEventListener(
        "input",
        renderRequests
    );

document
    .getElementById("statusFilter")
    .addEventListener(
        "change",
        renderRequests
    );

function renderRequests() {

    const searchValue =
        document
            .getElementById("requestSearch")
            .value
            .trim()
            .toLowerCase();

    const selectedStatus =
        document
            .getElementById("statusFilter")
            .value;

    const filteredRequests =
        inspectionRequests.filter(
            function (request) {

                const searchableText = `
                    ${request.requestNumber}
                    ${request.facilityName}
                    ${request.facilityId}
                    ${request.district}
                    ${request.inspectionType}
                `.toLowerCase();

                const matchesSearch =
                    searchableText.includes(
                        searchValue
                    );

                const matchesStatus =
                    selectedStatus === "all" ||
                    request.status ===
                        selectedStatus;

                return (
                    matchesSearch &&
                    matchesStatus
                );

            }
        );

    const requestsList =
        document.getElementById(
            "requestsList"
        );

    if (filteredRequests.length === 0) {

        requestsList.innerHTML = `
            <div class="request-card">

                <div class="empty-state">

                    <h3>
                        لا توجد طلبات
                    </h3>

                    <p>
                        لا توجد طلبات تطابق البحث
                        أو الفلتر المختار.
                    </p>

                </div>

            </div>
        `;

        return;

    }

    requestsList.innerHTML =
        filteredRequests
            .map(function (request) {

                const selectedClass =
                    selectedRequestId ===
                    request.id
                        ? "selected"
                        : "";

                return `
                    <article
                        class="request-card ${selectedClass}"
                        onclick="selectRequest(${request.id})"
                    >

                        <div class="request-card-top">

                            <span class="request-number">
                                ${request.requestNumber}
                            </span>

                            <span
                                class="request-status ${request.status}"
                            >
                                ${request.statusName}
                            </span>

                        </div>

                        <h3>
                            ${request.facilityName}
                        </h3>

                        <div class="request-card-description">

                            ${request.inspectionType}
                            •
                            ${request.district}

                        </div>

                        <div class="request-card-bottom">

                            <span>
                                تاريخ الإرسال:
                                ${request.submittedDate}
                            </span>

                            <span>
                                الموعد المقترح:
                                ${request.proposedDate}
                            </span>

                        </div>

                    </article>
                `;

            })
            .join("");

}

function selectRequest(requestId) {

    selectedRequestId = requestId;

    const selectedRequest =
        inspectionRequests.find(
            function (request) {

                return request.id === requestId;

            }
        );

    renderRequests();

    if (selectedRequest) {

        displayRequestDetails(
            selectedRequest
        );

    }

}

window.selectRequest = selectRequest;

/* Request details and timeline */

function displayRequestDetails(request) {

    const requestDetails =
        document.getElementById(
            "requestDetails"
        );

    requestDetails.innerHTML = `
        <div class="details-header">

            <div>

                <span class="details-request-number">
                    ${request.requestNumber}
                </span>

                <h2>
                    ${request.facilityName}
                </h2>

            </div>

            <span
                class="request-status ${request.status}"
            >
                ${request.statusName}
            </span>

        </div>

        <div class="details-grid">

            <div class="detail-box">
                <span>رقم المنشأة</span>
                <strong>${request.facilityId}</strong>
            </div>

            <div class="detail-box">
                <span>الحي</span>
                <strong>${request.district}</strong>
            </div>

            <div class="detail-box">
                <span>نوع التفتيش</span>
                <strong>${request.inspectionType}</strong>
            </div>

            <div class="detail-box">
                <span>درجة الاستعجال</span>
                <strong>${request.urgency}</strong>
            </div>

            <div class="detail-box">
                <span>المفتش</span>
                <strong>${request.inspector}</strong>
            </div>

            <div class="detail-box">
                <span>فريق التفتيش</span>
                <strong>${request.team}</strong>
            </div>

        </div>

        <div class="request-reason-box">

            <span>
                سبب طلب التفتيش
            </span>

            <p>
                ${request.reason}
            </p>

        </div>

        <h3 class="timeline-title">
            حالة الطلب
        </h3>

        <div class="timeline">

            ${request.timeline
                .map(function (item) {

                    return `
                        <div
                            class="timeline-item ${item.state}"
                        >

                            <div class="timeline-dot"></div>

                            <div class="timeline-content">

                                <h4>
                                    ${item.title}
                                </h4>

                                <p>
                                    ${item.date}
                                </p>

                                ${
                                    item.note
                                        ? `
                                            <div class="timeline-note">
                                                ${item.note}
                                            </div>
                                        `
                                        : ""
                                }

                            </div>

                        </div>
                    `;

                })
                .join("")}

        </div>
    `;

}

/* Helper functions */

function generateRequestNumber() {

    const randomNumber =
        Math.floor(
            1000 + Math.random() * 9000
        );

    return (
        "INS-" +
        new Date().getFullYear() +
        "-" +
        randomNumber
    );

}

function getSelectedText(selectElement) {

    if (
        !selectElement.value ||
        selectElement.selectedIndex < 0
    ) {

        return "غير محدد";

    }

    return selectElement.options[
        selectElement.selectedIndex
    ].text;

}

function formatDate(dateValue) {

    if (!dateValue) {

        return "غير محدد";

    }

    const date =
        new Date(
            dateValue + "T00:00:00"
        );

    return new Intl.DateTimeFormat(
        "ar-SA",
        {
            year: "numeric",
            month: "long",
            day: "numeric"
        }
    ).format(date);

}

function updateRequestsTotal() {

    document.getElementById(
        "requestsTotal"
    ).textContent =
        inspectionRequests.length;

}

/* Prevent selecting a date before today */

const today =
    new Date()
        .toISOString()
        .split("T")[0];

inspectionDate.min = today;

/* Start page */

updateRequestsTotal();

renderRequests();

updateReasonCounter();