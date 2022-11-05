import cors from 'cors';
import express from 'express';

const app = express();
app.use(cors());
app.use(express.json());

const users = [];
const tweets = [];
let avatarUser;

app.post('/sign-up', (req, res) => {
	const { username, avatar } = req.body;

	if (!username || !avatar) {
		res.status(400).send(alert('Todos os campos são obrigatórios!'));
		return;
	}

    avatarUser = avatar;
		users.push(req.body);

	res.send("OK");
});

app.post('/tweets', (req, res) => {
	const { username, tweet } = req.body;

	if (!username || !tweet) {
		res.status(400).send(alert('Todos os campos são obrigatórios!'));
		return;
	}

  const avatarString = avatarUser.toString();
  console.log(avatarString);
	tweets.push({ username, avatar: avatarString, tweet });

	res.send("OK");
});

app.get('/tweets', (req, res) => {
	res.send(tweets);
});

app.listen(5000, () => console.log('Running server in port 5000'));