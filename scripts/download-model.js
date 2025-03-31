const https = require('https');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const MODEL_URL = 'https://alphacephei.com/vosk/models/vosk-model-ja-0.22.zip';
const MODEL_PATH = path.join(__dirname, '..', 'public', 'models');
const ZIP_PATH = path.join(MODEL_PATH, 'model.zip');

// Create models directory if it doesn't exist
if (!fs.existsSync(MODEL_PATH)) {
  fs.mkdirSync(MODEL_PATH, { recursive: true });
}

console.log('Downloading Japanese model...');

// Download the model
const file = fs.createWriteStream(ZIP_PATH);
https.get(MODEL_URL, (response) => {
  response.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Download completed. Extracting...');

    // Extract the model
    exec(`unzip -o ${ZIP_PATH} -d ${MODEL_PATH}`, (error) => {
      if (error) {
        console.error('Error extracting model:', error);
        return;
      }
      console.log('Model extracted successfully');

      // Clean up zip file
      fs.unlinkSync(ZIP_PATH);
      console.log('Setup completed!');
    });
  });
}).on('error', (error) => {
  fs.unlinkSync(ZIP_PATH);
  console.error('Error downloading model:', error);
}); 