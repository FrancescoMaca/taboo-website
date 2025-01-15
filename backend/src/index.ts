import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import './resend'

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (_, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  console.log(process.env.RESEND_TOKEN);
});
