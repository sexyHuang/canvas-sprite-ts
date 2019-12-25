/*
 * @Author: Sexy
 * @Date: 2019-12-25 11:02:08
 * @LastEditors  : Sexy
 * @LastEditTime : 2019-12-25 18:36:20
 * @Description: file content
 */
import CanvasSprite from './../../dist/index';
import spriteImg from './card-sprite-A.png';
import spriteImgC from './card-sprite-C.png';

const canvas = document.createElement('canvas');
const canvas2 = document.createElement('canvas');
const stopBtn = document.createElement('button');
const stopBtn2 = document.createElement('button');
const pauseBtn = document.createElement('button');
const playBtn = document.createElement('button');
const changeBtn = document.createElement('button');
playBtn.innerHTML = 'play';
stopBtn.innerHTML = 'stop';
stopBtn2.innerHTML = 'stop 2';
pauseBtn.innerHTML = 'pause';
changeBtn.innerHTML = 'change pic';
const cs = new CanvasSprite({
  canvas,
  fps: 10,
  loop: true,
  frames: 10,
  imageUrl: spriteImg
});
const cs2 = new CanvasSprite({
  canvas: canvas2,
  fps: 10,
  loop: true,
  frames: 10,
  autoPlay: true,
  imageUrl: spriteImgC
});
cs.onLoad = () => {
  console.log('img is loaded');
};
cs.onLoop = count => {
  console.log(count);
};
playBtn.addEventListener('click', () => {
  cs.play();
});
stopBtn.addEventListener('click', () => {
  cs.stop();
});
stopBtn2.addEventListener('click', () => {
  cs2.stop();
});
pauseBtn.addEventListener('click', () => {
  cs.pause();
});
changeBtn.addEventListener('click', () => {
  cs.reset({
    canvas,
    fps: 10,
    loop: true,
    frames: 10,
    autoPlay: true,
    imageUrl: spriteImgC
  });
});
/* let count = 0;
const counting = (then = Date.now()) => {
  const delta = 1000;
  const now = Date.now();
  if (now - then > delta) {
    testDom.innerHTML = count++;
    then = now;
  }
  requestAnimationFrame(counting.bind(null, then));
}; */

document.body.append(canvas, canvas2);
document.body.append(playBtn, stopBtn, pauseBtn, changeBtn, stopBtn2);
// counting();
