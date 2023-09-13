import cors from "cors";
import express from 'express';
import businessRoutes from './routes/businessRoute.js';

const app = express();
const PORT = process.env.PORT || 3333;

app.use(cors());
// Middleware
app.use(express.json());

// Routes
app.use('/api', businessRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});