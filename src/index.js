import express from 'express';
import methodOverride from 'method-override';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());

app.get('/', (req, res) => res.send('hello world'));

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
