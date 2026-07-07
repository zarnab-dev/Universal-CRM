/**
 * Universal CRM Core Frontend Interactions Engine
 * Implementation: Routing logic, Dynamic components UI, and mock analytical frames.
 */

// Global App Navigation Engine View Switching Component Routing
function navigateTo(viewId) {
    // Collect all valid system dynamic views
    const views = ['login-view', 'forgot-view', 'dashboard-view'];
    
    views.forEach(id => {
        const viewEl = document.getElementById(id);
        if(id === viewId) {
            viewEl.classList.remove('hidden');
        } else {
            viewEl.classList.add('hidden');
        }
    });

    // Lazy load the analytical graph layout metrics rendering safely if targeted
    if (viewId === 'dashboard-view') {
        setTimeout(initializeRevenueChart, 50);
    }
}

// Interactive Component Framework System Sub-routines
document.addEventListener('DOMContentLoaded', () => {
    
    // Top Bar Context Avatar Dropdown Interaction Controller
    const profileBtn = document.getElementById('profileDropdownBtn');
    const profileDropdown = document.getElementById('profileDropdown');

    if(profileBtn) {
        profileBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            profileDropdown.classList.toggle('show');
        });
    }

    // Global document click event listener closing layout frames 
    document.addEventListener('click', () => {
        if(profileDropdown && profileDropdown.classList.contains('show')) {
            profileDropdown.classList.remove('show');
        }
    });

    // Mobile Navigation Drawer Frame Toggle Controller
    const mobileToggle = document.getElementById('mobile-toggle');
    const sidebar = document.getElementById('sidebar');

    if(mobileToggle && sidebar) {
        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            sidebar.classList.toggle('open');
        });
        
        // Auto-close sidebar on backdrop selection framework 
        document.querySelector('.main-workspace').addEventListener('click', () => {
            sidebar.classList.remove('open');
        });
    }
});

// Step 8: UI Revenue Chart Initialization (Executed with ChartJS CDN Ecosystem)
let chartInstance = null;
function initializeRevenueChart() {
    const ctx = document.getElementById('revenueChart');
    if (!ctx) return;

    // Destructure old frames during layout view transitions to prevent canvas memory bloating leaks
    if(chartInstance !== null) {
        chartInstance.destroy();
    }

    chartInstance = new Chart(ctx.getContext('2d'), {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Monthly Revenue ($)',
                data: [14200, 18500, 16100, 23400, 21900, 28400],
                borderColor: '#4f46e5',
                backgroundColor: 'rgba(79, 70, 229, 0.06)',
                borderWidth: 3,
                fill: true,
                tension: 0.35,
                pointRadius: 4,
                pointBackgroundColor: '#4f46e5'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    grid: { color: '#f1f5f9' },
                    ticks: { color: '#64748b', font: { size: 11 } }
                },
                x: {
                    grid: { display: false },
                    ticks: { color: '#64748b', font: { size: 11 } }
                }
            }
        }
    });
}