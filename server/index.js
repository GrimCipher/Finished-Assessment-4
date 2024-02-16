const express = require("express");
const cors = require("cors");

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

const compliments = [
    "You're awesome!",
    "You're a true gem!",
    "You've got this!",
    "You're doing great!",
    "You're making a difference!",
];

app.get("/api/compliment", (req, res) => {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    const compliment = compliments[randomIndex];
    res.json({ compliment });
});

const fortunes = [
    "You will soon find great fortune in unexpected places.",
    "An exciting opportunity will present itself to you very soon.",
    "Your hard work will pay off in the near future.",
    "A pleasant surprise awaits you in the coming days.",
    "Good luck is headed your way; stay positive!",
];

app.get("/api/fortune", (req, res) => {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const fortune = fortunes[randomIndex];
    res.json({ fortune });
});

const inspirations = [
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
];

app.get("/api/inspiration", (req, res) => {
    const randomIndex = Math.floor(Math.random() * inspirations.length);
    const inspiration = inspirations[randomIndex];
    res.json({ inspiration });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


