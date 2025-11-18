const buttons = document.querySelectorAll('.button-window');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('primary'));
        btn.classList.add('primary');
    });
});
function goToPage() {
  window.location.href = "obrazec.html";
}