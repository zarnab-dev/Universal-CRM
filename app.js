/**
 * ==========================================================================
 * CENTRALIZED APPLICATION STATE DATA MATRIX & HYDRATION LAYER
 * ==========================================================================
 */

const APP_STATE = {
    currentView: 'login-view',
    currentPanel: 'panel-home',
    
    // Identity Framework Parameters
    identity: {
        fullName: "Zarnab Laeeq-ur-Rehman",
        email: "admin@nexus.com",
        phone: "+92 (42) 3555-8910",
        bio: "Responsible for managing enterprise structural databases, overseeing global client onboarding pipelines, optimizing system telemetry routing, and provisioning cryptographic deployment validation gates.",
        companyName: "NexusCRM Global Networks",
        companyEmail: "ops@nexus.com",
        companyPhone: "+1 (555) 019-2831",
        companyWebsite: "https://nexus-matrix.io",
        companyAddress: "Suite 404, Tech Logistics Corridor, Layer 1 Engine Hub",
        timeZone: "Pakistan Standard Time (PKT) - UTC+5",
        currency: "PKR (Rs) - Pakistani Rupee",
        language: "English (Global Architecture)"
    },

    // Dynamic Collections Engine Core Arrays
    customers: [
        { id: 1, name: "Acme Analytics Corp", email: "billing@acme.io", segment: "Enterprise SLA", status: "Active" },
        { id: 2, name: "Synergy Global Logistics", email: "ops@synergy.net", segment: "Mid-Market Growth", status: "Active" },
        { id: 3, name: "Apex Cryptographic Systems", email: "secops@apex.io", segment: "Enterprise SLA", status: "Under Review" },
        { id: 4, name: "Vortex Labs Inc", email: "contact@vortex.dev", segment: "Startup Scale", status: "Suspended" }
    ],
    employees: [
        { id: 1, name: "Sarah Jenkins", role: "Lead Cloud Engineer", dept: "Engineering Department", email: "s.jenkins@nexus.com", phone: "+1 (555) 391-4402" },
        { id: 2, name: "Tariq Mahmood", role: "Database Infrastructure Specialist", dept: "Data Operations", email: "t.mahmood@nexus.com", phone: "+92 (42) 3991-0021" },
        { id: 3, name: "Elena Rostova", role: "SLA Account Director", dept: "Client Success Unit", email: "e.rostova@nexus.com", phone: "+1 (555) 821-9934" }
    ],
    tasks: [
        { id: 1, title: "Database Optimization Routine", desc: "Execute column indexes optimization across core transaction logs to minimize latency overhead.", priority: "CRITICAL", progress: 65, assignee: "Tariq Mahmood", date: "2026-07-15" },
        { id: 2, title: "Provision Cryptographic Deployment Gateways", desc: "Deploy automated token authorization gates for staging node routing compliance verification.", priority: "HIGH", progress: 40, assignee: "Sarah Jenkins", date: "2026-07-19" },
        { id: 3, title: "Execute SLA Client Performance Diagnostics", desc: "Compile throughput metrics audit profiles for Acme Analytics framework verification cycle.", priority: "MEDIUM", progress: 90, assignee: "Elena Rostova", date: "2026-07-12" }
    ],
    meetings: [
        { id: 1, title: "Quarterly Structural Review", date: "2026-07-10", time: "14:00", type: "Secure Video Link" },
        { id: 2, title: "Acme Onboarding Diagnostics Sync", date: "2026-07-14", time: "10:30", type: "Internal Physical Suite" },
        { id: 3, title: "Cryptographic Gate Validation Lock", date: "2026-07-19", time: "16:15", type: "Direct Audio Encrypted" }
    ],

    // Calendar Matrix Traversal Coordinates
    calendarContext: {
        activeYear: 2026,
        activeMonth: 6 // Zero-indexed (July)
    }
};

