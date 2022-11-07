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
		res.status(400).send('Todos os campos são obrigatórios!');
		return;
	}

    avatarUser = avatar;

	const userLogin = req.body;

	users.push(userLogin);

	res.send("OK");
});

app.post('/tweets', (req, res) => {
	const { username, tweet } = req.body;

	if (!username || !tweet) {
		res.status(400).send('Todos os campos são obrigatórios!');
		return;
	}

   const avatarString = avatarUser.toString();

   const postTwitter = {
	username,
	avatar: avatarString, 
	tweet
   };

	tweets.push(postTwitter);

	res.send("OK");
});

app.get('/tweets', (req, res) => {
	const lastTweets = tweets.slice(-10);
	res.send(lastTweets);
});

app.listen(5000, () => console.log('Running server in port 5000'));