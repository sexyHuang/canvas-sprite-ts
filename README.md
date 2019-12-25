# Canvas Sprite Ts

Render sprite animation with canvas

## Install

```
    npm i -S canvas-sprite-ts
```

## Usage

```js
import CanvasSprite from 'canvas-sprite-ts';
const canvas = document.createElement('canvas');
const cs = new CanvasSprite({
  canvas,
  fps: 10,
  loop: true,
  frames: 10,
  imageUrl: spriteImg
});
cs.play();
cs.onLoad = () => {
  console.log('img is loaded');
};
cs.onLoop = count => {
  console.log(count);
};

cs.destroy();
```

options:

```ts
canvas: HTMLCanvasElement; // the canvas we want to render the sprite
fps?: number; // frames rendered per second
frames: number; // the number of sprite frames
imageUrl: string; // the sprite image url
loop?: number | boolean; // should sprite animation loop, number loopmeans loop times; true means infinite loop; default to false
autoPlay?: boolean; // should sprite animation play auto
```

methods:

```ts
play(): void; // play animation
pause(): void; // pause animation, stay in curren frame
stop(): void; // stop animation, reset to first frame
destroy(): void; // destroy animation, should be called when canvas element is removed(unmounted) from DOM, in case of memory leak
reset(config: CanvasSpriteConfig): void; // reset it
```

events:

```ts
onEnd: Function; // function invoked when animation ends if options.loop is false
onLoad: Function; // function invoked when img loaded;
onLoop: Function; // function invoked every time aniamtion loops;
```