/**
 * ==========================================================================
 * ROUTING ARCHITECTURE & COGNITIVE CONTROLLER INITIALIZATION
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
    initializeLocalDataEngine();
    syncUIVisualRepresentations();
    bindFormSubmissionEventHandlers();
    initDashboardCharts();
});

function initializeLocalDataEngine() {
    if (!localStorage.getItem('NEXUS_CRM_STATE_ENG_V5')) {
        saveStateToLocalStorage();
    } else {
        try {
            const data = localStorage.getItem('NEXUS_CRM_STATE_ENG_V5');
            const parsed = JSON.parse(data);
            APP_STATE.identity = parsed.identity || APP_STATE.identity;
            APP_STATE.customers = parsed.customers || APP_STATE.customers;
            APP_STATE.employees = parsed.employees || APP_STATE.employees;
            APP_STATE.tasks = parsed.tasks || APP_STATE.tasks;
            APP_STATE.meetings = parsed.meetings || APP_STATE.meetings;
        } catch (e) {
            console.error("Local schema corrupted, running dynamic architecture fallback execution.", e);
        }
    }
    
    // Default Calendar parameters synced to real-world clock time index fallback
    const currentDateObj = new Date();
    APP_STATE.calendarContext.activeYear = currentDateObj.getFullYear();
    APP_STATE.calendarContext.activeMonth = currentDateObj.getMonth();
}

function saveStateToLocalStorage() {
    localStorage.setItem('NEXUS_CRM_STATE_ENG_V5', JSON.stringify({
        identity: APP_STATE.identity,
        customers: APP_STATE.customers,
        employees: APP_STATE.employees,
        tasks: APP_STATE.tasks,
        meetings: APP_STATE.meetings
    }));
}

function navigateTo(viewId) {
    APP_STATE.currentView = viewId;
    document.getElementById('login-view').style.display = (viewId === 'login-view') ? 'flex' : 'none';
    document.getElementById('dashboard-view').style.display = (viewId === 'dashboard-view') ? 'flex' : 'none';
    
    if (viewId === 'dashboard-view') {
        switchPanel(APP_STATE.currentPanel);
    }
}

function switchPanel(panelId) {
    APP_STATE.currentPanel = panelId;
    
    // Remove active layout tags across all panels
    document.querySelectorAll('.app-view-panel-container').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.nav-item-btn').forEach(btn => btn.classList.remove('active'));
    
    // Display target panel element
    const activePanel = document.getElementById(panelId);
    if (activePanel) {
        activePanel.style.display = 'block';
    }
    
    // Sync nav links display highlights
    const matchingBtn = document.querySelector(`.nav-item-btn[data-panel="${panelId}"]`);
    if (matchingBtn) {
        matchingBtn.classList.add('active');
    }
    
    // Collapse dynamic mobile navigation panels
    document.getElementById('sidebar-panel').classList.remove('mobile-visible');
    
    // Run content updates inside target segments
    renderTargetPanelModules(panelId);
}

function toggleMobileSidebar() {
    document.getElementById('sidebar-panel').classList.toggle('mobile-visible');
}

function toggleNotificationPanel() {
    document.getElementById('notification-sliding-panel').classList.toggle('tray-active-state');
}

/**
 * ==========================================================================
 * DYNAMIC CONTENT RENDERING MODULE ENGINES
 * ==========================================================================
 */

function renderTargetPanelModules(panelId) {
    syncMetricsSummaryCounters();
    
    switch (panelId) {
        case 'panel-home':
            // Recalculate metrics summary views
            break;
        case 'panel-customers':
            renderCustomerDatabaseMatrix();
            break;
        case 'panel-employees':
            renderEmployeeDatabaseMatrix();
            break;
        case 'panel-tasks':
            renderTaskOperationsWorkspace();
            break;
        case 'panel-calendar':
            renderChronosCalendarMeshGrid();
            break;
        case 'panel-settings':
            hydrateSettingsFormValues();
            break;
        case 'panel-profile':
            hydrateIdentityLedgerFormValues();
            break;
    }
}

function syncMetricsSummaryCounters() {
    document.getElementById('stat-customer-count').innerText = APP_STATE.customers.length;
    document.getElementById('stat-employee-count').innerText = APP_STATE.employees.length;
    document.getElementById('stat-task-count').innerText = APP_STATE.tasks.filter(t => t.progress < 100).length;
    document.getElementById('stat-meeting-count').innerText = APP_STATE.meetings.length;
}

function syncUIVisualRepresentations() {
    // Identity label text arrays update
    document.getElementById('sidebar-user-name').innerText = APP_STATE.identity.fullName;
    document.getElementById('navbar-username-lbl').innerText = APP_STATE.identity.fullName.split(' ')[0] + '.';
    
    // Check local profile imagery parameters
    const storedAvatar = localStorage.getItem('NEXUS_AVATAR_URI');
    if (storedAvatar) {
        document.getElementById('sidebar-avatar').src = storedAvatar;
        document.getElementById('navbar-avatar').src = storedAvatar;
        document.getElementById('profile-avatar-display').src = storedAvatar;
        document.getElementById('profile-avatar-url-input').value = storedAvatar;
    }
}

