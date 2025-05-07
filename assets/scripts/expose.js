// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() 
{
  const hornSelect              = document.getElementById('horn-select');
  const hornImage               = document.querySelector('#expose img');

  const volumeRange             = document.getElementById('volume');
  const volumeIcon              = document.querySelector('#volume-controls img');

  const playBtn                 = document.querySelector('#expose button');
  const hornAudio               = document.querySelector('audio');

  const confetti                = new JSConfetti();

  hornSelect.addEventListener('change', () => 
  {
    const hornType = hornSelect.value;

    if (hornType === 'select') return;

    hornImage.src = `assets/images/${hornType}.svg`;
    hornAudio.src = `assets/audio/${hornType}.mp3`;
  });

  volumeRange.addEventListener('input', () => 
  {
    const volumeValue = Number(volumeRange.value);
    hornAudio.volume  = volumeValue / 100;

    if (volumeValue > 67) 
    {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    } 
    else if (volumeValue > 33) 
    {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } 
    else if (volumeValue > 0) 
    {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } 
    else 
    {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    }
  });

  playBtn.addEventListener('click', () => 
  {
    if (hornAudio.src.includes('party-horn.mp3')) 
    {
      confetti.addConfetti();
      hornAudio.play();
    }

    if (hornAudio.src && !hornAudio.src.endsWith('/')) 
    {
      hornAudio.play();
    }
  });
}
