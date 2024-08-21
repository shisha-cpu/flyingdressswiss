// Открытие и закрытие модального окна
document.getElementById('openModal').onclick = function() {
    document.getElementById('modal').style.display = "block";
};

document.querySelector('.close').onclick = function() {
    document.getElementById('modal').style.display = "none";
};

window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = "none";
    }
};

// Обработка формы и отправка данных в Telegram
document.getElementById('bookingForm').onsubmit = function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    const message = `Name: ${name}\nPhone: ${phone}\nEmail: ${email}`;

    const telegramBotToken = '7266576023:AAG-4vdDAj1p8_cEFanZ3NkXpEO6ADZp_sY';
    const telegramChatId = '1137493485';

    const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: telegramChatId,
            text: message
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            alert('Your booking request has been sent successfully!');
            document.getElementById('modal').style.display = "none";
        } else {
            alert('There was an error sending your request. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error sending your request. Please try again.');
    });
};
