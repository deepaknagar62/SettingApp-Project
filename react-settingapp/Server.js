const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const toggleButtonSchema = new mongoose.Schema({
  name: String,
  state: Boolean,
});


const ToggleButton = mongoose.model('ToggleButtons', toggleButtonSchema);

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/SettingApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{ console.log("connection to Database is successfull.......")})
.catch((error) => console.log(error));

app.get('/get-api/toggle-button-status/:name', async (req, res) => {
  try {
    const { name } = req.params;
    const toggleButton = await ToggleButton.findOne({name});
    res.json(toggleButton);
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch the toggle button..' });
  }
});

app.put('/put-api/toggle-button-status/:name', async (req, res) => {
  try {
    const { name } = req.params;
    const { state } = req.body;
    const toggleButton = await ToggleButton.findOneAndUpdate({ name }, { state }, { new: true, upsert: true });
    res.json(toggleButton);
  } catch (error) {
    res.status(500).json({ error: 'Could not update the toggle button..' });
  }
});






const VolumeStateSchema = new mongoose.Schema({
  name: String,
  volume: Number,
  
});

const VolumeState = mongoose.model('VolumeContainers', VolumeStateSchema);

app.get('/get-api/volume-container', async (req, res) => {
  const { name } = req.query;
  try {
    const volumeState = await VolumeState.findOne({ name });
    res.json(volumeState || { name, volume: 30 }); 
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


app.put('/put-api/volume-container', async (req, res) => {
  const { name } = req.query;
  const { volume } = req.body;
  try {
    const volumeState = await VolumeState.findOneAndUpdate({ name }, { volume }, { new: true, upsert: true });
    res.json(volumeState);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});