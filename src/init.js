import './db';
import './models/User';
import './models/Video';
import app from './server';

const port = 4000;

const handleListening = () => {
  console.log(`server listening on ${port}`);
};

app.listen(port, handleListening);
