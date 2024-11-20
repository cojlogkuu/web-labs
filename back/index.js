import express from "express";
import cors from "cors";
import stoneRout from "./src/routes/stone.rout.js";
import cartRout from "./src/routes/cart.rout.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
	const start = Date.now();

	res.on('finish', () => {
		const duration = Date.now() - start;
		const logMessage = `${req.method} ${req.originalUrl} - Status: ${res.statusCode} - ${duration}ms`;

		console.log(logMessage);
	});
	next();
});

app.use('/api/stones', stoneRout);
app.use('/api/carts', cartRout);

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});