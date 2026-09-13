// ==========================================
// IMPORT PAGE CONTENT FUNCTIONS
// ==========================================
import { renderCategoryPage } from "./Category/CategoryContent.js";

// ==========================================
// GET MAIN CONTENT AREA
// ==========================================
const mainContent = document.getElementById("main-content");

// ==========================================
// HANDLE NAV CLICK
// ==========================================
const handleNavClick = (link) => {
    const page = link.dataset.page;

    // Remove active from all nav items
    document.querySelectorAll(".nav-item").forEach(item => {
        item.classList.remove("active");
    });

    // Add active to the clicked one
    link.classList.add("active");

    // Route to the correct page
    if (page === "dashboard") {
        mainContent.innerHTML = "<h1>Dashboard</h1><p>Welcome to the Library Management System.</p>";
    } else if (page === "category") {
        renderCategoryPage();
    } else if (page === "publisher") {
        mainContent.innerHTML = "<h1>Publisher</h1>";
    } else if (page === "author") {
        mainContent.innerHTML = "<h1>Author</h1>";
    } else if (page === "section") {
        mainContent.innerHTML = "<h1>Section</h1>";
    } else if (page === "bookprice") {
        mainContent.innerHTML = "<h1>Book Price</h1>";
    } else if (page === "policy") {
        mainContent.innerHTML = "<h1>Policy</h1>";
    } else if (page === "donor") {
        mainContent.innerHTML = "<h1>Donor</h1>";
    } else if (page === "role") {
        mainContent.innerHTML = "<h1>Role</h1>";
    } else if (page === "book") {
        mainContent.innerHTML = "<h1>Book</h1>";
    } else if (page === "bookcopy") {
        mainContent.innerHTML = "<h1>Book Copy</h1>";
    } else if (page === "member") {
        mainContent.innerHTML = "<h1>Member</h1>";
    } else if (page === "staff") {
        mainContent.innerHTML = "<h1>Staff</h1>";
    }
};

// ==========================================
// ON PAGE LOAD
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll(".nav-item");

    // Attach click event to every nav item
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            handleNavClick(item);
        });
    });

    // Show dashboard by default
    const dashboardLink = document.querySelector('.nav-item[data-page="dashboard"]');
    if (dashboardLink) {
        handleNavClick(dashboardLink);
    }
});