function getTimeBasedGreeting() {
            const now = new Date();
            const hour = now.getHours();
            
            // Define time periods
            if (hour >= 5 && hour < 12) {
                return "Good morning Edem, how was your night?";
            } else if (hour >= 12 && hour < 17) {
                return "Good afternoon Edem, how is your day going?";
            } else if (hour >= 17 && hour < 23) {
                return "Good evening Edem, how was your day?";
            } else {
                return "Have a goodnight sleep, babe.";
            }
        }
        
        function updateGreeting() {
            const greetingElement = document.getElementById('greeting');
            const timeDisplayElement = document.getElementById('timeDisplay');
            const now = new Date();
            
            // Update greeting text
            greetingElement.textContent = getTimeBasedGreeting();
            
            // Display current time (optional)
            const timeString = now.toLocaleTimeString([], {
                hour: '2-digit', 
                minute: '2-digit'
            });
            timeDisplayElement.textContent = `Current time: ${timeString}`;
        }
        
        // Update greeting when page loads
        window.addEventListener('load', function() {
            updateGreeting();
            
            // Optional: Update every minute
            setInterval(updateGreeting, 60000);
        });


// Message Repository
const messageRepository = [
            {
                text: "Edem, you are appreciated more than words can express. Thank you for being you.",
                author: "Nana"
            },
            {
                text: "Your kindness brightens every room you enter. The world is better because you're in it.",
                author: "Nana"
            },
            {
                text: "Remember that you are braver than you believe, stronger than you seem, and smarter than you think.",
                author: "Nana"
            },
            {
                text: "You have a heart of gold and a spirit that inspires everyone around you.",
                author: "Nana"
            },
            {
                text: "Every day you choose to be amazing, and it shows in everything you do.",
                author: "Your Biggest Fan"
            },
            {
                text: "You are a masterpiece in progress, beautifully unique and wonderfully made.",
                author: "Nana"
            },
            {
                text: "Edem, your smile can light up the darkest day. Never stop sharing that beautiful light.",
                author: "Nana"
            },
            {
                text: "Edem, you matter more than you know, and your presence makes a difference in this world.",
                author: "Nana"
            },
            {
               text: "Last night, I dreamed about you. What happened in detail, I can hardly remember; all I know is that we kept merging into one another. I was you, you were me.",
               author: "Franz Kafka"         
            }
        ];

        let shuffledMessages = [];
        let currentMessageIndex = 0;
        let isMessageVisible = false;

        // Shuffle array function
        function shuffleArray(array) {
            const shuffled = [...array];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        }

        // Initialize on page load
        window.addEventListener('load', function() {
            shuffleMessages();
            updateUI();
        });

        function shuffleMessages() {
            shuffledMessages = shuffleArray(messageRepository);
            currentMessageIndex = 0;
            hideMessage();
            updateUI();
            console.log('Messages shuffled! New order:', shuffledMessages.map(m => m.author));
        }

        function updateUI() {
            const messageCountEl = document.getElementById('messageCount');
            const currentIndexEl = document.getElementById('currentIndex');
            const totalCountEl = document.getElementById('totalCount');
            
            messageCountEl.textContent = messageRepository.length;
            currentIndexEl.textContent = currentMessageIndex + 1;
            totalCountEl.textContent = shuffledMessages.length;
        }

        function displayMessage(messageObj) {
            const messageEl = document.getElementById('message');
            messageEl.innerHTML = `
                <p>${messageObj.text}</p>
                <p>With love, ${messageObj.author}</p>
            `;
        }

        function revealMessage() {
            const message = document.getElementById('message');
            const button = document.getElementById('revealBtn');
            
            if (!isMessageVisible) {
                // Show current message
                displayMessage(shuffledMessages[currentMessageIndex]);
                message.style.display = 'block';
                message.classList.add('revealed');
                button.textContent = 'Hide';
                button.style.background = 'linear-gradient(45deg, #ad1a1a)';
                isMessageVisible = true;
            } else {
                hideMessage();
            }
        }

        function hideMessage() {
            const message = document.getElementById('message');
            const button = document.getElementById('revealBtn');
            
            message.style.display = 'none';
            message.classList.remove('revealed');
            button.textContent = 'Reveal';
            button.style.background = 'linear-gradient(45deg, #8e44ad)';
            isMessageVisible = false;
        }

        function nextMessage() {
            currentMessageIndex = (currentMessageIndex + 1) % shuffledMessages.length;
            
            if (isMessageVisible) {
                displayMessage(shuffledMessages[currentMessageIndex]);
            }
            
            updateUI();
        }

        // Keyboard shortcuts
        document.addEventListener('keydown', function(event) {
            switch(event.key) {
                case ' ': // Spacebar to reveal/hide
                    event.preventDefault();
                    revealMessage();
                    break;
                case 'ArrowRight': // Right arrow for next message
                case 'n':
                    nextMessage();
                    break;
                case 's': // S to shuffle
                    shuffleMessages();
                    break;
            }
        });
