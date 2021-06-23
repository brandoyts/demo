const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

// start the server
app.listen(PORT, () => {
    console.log(`Backend starts on port ${PORT}`);
});

app.get("/api", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const todos = [
        { title: "todo1" },
        { title: "todo2" },
        { title: "todo3" },
        { title: "todo4" },
        { title: "todo5" },
    ];

    res.json({
        todos,
    });
});
