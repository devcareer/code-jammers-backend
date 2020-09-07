import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
	res.send("Welcome to Know Africa");
});

app.listen(port, () => {
	console.log(`Server Running on: ${port}`);
});

export default app;
