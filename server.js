import express from 'express'
import mongoose from 'mongoose'
import database from './config/database'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import methodOverride from 'method-override'

const app = express();
const port = process.env.PORT || 8080;

mongoose.connect(database.remoteUrl);

app.use(express.static('./public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOverride('X-HTTP-Method-Override'));

require('./app/routes.js')(app);

app.listen(port);
