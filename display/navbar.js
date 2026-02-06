const navbar = (isSubpage = false) => {
    const prefix = isSubpage ? '../' : './';
    return `
    <nav class="navbar">
        <div class="navbar-container">
            <div class="navbar-logo">
                <a href="${prefix}index.html">AI Services</a>
            </div>
            <div class="navbar-toggle" id="navbar-toggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul class="navbar-links" id="navbar-links">
                <li><a href="${prefix}index.html">Home</a></li>
                <li><a href="${prefix}pages/product.html">Product</a></li>
                <li><a href="${prefix}pages/pricing.html">Pricing</a></li>
                <li><a href="${prefix}pages/team.html">Team</a></li>
            </ul>
        </div>
    </nav>`;
}

document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('navbar-toggle');
    const links = document.getElementById('navbar-links');

    if (toggle && links) {
        toggle.addEventListener('click', () => {
            links.classList.toggle('active');
        });
    }
});