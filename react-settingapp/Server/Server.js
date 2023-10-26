const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');



const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/SettingApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{ console.log("connection to Database is successfull.......")})
.catch((error) => console.log(error));





const toggleButtonSchema = new mongoose.Schema({
  name: String,
  state: Boolean,
});


const ToggleButton = mongoose.model('ToggleButtons', toggleButtonSchema);

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








const SelectedCardSchema = new mongoose.Schema({
  name:String,
  selectedCard: String,
});

const SelectedCard = mongoose.model('optionsselections', SelectedCardSchema);


app.get('/api/:apiName', async (req, res) => {
  try {
    const apiName = req.params.apiName;
    const selectedCard = await SelectedCard.findOne({name:apiName});
    res.json(selectedCard);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});


app.put('/api/:apiName', async (req, res) => {
  try {
    const apiName = req.params.apiName;
    const { selectedCard } = req.body;
    const updatedCard = await SelectedCard.findOneAndUpdate({name:apiName}, { selectedCard }, { new: true, upsert: true });
    res.json(updatedCard);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});















const TextSchema = new mongoose.Schema({
  name:String,
  enteredText: String,
});

const TextModel = mongoose.model('TextDatas', TextSchema);



app.get('/api/text-data/:textName', async (req, res) => {
  try {
    const textname = req.params.textName;
    const textData = await TextModel.findOne({name: textname});
    res.json(textData || { enteredText: null });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});


app.put('/api/text-data/:textName', async (req, res) => {
  const textname = req.params.textName;
  const { enteredText } = req.body;
  try {
    const updatedText = await TextModel.findOneAndUpdate({name:textname}, { enteredText }, { new: true, upsert: true });
    res.json(updatedText);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});






const SleepOption = mongoose.model('SleepOption', {
  name: String,
  selectedOption: String,
});



app.get('/api/select-option/sleepOption', async (req, res) => {
  try {
    const sleepOption = await SleepOption.findOne().sort({ _id: -1 });
    res.json({ name: sleepOption.name, selectedOption: sleepOption.selectedOption });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.put('/api/select-option/sleepOption', async (req, res) => {
  const { name, selectedOption } = req.body;
  const sleepOption = new SleepOption({ name, selectedOption });

  try {
    await sleepOption.save();
    res.json({ name: sleepOption.name, selectedOption: sleepOption.selectedOption });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});







app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});