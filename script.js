document.addEventListener('DOMContentLoaded', function () {
    const fireworksContainer = document.getElementById('fireworks-container');
    setInterval(createFirework, 2000);

    function createFirework() {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = Math.random() * 100 + 'vw';
        fireworksContainer.appendChild(firework);
        setTimeout(() => firework.remove(), 1000);
    }
});

function handleInput() {
    const name = document.getElementById('userInput').value;
    if (name.trim() === "") {
        alert("Please enter a name.");
        return;
    }
    startCountdown(() => displayRandomQuote(name));
    
    // Call changeSong with the normalized name
    changeSong(name);
}

function displayRandomQuote(name) {
    const greeting = document.getElementById('output');
    const quotes = [
        `<strong>नववर्ष की हार्दिक शुभकामनाएं, ${name}! आपके जीवन में खुशियाँ और सफलता का संचार हो।</strong>`,
        `<strong>बेस्तु वरस मुबारक, ${name}! नए साल में रोमांच और आनंद की अधिकता रहे।</strong>`,
        `<strong>यह नया वर्ष आपके लिए खुशहाली और समृद्धि लाए, ${name}!</strong>`,
        `<strong>आपके नए वर्ष में प्यार और हंसी का माहौल हो, ${name}!</strong>`,
        `<strong>${name}, आपके नए साल में खुशियों की बारिश हो और हर दिन उत्साह से भरा हो!</strong>`,
        `<strong>${name}, इस नए साल में आपकी सभी इच्छाएं पूरी हों और हर दिन मंगलमय हो।</strong>`,
        `<strong>${name}, आपके जीवन में सुख, शांति और समृद्धि का संचार हो। नववर्ष की हार्दिक शुभकामनाएं!</strong>`,
        `<strong>आने वाला साल आपके लिए सपनों को साकार करने वाला बने, ${name}!</strong>`,
        `<strong>${name}, यह साल आपके जीवन में प्रेम, हर्ष और उत्साह की अनंत खुशियाँ लाए।</strong>`,
        `<strong>${name}, आपके जीवन में हमेशा हंसी और खुशियाँ बनी रहें, नववर्ष मुबारक हो!</strong>`,
        `<strong>हर नई शुरुआत आपके लिए एक नई आशा और नए अवसर लाए, ${name}. नववर्ष की शुभकामनाएँ!</strong>`,
        `<strong>${name}, आने वाला साल आपके लिए हर दिन नए रंग और उमंग लेकर आए!</strong>`,
        `<strong>नववर्ष आपके जीवन में सुख-शांति और समृद्धि का संचार करे, ${name}!</strong>`,
        `<strong>${name}, इस नववर्ष में आपके सभी अधूरे सपने पूरे हों और आपका जीवन खुशियों से भर जाए!</strong>`,
        `<strong>${name}, इस साल आपकी हर सुबह उज्जवल और हर रात चाँदनी से चमके। नववर्ष की हार्दिक शुभकामनाएं!</strong>`
    ];

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    greeting.innerHTML = randomQuote;
    animateText(greeting);

    // Show final message after 5 seconds and then reload the page
    setTimeout(() => {
        const finalMessage = `<strong>Happy New Year to you and your family, ${name}!</strong><br><strong>Hare Krishna 💙</strong>`;
        greeting.innerHTML = finalMessage;
        animateText(greeting);

        // Reload page after 10 seconds of displaying the final message
        setTimeout(() => {
            window.location.reload();
        }, 10000);
    }, 5000);
}

function startCountdown(callback) {
    let count = 3;
    const countdownElement = document.getElementById('countdown');
    countdownElement.innerText = count;
    countdownElement.style.display = 'block';

    const countdownInterval = setInterval(() => {
        count--;
        if (count >= 0) {
            countdownElement.innerText = count;
        } else {
            clearInterval(countdownInterval);
            countdownElement.style.display = 'none';
            callback();
        }
    }, 1000);
}

function animateText(element) {
    let opacity = 0;
    const interval = setInterval(() => {
        if (opacity >= 1) clearInterval(interval);
        element.style.opacity = opacity;
        opacity += 0.05;
    }, 100);
}

function changeSong(name) {
    // Convert name to lowercase for case insensitive comparison
    const normalizedName = name.toLowerCase();
    
    const songs = {
        'k1': 'krishna1.mp3',  // Match for "k1"
        'k2': 'krishna2.mp3'   // Match for "k2"
    };

    // Use the normalized name to find the corresponding song
    const song = songs[normalizedName] || 'krishna3.mp3';  // Default to 'krishna3.mp3'
    
    // Change the song source and play it
    const songSource = document.getElementById('songSource');
    songSource.src = song;
    
    const backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic.load();
    backgroundMusic.play();
}
