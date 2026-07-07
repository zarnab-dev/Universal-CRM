/**
 * ==========================================
 * CENTRALIZED APPLICATION STATE DATA MATRIX
 * ==========================================
 */

const APP_STATE = {
    currentView: 'login-view',
    currentPanel: 'panel-home',
    
    // Identity Framework State
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

    // Dynamic Collections Engine
    customers: [
        { id: 1, name: "Acme Analytics Corp", email: "billing@acme.io", segment: "Enterprise SLA", status: "Active" }
    ],
    employees: [
        { id: 1, name: "Sarah Jenkins", role: "Lead Cloud Engineer", dept: "Engineering Department", email: "s.jenkins@nexus.com", phone: "+1 (555) 391-4402", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80", status: "Active" },
        { id: 2, name: "Marcus Vance", role: "Core Operations Manager", dept: "Operations Department", email: "m.vance@nexus.com", phone: "+1 (555) 204-8931", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80", status: "Active" }
    ],
    tasks: [
        { id: 1, title: "Migrate Legacy Elastic Cluster Layers", desc: "Relocate database indexing shards into the unified production architecture framework.", priority: "High", progress: 65, assignee: "Sarah Jenkins", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=50&auto=format&fit=crop&q=80", dueDate: "July 12, 2026" }
    ],
    meetings: [
        { id: 1, topic: "Sprint Cluster Post-Mortem", host: "Sarah Jenkins (Engineering)", date: "2026-07-04", time: "14:30", channel: "Nexus Encrypted Video Link", type: "urgent", desc: "Review infrastructure cloud routing anomalies discovered inside core shards." }
    ]
};

/**
 * INITIALIZATION GATEWAY
 */
document.addEventListener('DOMContentLoaded', () => {
    initRouter();
    loadAllAppState(); // Load everything saved from LocalStorage
    initFormInterceptors(); // Intercept and map all forms dynamically
    initDashboardCharts();
});

/**
 * ==========================================
 * DATA PERSISTENCE ENGINE (LOCAL STORAGE)
 * ==========================================
 */
function saveAllAppState() {
    localStorage.setItem('nexus_crm_master_state', JSON.stringify(APP_STATE));
}

function loadAllAppState() {
    const savedData = localStorage.getItem('nexus_crm_master_state');
    if (savedData) {
        try {
            const parsed = JSON.parse(savedData);
            // Merge loaded data deep into state layers
            Object.assign(APP_STATE.identity, parsed.identity);
            if (parsed.customers) APP_STATE.customers = parsed.customers;
            if (parsed.employees) APP_STATE.employees = parsed.employees;
            if (parsed.tasks) APP_STATE.tasks = parsed.tasks;
            if (parsed.meetings) APP_STATE.meetings = parsed.meetings;
        } catch (e) {
            console.error("State recovery anomaly:", e);
        }
    }
    // Re-render all elements from active state memory matrix
    renderAllDynamicModules();
}

/**
 * ==========================================
 * DYNAMIC MARKUP INJECTION & REPAINT ENGINE
 * ==========================================
 */
function renderAllDynamicModules() {
    applyIdentityUIChanges();
    renderCustomerTable();
    renderEmployeeGrid();
    renderTaskGrid();
    renderMeetingSchedulerLayout();
}

// 1. Repaint Identity Across DOM Nodes
function applyIdentityUIChanges() {
    const data = APP_STATE.identity;
    
    // Nav Headers & Bio Cards
    document.querySelectorAll('.dropdown-header strong').forEach(el => el.textContent = data.fullName);
    document.querySelectorAll('.dropdown-header span').forEach(el => el.textContent = data.email);
    const profileNameNode = document.querySelector('#panel-user-profile .profile-left-bio-card h2');
    if (profileNameNode) profileNameNode.textContent = data.fullName;

    const bioMetaItems = document.querySelectorAll('#panel-user-profile .bio-meta-item span');
    if (bioMetaItems.length >= 3) {
        bioMetaItems[1].textContent = data.email;
        bioMetaItems[2].textContent = data.phone;
    }
    const footerCompany = document.querySelector('.app-global-footer div strong');
    if (footerCompany) footerCompany.textContent = data.companyName;

    // Prefill form control inputs to reflect current reality state
    const accInputs = document.querySelectorAll('#panel-account-settings .form-input-text');
    if (accInputs.length >= 3) {
        accInputs[0].value = data.fullName;
        accInputs[1].value = data.email;
        accInputs[2].value = data.phone;
    }
    const compInputs = document.querySelectorAll('#panel-company-settings .form-input-text');
    if (compInputs.length >= 5) {
        compInputs[0].value = data.companyName;
        compInputs[1].value = data.companyEmail;
        compInputs[2].value = data.companyPhone;
        compInputs[3].value = data.companyWebsite;
        compInputs[4].value = data.companyAddress;
    }
}

// 2. Render Customer Table Rows Dynamically
function renderCustomerTable() {
    const tbody = document.querySelector('#panel-customer-list tbody');
    if (!tbody) return;
    tbody.innerHTML = APP_STATE.customers.map(c => `
        <tr>
            <td>
                <div class="table-user-cell">
                    <div class="avatar-cell-mini">${c.name.substring(0,2).toUpperCase()}</div>
                    <div><strong>${c.name}</strong><div class="table-subtext-email">${c.email}</div></div>
                </div>
            </td>
            <td><span class="status-badge badge-active">${c.status}</span></td>
            <td><span class="source-tag">${c.segment}</span></td>
            <td class="text-right">
                <div class="table-action-group">
                    <button class="btn-icon btn-action-view" onclick="switchPanel('panel-customer-profile')"><i class="fa-solid fa-eye"></i></button>
                    <button class="btn-icon" style="color:#ef4444;" onclick="deleteDataNode('customers', ${c.id})"><i class="fa-solid fa-trash"></i></button>
                </div>
            </td>
        </tr>
    `).join('');
}

// 3. Render Human Resources Staff Grid Cards
function renderEmployeeGrid() {
    const grid = document.querySelector('.employee-grid-layout');
    if (!grid) return;
    grid.innerHTML = APP_STATE.employees.map(emp => `
        <div class="card employee-card" style="position:relative;">
            <span class="status-badge badge-active" style="position: absolute; top: 16px; right: 16px;">${emp.status}</span>
            <img src="${emp.avatar}" alt="Avatar" class="avatar-large">
            <h3>${emp.name}</h3>
            <p class="designation-lbl">${emp.role}</p>
            <p class="dept-lbl">${emp.dept}</p>
            <div class="employee-contact-stack">
                <p><i class="fa-solid fa-envelope"></i> ${emp.email}</p>
                <p><i class="fa-solid fa-phone"></i> ${emp.phone}</p>
            </div>
            <div class="table-action-group" style="width: 100%; display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px;">
                <button class="btn btn-secondary" onclick="switchPanel('panel-employee-profile')"><i class="fa-solid fa-eye"></i> View</button>
                <button class="btn btn-secondary" style="color: #ef4444;" onclick="deleteDataNode('employees', ${emp.id})"><i class="fa-solid fa-trash"></i> Delete</button>
            </div>
        </div>
    `).join('');
}

// 4. Render Active Tasks Cards Track Pipeline
function renderTaskGrid() {
    const grid = document.querySelector('.tasks-grid-layout');
    if (!grid) return;
    grid.innerHTML = APP_STATE.tasks.map(t => `
        <div class="card task-card">
            <div style="display: flex; flex-direction: column; gap: 12px;">
                <div class="task-card-header">
                    <h3>${t.title}</h3>
                    <span class="status-badge badge-priority-high">${t.priority}</span>
                </div>
                <p class="task-desc">${t.desc}</p>
                <div class="progress-track-container">
                    <div class="progress-track-lbls"><span style="color:var(--text-muted); font-size:11px;">Progress</span><span style="font-size:11px;">${t.progress}%</span></div>
                    <div class="progress-rail"><div class="progress-fill" style="width: ${t.progress}%;"></div></div>
                </div>
            </div>
            <div class="task-card-footer">
                <div class="task-meta-assignee">
                    <img src="${t.avatar}" alt="Assignee">
                    <span>${t.assignee}</span>
                </div>
                <span class="task-due-date"><i class="fa-solid fa-calendar"></i> ${t.dueDate}</span>
                <button class="btn-icon" style="color:#ef4444; margin-left:auto;" onclick="deleteDataNode('tasks', ${t.id})"><i class="fa-solid fa-trash"></i></button>
            </div>
        </div>
    `).join('');
}

// 5. Render Meetings Cards Node List
function renderMeetingSchedulerLayout() {
    const layout = document.querySelector('.meeting-grid-layout');
    if (!layout) return;
    layout.innerHTML = APP_STATE.meetings.map(m => `
        <div class="card meeting-card meeting-${m.type === 'urgent' ? 'urgent' : 'success'}">
            <div>
                <div class="meeting-time-block"><i class="fa-solid fa-clock"></i> ${m.date} • ${m.time}</div>
                <h3 style="font-size: 15px; font-weight: 700; margin-bottom: 6px;">${m.topic}</h3>
                <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 14px;">${m.desc || 'Operational workflow execution review sync.'}</p>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-color); padding-top: 12px;">
                <span style="font-size: 12px; font-weight:600;"><i class="fa-solid fa-location-dot"></i> ${m.channel}</span>
                <button class="btn btn-secondary" style="color:#ef4444; padding:2px 8px;" onclick="deleteDataNode('meetings', ${m.id})">Cancel</button>
            </div>
        </div>
    `).join('');
}

/**
 * Global Deletion Interceptor Handler
 */
function deleteDataNode(collectionKey, targetId) {
    APP_STATE[collectionKey] = APP_STATE[collectionKey].filter(item => item.id !== targetId);
    saveAllAppState();
    renderAllDynamicModules();
}

/**
 * ==========================================
 * IDENTITY SYSTEMS & FORM SYSTEM INTERCEPTORS
 * ==========================================
 */
function initFormInterceptors() {
    // Core Login Interceptor Gateway with Security Validation
    const loginForm = document.getElementById('login-form');
    
    if (loginForm) {
        // Strip out any inline HTML onsubmit handlers to prevent double submittals
        loginForm.removeAttribute('onsubmit');
        
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Explicit element value targeting to stay robust against template adjustments
            const emailField = document.getElementById('login-email');
            const passwordField = document.getElementById('login-password');
            
            const usernameInput = emailField ? emailField.value.trim() : '';
            const passwordInput = passwordField ? passwordField.value : '';
            
            // Define your required access credentials
            const SECURE_USER = "admin@nexus.com";
            const SECURE_PASS = "zar346"; 
            
            // Validation Gate Checks
            if (usernameInput === SECURE_USER && passwordInput === SECURE_PASS) {
                navigateTo('dashboard-view');
                
                // Clear out sensitive password sequences from DOM layout memory cache safely
                if (passwordField) passwordField.value = ''; 
            } else {
                alert('Access Denied: Invalid cryptographic token or username parameter.');
            }
        });
    }

    // 1. IDENTITY PAGE: Account Settings Form (Personal Credentials)
    const accountForm = document.querySelector('#panel-account-settings form');
    if (accountForm) {
        accountForm.removeAttribute('onsubmit');
        accountForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const inputs = accountForm.querySelectorAll('input');
            const bioTextarea = accountForm.querySelector('textarea');
            
            // Map personal profile properties securely
            if (inputs.length >= 3) {
                APP_STATE.identity.fullName = inputs[0].value;
                APP_STATE.identity.email = inputs[1].value;
                APP_STATE.identity.phone = inputs[2].value;
            }
            if (bioTextarea) {
                APP_STATE.identity.bio = bioTextarea.value;
            }

            saveAllAppState();          // Commit matrix to LocalStorage
            renderAllDynamicModules();  // Instantly repaint across the DOM
            alert('Personal identity parameters committed successfully.');
            switchPanel('panel-user-profile');
        });
    }

    // 2. IDENTITY PAGE: Corporate & Enterprise Settings Form
    const companyForm = document.querySelector('#panel-company-settings form');
    if (companyForm) {
        companyForm.removeAttribute('onsubmit');
        companyForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const inputs = companyForm.querySelectorAll('input');
            
            // Save corporate identity characteristics 
            if (inputs.length >= 5) {
                APP_STATE.identity.companyName = inputs[0].value;
                APP_STATE.identity.companyEmail = inputs[1].value;
                APP_STATE.identity.companyPhone = inputs[2].value;
                APP_STATE.identity.companyWebsite = inputs[3].value;
                APP_STATE.identity.companyAddress = inputs[4].value;
            }

            saveAllAppState();          // Commit matrix to LocalStorage
            renderAllDynamicModules();  // Instantly repaint across the DOM
            alert('Corporate configuration records synchronized.');
            switchPanel('panel-home');
        });
    }

    // 3. IDENTITY PAGE: Environment & Regional Localization Settings Form
    // (Targeting a dedicated environment form panel to preserve region configuration changes)
    const localizationForm = document.querySelector('#panel-localization-settings form, #panel-company-settings form .localization-group');
    if (localizationForm) {
        localizationForm.addEventListener('submit', (e) => {
            e.preventDefault();
        });
        
        // If selectors change, we register an explicit global tracking hook on selects
        const selects = localizationForm.querySelectorAll('select');
        if (selects.length >= 3) {
            localizationForm.removeAttribute('onsubmit');
            localizationForm.addEventListener('submit', (e) => {
                e.preventDefault();
                APP_STATE.identity.timeZone = selects[0].value;
                APP_STATE.identity.currency = selects[1].value;
                APP_STATE.identity.language = selects[2].value;
                
                saveAllAppState();
                renderAllDynamicModules();
                alert('Regional architecture configuration synchronized successfully.');
            });
        }
    }

    // C. Intercept Add Customer Node Form
    const addCustForm = document.querySelector('#panel-customer-add form');
    if (addCustForm) {
        addCustForm.removeAttribute('onsubmit');
        addCustForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const inputs = addCustForm.querySelectorAll('input');
            const newCust = {
                id: Date.now(),
                name: inputs[0].value,
                email: inputs[1].value,
                segment: "Standard Contract",
                status: "Active"
            };
            APP_STATE.customers.push(newCust);
            saveAllAppState();
            renderAllDynamicModules();
            inputs[0].value = ''; inputs[1].value = '';
            switchPanel('panel-customer-list');
        });
    }

    // D. Intercept Create Task Form Node
    const addTaskForm = document.querySelector('#panel-task-add form');
    if (addTaskForm) {
        addTaskForm.removeAttribute('onsubmit');
        addTaskForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const title = document.getElementById('task-input-title').value;
            const desc = document.getElementById('task-input-desc').value;
            const newTask = {
                id: Date.now(),
                title: title,
                desc: desc,
                priority: "Medium",
                progress: 0,
                assignee: "Zarnab Laeeq",
                avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
                dueDate: "July 31, 2026"
            };
            APP_STATE.tasks.push(newTask);
            saveAllAppState();
            renderAllDynamicModules();
            document.getElementById('task-input-title').value = '';
            document.getElementById('task-input-desc').value = '';
            switchPanel('panel-task-list');
        });
    }

    // E. Intercept Meeting Scheduler Form Node
    const bookMeetingForm = document.querySelector('#panel-meeting-scheduler form');
    if (bookMeetingForm) {
        bookMeetingForm.removeAttribute('onsubmit');
        bookMeetingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const inputs = bookMeetingForm.querySelectorAll('input');
            const select = bookMeetingForm.querySelector('select');
            const newMeeting = {
                id: Date.now(),
                topic: inputs[0].value,
                host: select.value,
                date: inputs[1].value,
                time: inputs[2].value,
                channel: bookMeetingForm.querySelectorAll('select')[1]?.value || 'Video Link',
                type: 'success',
                desc: 'Synchronous cross-functional operations sprint checkup.'
            };
            APP_STATE.meetings.push(newMeeting);
            saveAllAppState();
            renderAllDynamicModules();
            inputs[0].value = ''; inputs[1].value = ''; inputs[2].value = '';
            alert('Meeting framework locked and saved.');
        });
    }
}

