async function sendMessage() {
    let userInput = document.getElementById("userInput").value;
    let chatbox = document.getElementById("chatbox");

    let userMessage = `<p><strong>Vous :</strong> ${userInput}</p>`;
    chatbox.innerHTML += userMessage;

    let response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer VOTRE_CLE_OPENAI"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: userInput }]
        })
    });

    let data = await response.json();
    let botMessage = `<p><strong>IA :</strong> ${data.choices[0].message.content}</p>`;
    chatbox.innerHTML += botMessage;
}
