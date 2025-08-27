require("dotenv").config();
import express from "express";
import cors from "cors"
import counterRoutes from "./routes/counter";
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/counter", counterRoutes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
