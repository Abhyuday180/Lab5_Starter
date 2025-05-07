// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() 
{
  const speechEngine  = window.speechSynthesis;
  const voiceDropdown = document.getElementById('voice-select');
  const textInput     = document.getElementById('text-to-speak');
  const speakButton   = document.querySelector('#explore button');
  const faceImage     = document.querySelector('#explore img');

  let availableVoices = [];

  function buildVoiceList() 
  {
    availableVoices    = speechEngine.getVoices();
    voiceDropdown.innerHTML =
      '<option value="select" disabled selected>Select Voice:</option>';

    availableVoices.forEach(voice => 
    {
      const option       = document.createElement('option');
      option.value       = voice.name;
      option.textContent = `${voice.name} (${voice.lang})
        ${voice.default ? ' — default' : ''}`;
      voiceDropdown.appendChild(option);
    });
  }

  speechEngine.onvoiceschanged = buildVoiceList;
  buildVoiceList();

  speakButton.addEventListener('click', () => 
  {
    const message = textInput.value.trim();
    if (!message) return;

    const utterance    = new SpeechSynthesisUtterance(message);
    const chosenVoice  = 
      availableVoices.find(v => v.name === voiceDropdown.value);
    if (chosenVoice) utterance.voice = chosenVoice;

    utterance.onstart = () => 
    {
      faceImage.src = 'assets/images/smiling-open.png';
    };

    utterance.onend = () => 
    {
      faceImage.src = 'assets/images/smiling.png';
    };

    speechEngine.speak(utterance);
  });
}