/**
 * CUSTOMER ENGINE CONTROLLER
 */
function renderCustomerDatabaseMatrix() {
    const target = document.getElementById('customer-rows-target');
    if (!target) return;
    
    if (APP_STATE.customers.length === 0) {
        target.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 40px;">No operational client entries localized inside cluster.</td></tr>`;
        return;
    }
    
    target.innerHTML = APP_STATE.customers.map(cust => {
        let badgeType = 'b-active';
        if (cust.status === 'Suspended') badgeType = 'b-suspended';
        if (cust.status === 'Under Review') badgeType = 'b-review';

        // Hash code representation avatar generator
        const pseudoSeed = encodeURIComponent(cust.name);
        
        return `
            <tr>
                <td>
                    <div class="table-identity-flex-block">
                        <img class="table-avatar-asset" src="https://api.dicebear.com/7.x/initials/svg?seed=${pseudoSeed}&backgroundColor=9b4d5a,23181a" alt="Corp Entity">
                        <div class="table-identity-text">
                            <h5>${cust.name}</h5>
                            <p>ID: #NX-00${cust.id}</p>
                        </div>
                    </div>
                </td>
                <td><span style="font-family: monospace; font-size:13px;">${cust.email}</span></td>
                <td><span style="font-weight:600; font-size:13px; color:var(--text-secondary);">${cust.segment}</span></td>
                <td><span class="sys-badge ${badgeType}">${cust.status}</span></td>
                <td>
                    <div class="table-action-button-group">
                        <button class="action-trigger-mini-btn" onclick="openEditCustomerModal(${cust.id})" title="Modify Entity Profile"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button class="action-trigger-mini-btn b-del" onclick="deleteCustomerRecord(${cust.id})" title="Purge Record"><i class="fa-solid fa-trash-can"></i></button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

function filterCustomerTable() {
    const query = document.getElementById('customer-search-input').value.toLowerCase();
    const segmentFilter = document.getElementById('customer-segment-filter').value;
    const statusFilter = document.getElementById('customer-status-filter').value;
    
    const rows = document.querySelectorAll('#customer-rows-target tr');
    
    APP_STATE.customers.forEach((cust, index) => {
        const row = rows[index];
        if (!row) return;
        
        const matchesQuery = cust.name.toLowerCase().includes(query) || cust.email.toLowerCase().includes(query);
        const matchesSegment = segmentFilter === "" || cust.segment === segmentFilter;
        const matchesStatus = statusFilter === "" || cust.status === statusFilter;
        
        if (matchesQuery && matchesSegment && matchesStatus) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

/**
 * OPERATOR / HUMAN CAPITAL REGISTRY ENGINE
 */
function renderEmployeeDatabaseMatrix() {
    const target = document.getElementById('employee-rows-target');
    if (!target) return;
    
    if (APP_STATE.employees.length === 0) {
        target.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 40px;">No operational operators authenticated inside index.</td></tr>`;
        return;
    }
    
    target.innerHTML = APP_STATE.employees.map(emp => {
        const pseudoSeed = encodeURIComponent(emp.name);
        return `
            <tr>
                <td>
                    <div class="table-identity-flex-block">
                        <img class="table-avatar-asset" src="https://api.dicebear.com/7.x/avataaars/svg?seed=${pseudoSeed}" alt="Operator Avatar">
                        <div class="table-identity-text">
                            <h5>${emp.name}</h5>
                            <p>ID: #OP-${100 + emp.id}</p>
                        </div>
                    </div>
                </td>
                <td><span style="font-weight: 500;">${emp.role}</span></td>
                <td><span class="sys-badge p-medium" style="text-transform:none;">${emp.dept}</span></td>
                <td><span style="font-family: monospace; font-size:13px;">${emp.email}</span></td>
                <td><span style="font-size:13px; color:var(--text-secondary);">${emp.phone || 'N/A'}</span></td>
                <td>
                    <div class="table-action-button-group">
                        <button class="action-trigger-mini-btn" onclick="openEditEmployeeModal(${emp.id})"><i class="fa-solid fa-user-pen"></i></button>
                        <button class="action-trigger-mini-btn b-del" onclick="deleteEmployeeRecord(${emp.id})"><i class="fa-solid fa-user-minus"></i></button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

/**
 * TASK OPERATIONS BACKLOG (KANBAN STYLE PROJECT MANAGEMENT CARDS)
 */
function renderTaskOperationsWorkspace() {
    const target = document.getElementById('task-cards-target');
    if (!target) return;
    
    if (APP_STATE.tasks.length === 0) {
        target.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 60px; background: #fff; border-radius: var(--radius-lg); border: 1px dashed var(--border-color); color: var(--text-muted);">No task execution pipelines current mapped in system state matrix.</div>`;
        return;
    }
    
    target.innerHTML = APP_STATE.tasks.map(task => {
        let pClass = 'p-low';
        if (task.priority === 'CRITICAL') pClass = 'p-critical';
        if (task.priority === 'HIGH') pClass = 'p-high';
        if (task.priority === 'MEDIUM') pClass = 'p-medium';
        
        const pseudoSeed = encodeURIComponent(task.assignee);
        
        return `
            <div class="premium-task-node-card">
                <div class="task-card-top-row">
                    <h4 class="task-card-title-string">${task.title}</h4>
                    <span class="sys-badge ${pClass}">${task.priority}</span>
                </div>
                
                <p class="task-card-body-description">${task.desc}</p>
                
                <div class="task-progress-gauge-box">
                    <div class="task-progress-gauge-labels">
                        <span>Execution Metric</span>
                        <span>${task.progress}%</span>
                    </div>
                    <div class="task-progress-bar-track">
                        <div class="task-progress-bar-fill-index" style="width: ${task.progress}%;"></div>
                    </div>
                </div>
                
                <div class="task-card-bottom-row">
                    <div class="table-identity-flex-block">
                        <img class="table-avatar-asset" style="width:28px; height:28px;" src="https://api.dicebear.com/7.x/avataaars/svg?seed=${pseudoSeed}" alt="Assignee">
                        <span style="font-size:12.5px; font-weight:600; color:var(--text-secondary);">${task.assignee}</span>
                    </div>
                    <span class="task-card-due-tag"><i class="fa-solid fa-calendar-day"></i> ${task.date}</span>
                </div>
                
                <div class="table-action-button-group" style="border-top: 1px solid var(--border-light); padding-top:10px;">
                    <button class="action-trigger-mini-btn" onclick="openEditTaskModal(${task.id})"><i class="fa-solid fa-sliders"></i></button>
                    <button class="action-trigger-mini-btn b-del" onclick="deleteTaskRecord(${task.id})"><i class="fa-solid fa-circle-minus"></i></button>
                </div>
            </div>
        `;
    }).join('');
}

/**
 * CHRONOS CALENDAR FRAMEWORK SYSTEM ENGINE
 */
function renderChronosCalendarMeshGrid() {
    const target = document.getElementById('calendar-days-grid-target');
    const label = document.getElementById('calendar-month-year-label');
    if (!target) return;
    
    const year = APP_STATE.calendarContext.activeYear;
    const month = APP_STATE.calendarContext.activeMonth;
    
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    label.innerText = `${monthNames[month]} ${year}`;
    
    // Matrix structural mapping math rules
    const firstDayIndex = new Date(year, month, 1).getDay();
    const totalDaysInMonth = new Date(year, month + 1, 0).getDate();
    const totalDaysInPrevMonth = new Date(year, month, 0).getDate();
    
    let htmlBuffer = "";
    const realClockToday = new Date();
    
    // 1. Structural injection: Render leading trailing fragments from previous month cycle
    for (let i = firstDayIndex; i > 0; i--) {
        const dayNum = totalDaysInPrevMonth - i + 1;
        htmlBuffer += `<div class="calendar-day-cell-node muted-day-span"><span class="day-number-lbl">${dayNum}</span></div>`;
    }
    
    // 2. Structural injection: Render actual focus month segment squares
    for (let day = 1; day <= totalDaysInMonth; day++) {
        const dateISOString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        
        // Detect system runtime absolute clock matching day identity
        const isToday = realClockToday.getFullYear() === year && realClockToday.getMonth() === month && realClockToday.getDate() === day;
        const cellClass = isToday ? "calendar-day-cell-node current-runtime-day" : "calendar-day-cell-node";
        
        // Match meeting coordinates
        const matchesMeetings = APP_STATE.meetings.filter(m => m.date === dateISOString);
        const matchesTasks = APP_STATE.tasks.filter(t => t.date === dateISOString);
        
        let dynamicIndicatorsStack = "";
        matchesMeetings.forEach(m => {
            dynamicIndicatorsStack += `<span class="calendar-micro-indicator-tag c-meet" title="${m.title} [${m.time}]">${m.title}</span>`;
        });
        matchesTasks.forEach(t => {
            dynamicIndicatorsStack += `<span class="calendar-micro-indicator-tag c-task" title="TASK: ${t.title}">${t.title}</span>`;
        });
        
        htmlBuffer += `
            <div class="${cellClass}">
                <span class="day-number-lbl">${day}</span>
                <div class="cell-events-stack-container">
                    ${dynamicIndicatorsStack}
                </div>
            </div>
        `;
    }
    
    // 3. Structural injection: Pad out trailing squares logic context
    const totalRenderedCellsSoFar = firstDayIndex + totalDaysInMonth;
    const remainingMeshGridPaddingSquares = 42 - totalRenderedCellsSoFar; // Enforces absolute strict layout constraints
    for (let j = 1; j <= remainingMeshGridPaddingSquares; j++) {
        htmlBuffer += `<div class="calendar-day-cell-node muted-day-span"><span class="day-number-lbl">${j}</span></div>`;
    }
    
    target.innerHTML = htmlBuffer;
    
    // Render dependent right-hand side tracking agenda matrices
    renderCalendarTelemetrySidebarAgenda();
}

function shiftCalendarMonth(direction) {
    APP_STATE.calendarContext.activeMonth += direction;
    if (APP_STATE.calendarContext.activeMonth > 11) {
        APP_STATE.calendarContext.activeMonth = 0;
        APP_STATE.calendarContext.activeYear += 1;
    } else if (APP_STATE.calendarContext.activeMonth < 0) {
        APP_STATE.calendarContext.activeMonth = 11;
        APP_STATE.calendarContext.activeYear -= 1;
    }
    renderChronosCalendarMeshGrid();
}

function resetCalendarToCurrent() {
    const currentClock = new Date();
    APP_STATE.calendarContext.activeYear = currentClock.getFullYear();
    APP_STATE.calendarContext.activeMonth = currentClock.getMonth();
    renderChronosCalendarMeshGrid();
}

function renderCalendarTelemetrySidebarAgenda() {
    const meetTarget = document.getElementById('calendar-sidebar-meetings-target');
    const taskTarget = document.getElementById('calendar-sidebar-tasks-target');
    
    if (meetTarget) {
        if (APP_STATE.meetings.length === 0) {
            meetTarget.innerHTML = `<p style="font-size:12.5px; color:var(--text-muted); text-align:center; padding:10px;">Clear radar stack.</p>`;
        } else {
            meetTarget.innerHTML = APP_STATE.meetings.slice(0, 3).map(meet => `
                <div class="agenda-summary-item-card">
                    <div class="agenda-summary-card-head">
                        <h4>${meet.title}</h4>
                        <button class="btn-icon-only" style="width:20px; height:20px; font-size:11px;" onclick="deleteMeetingRecord(${meet.id})"><i class="fa-solid fa-trash"></i></button>
                    </div>
                    <div class="agenda-summary-card-meta">
                        <span><i class="fa-solid fa-clock"></i> ${meet.time}</span>
                        <span><i class="fa-solid fa-network-wired"></i> ${meet.type}</span>
                    </div>
                    <div style="font-size:11px; font-weight:700; color:var(--text-muted); margin-top:2px;"><i class="fa-solid fa-calendar"></i> Target: ${meet.date}</div>
                </div>
            `).join('');
        }
    }
    
    if (taskTarget) {
        const highPriorityTasks = APP_STATE.tasks.filter(t => t.priority === 'CRITICAL' || t.priority === 'HIGH');
        if (highPriorityTasks.length === 0) {
            taskTarget.innerHTML = `<p style="font-size:12.5px; color:var(--text-muted); text-align:center; padding:10px;">No high threat operations.</p>`;
        } else {
            taskTarget.innerHTML = highPriorityTasks.slice(0, 2).map(task => `
                <div class="agenda-summary-item-card" style="border-left: 3px solid #b5533c;">
                    <div class="agenda-summary-card-head">
                        <h4>${task.title}</h4>
                    </div>
                    <div class="agenda-summary-card-meta">
                        <span style="font-weight:700; color:#b5533c;">[${task.priority}]</span>
                        <span><i class="fa-solid fa-user-ninja"></i> ${task.assignee}</span>
                    </div>
                </div>
            `).join('');
        }
    }
}

/**
 * FORM CONTROLLER SYNC FUNCTIONS (SETTINGS AND LEDGER PROFILES)
 */
function hydrateSettingsFormValues() {
    document.getElementById('set-company-name').value = APP_STATE.identity.companyName;
    document.getElementById('set-company-email').value = APP_STATE.identity.companyEmail;
    document.getElementById('set-company-phone').value = APP_STATE.identity.companyPhone;
    document.getElementById('set-company-website').value = APP_STATE.identity.companyWebsite;
    document.getElementById('set-company-address').value = APP_STATE.identity.companyAddress;
    document.getElementById('set-system-timezone').value = APP_STATE.identity.timeZone;
    document.getElementById('set-system-currency').value = APP_STATE.identity.currency;
}

function saveSystemSettings() {
    APP_STATE.identity.companyName = document.getElementById('set-company-name').value;
    APP_STATE.identity.companyEmail = document.getElementById('set-company-email').value;
    APP_STATE.identity.companyPhone = document.getElementById('set-company-phone').value;
    APP_STATE.identity.companyWebsite = document.getElementById('set-company-website').value;
    APP_STATE.identity.companyAddress = document.getElementById('set-company-address').value;
    APP_STATE.identity.timeZone = document.getElementById('set-system-timezone').value;
    APP_STATE.identity.currency = document.getElementById('set-system-currency').value;
    
    saveStateToLocalStorage();
    alert("System operational parameters updated and saved to secure browser context matrix.");
}

function hydrateIdentityLedgerFormValues() {
    document.getElementById('prof-full-name').value = APP_STATE.identity.fullName;
    document.getElementById('prof-email-address').value = APP_STATE.identity.email;
    document.getElementById('prof-phone-line').value = APP_STATE.identity.phone;
    document.getElementById('prof-biography-block').value = APP_STATE.identity.bio;
}

function saveOperatorIdentityProfile() {
    APP_STATE.identity.fullName = document.getElementById('prof-full-name').value;
    APP_STATE.identity.email = document.getElementById('prof-email-address').value;
    APP_STATE.identity.phone = document.getElementById('prof-phone-line').value;
    APP_STATE.identity.bio = document.getElementById('prof-biography-block').value;
    
    saveStateToLocalStorage();
    syncUIVisualRepresentations();
    alert("Cryptographic identification bound securely. Identity signature saved absolute.");
}

function updateProfileAvatarFromInput() {
    const url = document.getElementById('profile-avatar-url-input').value;
    if (url) {
        localStorage.setItem('NEXUS_AVATAR_URI', url);
        syncUIVisualRepresentations();
    }
}

/**
 * ==========================================================================
 * DATABASE CRUD ACTIONS (CREATE, READ, UPDATE, DELETE PROCEDURES)
 * ==========================================================================
 */

function bindFormSubmissionEventHandlers() {
    // Customer Submit Interceptor
    document.getElementById('customer-crud-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const editId = document.getElementById('customer-editing-id-holder').value;
        const name = document.getElementById('cust-input-name').value;
        const email = document.getElementById('cust-input-email').value;
        const segment = document.getElementById('cust-input-segment').value;
        const status = document.getElementById('cust-input-status').value;
        
        if (editId) {
            // Update operation logic code
            const targetIndex = APP_STATE.customers.findIndex(c => c.id == editId);
            if (targetIndex !== -1) {
                APP_STATE.customers[targetIndex] = { id: parseInt(editId), name, email, segment, status };
            }
        } else {
            // Create operation logic code
            const nextId = APP_STATE.customers.length > 0 ? Math.max(...APP_STATE.customers.map(c => c.id)) + 1 : 1;
            APP_STATE.customers.push({ id: nextId, name, email, segment, status });
        }
        
        saveStateToLocalStorage();
        closeCustomerModal();
        renderCustomerDatabaseMatrix();
    });

    // Employee Submit Interceptor
    document.getElementById('employee-crud-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const editId = document.getElementById('employee-editing-id-holder').value;
        const name = document.getElementById('emp-input-name').value;
        const role = document.getElementById('emp-input-role').value;
        const dept = document.getElementById('emp-input-dept').value;
        const email = document.getElementById('emp-input-email').value;
        const phone = document.getElementById('emp-input-phone').value;
        
        if (editId) {
            const index = APP_STATE.employees.findIndex(em => em.id == editId);
            if (index !== -1) {
                APP_STATE.employees[index] = { id: parseInt(editId), name, role, dept, email, phone };
            }
        } else {
            const nextId = APP_STATE.employees.length > 0 ? Math.max(...APP_STATE.employees.map(e => e.id)) + 1 : 1;
            APP_STATE.employees.push({ id: nextId, name, role, dept, email, phone });
        }
        
        saveStateToLocalStorage();
        closeEmployeeModal();
        renderEmployeeDatabaseMatrix();
    });

    // Task Submit Interceptor
    document.getElementById('task-crud-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const editId = document.getElementById('task-editing-id-holder').value;
        const title = document.getElementById('task-input-title').value;
        const desc = document.getElementById('task-input-desc').value;
        const priority = document.getElementById('task-input-priority').value;
        const progress = parseInt(document.getElementById('task-input-progress').value);
        const assignee = document.getElementById('task-input-assignee').value;
        const date = document.getElementById('task-input-date').value;
        
        if (editId) {
            const index = APP_STATE.tasks.findIndex(t => t.id == editId);
            if (index !== -1) {
                APP_STATE.tasks[index] = { id: parseInt(editId), title, desc, priority, progress, assignee, date };
            }
        } else {
            const nextId = APP_STATE.tasks.length > 0 ? Math.max(...APP_STATE.tasks.map(t => t.id)) + 1 : 1;
            APP_STATE.tasks.push({ id: nextId, title, desc, priority, progress, assignee, date });
        }
        
        saveStateToLocalStorage();
        closeTaskModal();
        renderTaskOperationsWorkspace();
    });

    // Meeting Submit Interceptor
    document.getElementById('meeting-crud-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('meet-input-title').value;
        const date = document.getElementById('meet-input-date').value;
        const time = document.getElementById('meet-input-time').value;
        const type = document.getElementById('meet-input-type').value;
        
        const nextId = APP_STATE.meetings.length > 0 ? Math.max(...APP_STATE.meetings.map(m => m.id)) + 1 : 1;
        APP_STATE.meetings.push({ id: nextId, title, date, time, type });
        
        saveStateToLocalStorage();
        closeMeetingModal();
        renderChronosCalendarMeshGrid();
    });
}