/**
 * ==========================================
 * NAVIGATION ROUTER ENGINE LAYOUT MANIPULATORS
 * ==========================================
 */
function initRouter() {
    document.querySelectorAll('.menu-item, .sub-item').forEach(item => {
        item.addEventListener('click', (e) => {
            const targetPanel = item.getAttribute('data-target');
            if (targetPanel) {
                e.preventDefault();
                switchPanel(targetPanel);
            }
        });
    });

    const mobileBtn = document.getElementById('mobile-toggle');
    const sidebar = document.getElementById('sidebar');
    if (mobileBtn && sidebar) {
        mobileBtn.addEventListener('click', () => sidebar.classList.toggle('mobile-active'));
    }

    const profileBtn = document.getElementById('profileDropdownBtn');
    const profileDropdown = document.getElementById('profileDropdown');
    if (profileBtn && profileDropdown) {
        profileBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            profileDropdown.classList.toggle('show');
        });
    }

    document.addEventListener('click', () => {
        if (profileDropdown) profileDropdown.classList.remove('show');
    });
}

function navigateTo(viewId) {
    document.getElementById('login-view').classList.add('hidden');
    document.getElementById('forgot-view').classList.add('hidden');
    document.getElementById('dashboard-view').classList.add('hidden');

    if (viewId === 'login-view') document.getElementById('login-view').classList.remove('hidden');
    if (viewId === 'forgot-view') document.getElementById('forgot-view').classList.remove('hidden');
    if (viewId === 'dashboard-view') {
        document.getElementById('dashboard-view').classList.remove('hidden');
        switchPanel('panel-home');
    }
    APP_STATE.currentView = viewId;
}

