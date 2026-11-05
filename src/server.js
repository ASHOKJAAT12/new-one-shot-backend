import app from './app.js';
import connectDB from './db/index.js';

const PORT = process.env.PORT || 4000;
// Connect to MongoDB
connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((error) => {
    console.log(`Database connection failed: ${error.message}`);
});