/**
 * DETAILED MODAL LAYER SWITCH SYSTEM WRAPPERS
 */
function openAddCustomerModal() {
    document.getElementById('customer-crud-form').reset();
    document.getElementById('customer-editing-id-holder').value = "";
    document.getElementById('customer-modal-title').innerText = "Provision New Account Node";
    document.getElementById('customer-crud-modal').style.display = 'flex';
}

function openEditCustomerModal(id) {
    const cust = APP_STATE.customers.find(c => c.id == id);
    if (!cust) return;
    
    document.getElementById('customer-editing-id-holder').value = cust.id;
    document.getElementById('cust-input-name').value = cust.name;
    document.getElementById('cust-input-email').value = cust.email;
    document.getElementById('cust-input-segment').value = cust.segment;
    document.getElementById('cust-input-status').value = cust.status;
    
    document.getElementById('customer-modal-title').innerText = `Modify Client Node Profile: #NX-00${cust.id}`;
    document.getElementById('customer-crud-modal').style.display = 'flex';
}

function closeCustomerModal() { document.getElementById('customer-crud-modal').style.display = 'none'; }

function deleteCustomerRecord(id) {
    if (confirm("Confirm core verification parameters check: Purge client profile permanently from telemetry context?")) {
        APP_STATE.customers = APP_STATE.customers.filter(c => c.id != id);
        saveStateToLocalStorage();
        renderCustomerDatabaseMatrix();
        syncMetricsSummaryCounters();
    }
}