function switchPanel(panelId) {
    document.querySelectorAll('.workspace-panels > main').forEach(p => p.classList.add('hidden'));
    const targetPanel = document.getElementById(panelId);
    if (targetPanel) {
        targetPanel.classList.remove('hidden');
        APP_STATE.currentPanel = panelId;
    }

    document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
    const activeItem = document.querySelector(`[data-target="${panelId}"]`);
    if (activeItem) activeItem.classList.add('active');

    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.classList.remove('mobile-active');
}

function toggleNotificationPanel() {
    const panel = document.getElementById('notification-sliding-panel');
    if (panel) panel.classList.toggle('active');
}

/**
 * ==========================================
 * GRAPHICAL TELEMETRY GENERATION ENGINE (CHART.JS)
 * ==========================================
 */
function initDashboardCharts() {
    const revCtx = document.getElementById('revenueChart');
    if (revCtx) {
        new Chart(revCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{ label: 'Revenue Index ($)', data: [12000, 19000, 32000, 5000, 24000, 48250], borderColor: '#4f46e5', tension: 0.3, fill: false }]
            },
            options: { responsive: true, maintainAspectRatio: false }
        });
    }

    const reportCtx = document.getElementById('reportSalesChart');
    if (reportCtx) {
        new Chart(reportCtx, {
            type: 'bar',
            data: {
                labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                datasets: [{ label: 'Velocity Matrix', data: [45, 67, 89, 124], backgroundColor: '#7c3aed' }]
            },
            options: { responsive: true, maintainAspectRatio: false }
        });
    }

    const funnelCtx = document.getElementById('reportFunnelChart');
    if (funnelCtx) {
        new Chart(funnelCtx, {
            type: 'doughnut',
            data: {
                labels: ['Inbound API', 'Organic Sales Routing', 'Partner Channels'],
                datasets: [{ data: [55, 30, 15], backgroundColor: ['#4f46e5', '#16a34a', '#eab308'] }]
            },
            options: { responsive: true, maintainAspectRatio: false }
        });
    }
}