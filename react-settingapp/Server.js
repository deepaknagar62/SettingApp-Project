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








const SelectedCardSchema = new mongoose.Schema({
  name:String,
  selectedCard: String,
});

const SelectedCard = mongoose.model('optionsselections', SelectedCardSchema);

app.get('/api/choose-backup-accounts', async (req, res) => {
  try {
    const selectedCard = await SelectedCard.findOne({name:'choose_backup_account'});
    res.json(selectedCard);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});


app.put('/api/choose-backup-accounts', async (req, res) => {
  try {
    const { selectedCard } = req.body;
    const updatedCard = await SelectedCard.findOneAndUpdate({name:'choose_backup_account'}, { selectedCard }, { new: true, upsert: true });
    res.json(updatedCard);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});




app.get('/api/silent-DND', async (req, res) => {
  try {
    const selectedCard = await SelectedCard.findOne({name:'choose_silent_DND'});
    res.json(selectedCard);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});


app.put('/api/silent-DND', async (req, res) => {
  try {
    const { selectedCard } = req.body;
    const updatedCard = await SelectedCard.findOneAndUpdate({name:'choose_silent_DND'}, { selectedCard }, { new: true, upsert: true });
    res.json(updatedCard);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});



app.get('/api/preferred-network-sim1', async (req, res) => {
  try {
    const selectedCard = await SelectedCard.findOne({name:'choose_preferredNetwork_sim1'});
    res.json(selectedCard);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});


app.put('/api/preferred-network-sim1', async (req, res) => {
  try {
    const { selectedCard } = req.body;
    const updatedCard = await SelectedCard.findOneAndUpdate({name:'choose_preferredNetwork_sim1'}, { selectedCard }, { new: true, upsert: true });
    res.json(updatedCard);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});


app.get('/api/preferred-network-sim2', async (req, res) => {
  try {
    const selectedCard = await SelectedCard.findOne({name:'choose_preferredNetwork_sim2'});
    res.json(selectedCard);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});


app.put('/api/preferred-network-sim2', async (req, res) => {
  try {
    const { selectedCard } = req.body;
    const updatedCard = await SelectedCard.findOneAndUpdate({name:'choose_preferredNetwork_sim2'}, { selectedCard }, { new: true, upsert: true });
    res.json(updatedCard);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});




app.get('/api/default-sim-for-calls', async (req, res) => {
  try {
    const selectedCard = await SelectedCard.findOne({name:'Default-SIM-for-calls'});
    res.json(selectedCard);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});


app.put('/api/default-sim-for-calls', async (req, res) => {
  try {
    const { selectedCard } = req.body;
    const updatedCard = await SelectedCard.findOneAndUpdate({name:'Default-SIM-for-calls'}, { selectedCard }, { new: true, upsert: true });
    res.json(updatedCard);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});



app.get('/api/default-sim-for-data', async (req, res) => {
  try {
    const selectedCard = await SelectedCard.findOne({name:'Default-SIM-for-data'});
    res.json(selectedCard);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});


app.put('/api/default-sim-for-data', async (req, res) => {
  try {
    const { selectedCard } = req.body;
    const updatedCard = await SelectedCard.findOneAndUpdate({name:'Default-SIM-for-data'}, { selectedCard }, { new: true, upsert: true });
    res.json(updatedCard);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});





app.get('/api/choose-ringtone', async (req, res) => {
  try {
    const selectedCard = await SelectedCard.findOne({name:'choose-ringtone'});
    res.json(selectedCard);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});


app.put('/api/choose-ringtone', async (req, res) => {
  try {
    const { selectedCard } = req.body;
    const updatedCard = await SelectedCard.findOneAndUpdate({name:'choose-ringtone'}, { selectedCard }, { new: true, upsert: true });
    res.json(updatedCard);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});




app.get('/api/choose-font', async (req, res) => {
  try {
    const selectedCard = await SelectedCard.findOne({name:'choose-font'});
    res.json(selectedCard);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});


app.put('/api/choose-font', async (req, res) => {
  try {
    const { selectedCard } = req.body;
    const updatedCard = await SelectedCard.findOneAndUpdate({name:'choose-font'}, { selectedCard }, { new: true, upsert: true });
    res.json(updatedCard);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});




app.get('/api/choose-text', async (req, res) => {
  try {
    const selectedCard = await SelectedCard.findOne({name:'choose-text'});
    res.json(selectedCard);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});


app.put('/api/choose-text', async (req, res) => {
  try {
    const { selectedCard } = req.body;
    const updatedCard = await SelectedCard.findOneAndUpdate({name:'choose-text'}, { selectedCard }, { new: true, upsert: true });
    res.json(updatedCard);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});


app.get('/api/choose-notification-ring', async (req, res) => {
  try {
    const selectedCard = await SelectedCard.findOne({name:'notification-ring'});
    res.json(selectedCard);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});


app.put('/api/choose-notification-ring', async (req, res) => {
  try {
    const { selectedCard } = req.body;
    const updatedCard = await SelectedCard.findOneAndUpdate({name:'notification-ring'}, { selectedCard }, { new: true, upsert: true });
    res.json(updatedCard);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});




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



app.get('/api/sim1-name', async (req, res) => {
  try {
    const textData = await TextModel.findOne({name:'sim1_name'});
    res.json(textData || { enteredText: null });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});


app.put('/api/sim1-name', async (req, res) => {
  const { enteredText } = req.body;
  try {
    const updatedText = await TextModel.findOneAndUpdate({name:'sim1_name'}, { enteredText }, { new: true, upsert: true });
    res.json(updatedText);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});





app.get('/api/sim1-number', async (req, res) => {
  try {
    const textData = await TextModel.findOne({name:'sim1_number'});
    res.json(textData || { enteredText: null });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});


app.put('/api/sim1-number', async (req, res) => {
  const { enteredText } = req.body;
  try {
    const updatedText = await TextModel.findOneAndUpdate({name:'sim1_number'}, { enteredText }, { new: true, upsert: true });
    res.json(updatedText);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});



app.get('/api/sim2-name', async (req, res) => {
  try {
    const textData = await TextModel.findOne({name:'sim2_name'});
    res.json(textData || { enteredText: null });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});


app.put('/api/sim2-name', async (req, res) => {
  const { enteredText } = req.body;
  try {
    const updatedText = await TextModel.findOneAndUpdate({name:'sim2_name'}, { enteredText }, { new: true, upsert: true });
    res.json(updatedText);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});



app.get('/api/sim2-number', async (req, res) => {
  try {
    const textData = await TextModel.findOne({name:'sim2_number'});
    res.json(textData || { enteredText: null });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});


app.put('/api/sim2-number', async (req, res) => {
  const { enteredText } = req.body;
  try {
    const updatedText = await TextModel.findOneAndUpdate({name:'sim2_number'}, { enteredText }, { new: true, upsert: true });
    res.json(updatedText);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});





app.get('/api/device-name', async (req, res) => {
  try {
    const textData = await TextModel.findOne({name:'device-name'});
    res.json(textData || { enteredText: null });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});


app.put('/api/device-name', async (req, res) => {
  const { enteredText } = req.body;
  try {
    const updatedText = await TextModel.findOneAndUpdate({name:'device-name'}, { enteredText }, { new: true, upsert: true });
    res.json(updatedText);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});







app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});