// Employee Modals Trigger Mapping
function openAddEmployeeModal() {
    document.getElementById('employee-crud-form').reset();
    document.getElementById('employee-editing-id-holder').value = "";
    document.getElementById('employee-modal-title').innerText = "Onboard Operational Specialist";
    document.getElementById('employee-crud-modal').style.display = 'flex';
}

function openEditEmployeeModal(id) {
    const emp = APP_STATE.employees.find(e => e.id == id);
    if (!emp) return;
    
    document.getElementById('employee-editing-id-holder').value = emp.id;
    document.getElementById('emp-input-name').value = emp.name;
    document.getElementById('emp-input-role').value = emp.role;
    document.getElementById('emp-input-dept').value = emp.dept;
    document.getElementById('emp-input-email').value = emp.email;
    document.getElementById('emp-input-phone').value = emp.phone || '';
    
    document.getElementById('employee-modal-title').innerText = `Update Operator System Config: #OP-${100 + emp.id}`;
    document.getElementById('employee-crud-modal').style.display = 'flex';
}

function closeEmployeeModal() { document.getElementById('employee-crud-modal').style.display = 'none'; }

function deleteEmployeeRecord(id) {
    if (confirm("Revoke access permissions and terminate operator context registry profile?")) {
        APP_STATE.employees = APP_STATE.employees.filter(e => e.id != id);
        saveStateToLocalStorage();
        renderEmployeeDatabaseMatrix();
        syncMetricsSummaryCounters();
    }
}

