import express from "express";
import userRoutes from "./routes/userRoutes.js";
import perfumeRoutes from "./routes/perfumeRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
const app = express();
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/perfume", perfumeRoutes);
app.use("/api/category", categoryRoutes);


app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
});