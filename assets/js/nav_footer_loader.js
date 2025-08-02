// Load navbar and footer
document.getElementById('navbar').innerHTML = fetch('../components/navbar.html').then(res => res.text()).then(html => document.getElementById('navbar').innerHTML = html);
document.getElementById('footer').innerHTML = fetch('../components/footer.html').then(res => res.text()).then(html => document.getElementById('footer').innerHTML = html);