// Task Modals Trigger Mapping
function openAddTaskModal() {
    document.getElementById('task-crud-form').reset();
    document.getElementById('task-editing-id-holder').value = "";
    document.getElementById('task-modal-title').innerText = "Launch Operation Directive Ticket";
    document.getElementById('task-crud-modal').style.display = 'flex';
}

function openEditTaskModal(id) {
    const task = APP_STATE.tasks.find(t => t.id == id);
    if (!task) return;
    
    document.getElementById('task-editing-id-holder').value = task.id;
    document.getElementById('task-input-title').value = task.title;
    document.getElementById('task-input-desc').value = task.desc;
    document.getElementById('task-input-priority').value = task.priority;
    document.getElementById('task-input-progress').value = task.progress;
    document.getElementById('task-input-assignee').value = task.assignee;
    document.getElementById('task-input-date').value = task.date;
    
    document.getElementById('task-modal-title').innerText = `Reconfigure Operation Directive Parameters`;
    document.getElementById('task-crud-modal').style.display = 'flex';
}

function closeTaskModal() { document.getElementById('task-crud-modal').style.display = 'none'; }

function deleteTaskRecord(id) {
    if (confirm("Terminate execution route ticket lifecycle sequence?")) {
        APP_STATE.tasks = APP_STATE.tasks.filter(t => t.id != id);
        saveStateToLocalStorage();
        renderTaskOperationsWorkspace();
        syncMetricsSummaryCounters();
    }
}

