const replies = {
  services: {
    user: "What services do you offer?",
    salon:
      "We offer hair styling, treatments, makeup, nails, waxing, threading, facials, and event beauty. Which service are you asking about?",
  },
  prices: {
    user: "Can I get prices?",
    salon:
      "Please send the service you need. For hair and makeup, photos or details help us reply with the right price.",
  },
  appointment: {
    user: "I want an appointment.",
    salon:
      "Sure. Please send your name, the service, and your preferred day and time. We will confirm availability.",
  },
  location: {
    user: "Where are you located?",
    salon:
      "We are around Al Mansouri Building, Najda Street, Al Danah, Abu Dhabi. Message us and we can send the location pin.",
  },
};

const chatWindow = document.querySelector("#chatWindow");

document.querySelectorAll("[data-reply]").forEach((button) => {
  button.addEventListener("click", () => {
    const reply = replies[button.dataset.reply];
    if (!reply || !chatWindow) return;

    chatWindow.append(createMessage(reply.user, "user"));
    setTimeout(() => {
      chatWindow.append(createMessage(reply.salon, "salon"));
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }, 220);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  });
});

function createMessage(text, type) {
  const message = document.createElement("p");
  message.className = `message ${type}`;
  message.textContent = text;
  return message;
}
