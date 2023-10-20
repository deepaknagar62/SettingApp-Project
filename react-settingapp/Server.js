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
}).then(()=>{ console.log("connection successfull.......")})
.catch((err) => console.log(err));

app.get('/api/toggle-button/:name', async (req, res) => {
  try {
    const { name } = req.params;
    const toggleButton = await ToggleButton.findOne({name});
    res.json(toggleButton);
  } catch (err) {
    res.status(500).json({ error: 'Could not fetch the toggle button state' });
  }
});

app.put('/api/toggle-button/:name', async (req, res) => {
  try {
    const { name } = req.params;
    const { state } = req.body;
    const toggleButton = await ToggleButton.findOneAndUpdate({ name }, { state }, { new: true, upsert: true });
    res.json(toggleButton);
  } catch (err) {
    res.status(500).json({ error: 'Could not update the toggle button state' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});