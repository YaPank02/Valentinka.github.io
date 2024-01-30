document.getElementById('yesButton').addEventListener('click', function() {
    openNewPage();
});

document.getElementById('noButton').addEventListener('click', function() {
    moveButton(this);
    displayMessage();
    changeImage();
});

function moveButton(button) {
    var viewportWidth = window.innerWidth;
    var viewportHeight = window.innerHeight;

    var randomX = Math.random() * (viewportWidth - button.clientWidth);
    var randomY = Math.random() * (viewportHeight - button.clientHeight);

    button.style.position = 'absolute';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}
function displayMessage() {
    var messageElement = document.getElementById('message');
    messageElement.textContent = "Так себе вариант!";
    messageElement.style.marginTop = '20px';
    messageElement.style.textAlign = 'center';
    messageElement.style.fontSize = '40px'
}
function changeImage() {
    var firstImage = document.getElementById('firstImage');
    var secondImage = document.getElementById('secondImage');

    firstImage.style.display = 'none';
    secondImage.style.display = 'block';
}
function openNewPage() {
    window.open('lisa-leht.html', '_blank');
}