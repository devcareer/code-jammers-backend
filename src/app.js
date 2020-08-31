if (process.env.NODE_ENV !== 'production') {
    import dotenv from 'dotenv';
    dotenv.config();
}

import express from 'express';

const app = express();
const port = process.env.PORT;

app.get('/',(req, res) => {
    res.send('Welcome to Know Africa');
});

app.listen(port, () => {
    console.log(`Server Running on: ${port}`);
});