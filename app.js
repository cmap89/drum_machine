function removeTransition(e) {
    if (e.propertyName != 'transform') return;
    this.classList.remove('playing');
};

const pads = document.querySelectorAll('.pad');
pads.forEach(pad => pad.addEventListener('transitionend', removeTransition));

pads.forEach(pad => pad.addEventListener('click', (e) => {
    const eCode = e.target.attributes[0].value
    const audio = document.querySelector(`audio[data-key="${eCode}"]`);
    audio.volume = 0.3;
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    pad.classList.add('playing');
}));

function keyPlay(e) {
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    const pad = document.querySelector(`.pad[data-key="${e.code}"]`);
    if (e.code === 'Space') e.preventDefault();
    audio.volume = 0.3;
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    pad.classList.add('playing');
};

document.addEventListener('keydown', keyPlay);