// Meeting Modals Trigger Mapping
function openAddMeetingModal() {
    document.getElementById('meeting-crud-form').reset();
    document.getElementById('meeting-editing-id-holder').value = "";
    document.getElementById('meeting-crud-modal').style.display = 'flex';
}
function closeMeetingModal() { document.getElementById('meeting-crud-modal').style.display = 'none'; }

function deleteMeetingRecord(id) {
    if (confirm("De-synchronize scheduled calendar target chronos node alignment sync item?")) {
        APP_STATE.meetings = APP_STATE.meetings.filter(m => m.id != id);
        saveStateToLocalStorage();
        renderChronosCalendarMeshGrid();
        syncMetricsSummaryCounters();
    }
}

/**
 * ==========================================================================
 * CENTRAL STATISTICAL TELEMETRY GENERATION ENGINE (CHART.JS)
 * ==========================================================================
 */
function initDashboardCharts() {
    const revCtx = document.getElementById('revenueChart');
    if (revCtx) {
        new Chart(revCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{ 
                    label: 'Revenue Index ($)', 
                    data: [12000, 19000, 32000, 5000, 24000, 48250], 
                    borderColor: '#9b4d5a', 
                    backgroundColor: 'rgba(155, 77, 90, 0.04)',
                    tension: 0.35, 
                    fill: true,
                    borderWidth: 3,
                    pointBackgroundColor: '#9b4d5a'
                }]
            },
            options: { 
                responsive: true, 
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: { grid: { color: '#f3eae6' }, ticks: { color: '#8c8082' } },
                    x: { grid: { display: false }, ticks: { color: '#8c8082' } }
                }
            }
        });
    }

    const reportCtx = document.getElementById('reportSalesChart');
    if (reportCtx) {
        new Chart(reportCtx, {
            type: 'bar',
            data: {
                labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                datasets: [{ 
                    label: 'Velocity Matrix', 
                    data: [45, 67, 89, 124], 
                    backgroundColor: '#74526c',
                    borderRadius: 6
                }]
            },
            options: { 
                responsive: true, 
                maintainAspectRatio: false,
                plugins: { legend: { display: false } }
            }
        });
    }

    const funnelCtx = document.getElementById('reportFunnelChart');
    if (funnelCtx) {
        new Chart(funnelCtx, {
            type: 'doughnut',
            data: {
                labels: ['Inbound API', 'Organic Sales Routing', 'Partner Channels'],
                datasets: [{ 
                    data: [55, 30, 15], 
                    backgroundColor: ['#9b4d5a', '#4f7396', '#b8694a'],
                    borderWidth: 0
                }]
            },
            options: { 
                responsive: true, 
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'bottom', labels: { boxWidth: 12, padding: 20 } }
                }
            }
        });
    }
}