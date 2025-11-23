const express = require('express');
const appRoutes = require('./routes/route.js');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// routes
app.use('/api', appRoutes);

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});