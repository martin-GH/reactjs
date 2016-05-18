import express from 'express';
import questions from './server/database/questions';

const port = 3000;
const app = express();
const router = express.Router();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('index.html', {
    root: __dirname + '/public/'
  });
});

router.route('/get-initial-data')
  .get((req, res) => {

    res.json(questions);
  });

app.use('/api', router);

app.listen(port, () => {
  console.log('Server listening at 3000');
});