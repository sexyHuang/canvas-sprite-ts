/*
 * @Author: Sexy
 * @Date: 2019-12-18 11:42:55
 * @LastEditors  : Sexy
 * @LastEditTime : 2019-12-18 17:24:07
 * @Description: file content
 */

import isCrossOrigin from './isCrossOrigin';
import tryFromCache from './tryFromCache';

interface CanvasSpriteConfig {
  canvas: HTMLCanvasElement;
  fps: number;
  frames: number;
  imageUrl: string;
  loop: number;
}

const CANVAS_CS_ID_KEY = 'data-cs-id';

const loadImage = (url: string) =>
  new Promise<HTMLImageElement>(async (resolve, reject) => {
    const src = await tryFromCache(url);
    const img = new Image();
    if (isCrossOrigin(src)) img.crossOrigin = 'anonymous';
    img.onload = () => {
      resolve(img);
    };
    img.onerror = () => {
      reject(Error(`load ${url} error`));
    };
    img.src = src;
  });

export default class CanvasSprite {
  private canvas!: HTMLCanvasElement;
  private context!: CanvasRenderingContext2D;
  private frames!: number;
  private fps!: number;
  private spriteImgPromise!: Promise<HTMLImageElement>;
  private activeFrameIndex: number = 0;
  private reqId: number = 0;
  private loop: number = -1;
  private loopCount: number = 0;
  private aniStop: boolean = true;
  constructor(config: CanvasSpriteConfig) {
    this.init(config);
  }
  private init({
    canvas,
    frames,
    imageUrl,
    fps = 24,
    loop = -1
  }: CanvasSpriteConfig) {
    if (canvas.hasAttribute(CANVAS_CS_ID_KEY)) {
      throw new Error('the canvas has sprite with it, call .destroy() first');
    }
    canvas.setAttribute(CANVAS_CS_ID_KEY, `cs-${Date.now()}`);
    this.canvas = canvas;
    this.context = canvas.getContext('2d') as CanvasRenderingContext2D;
    this.frames = frames;
    this.fps = fps;
    this.loop = loop;

    const imgPromise = loadImage(imageUrl);
    this.spriteImgPromise = imgPromise;

    imgPromise.then(spriteImg => {
      const cWidth = spriteImg.width / frames;
      const cHeight = spriteImg.height;
      canvas.width = cWidth;
      canvas.height = cHeight;
    });
  }
  private addActiveFrameIndex() {
    const { loop, loopCount, frames, activeFrameIndex, reqId } = this;
    if (activeFrameIndex < frames) this.activeFrameIndex += 1;
    else if (loop === -1 || loop >= loopCount) {
      cancelAnimationFrame(reqId);
    } else {
      this.loopCount += 1;
      this.activeFrameIndex += 1;
    }
  }
  private async spriteAnimate(then: number = Date.now()) {
    if (this.aniStop) return;
    const now = Date.now();
    const delta = now - then;
    const fpsInterval = 1000 / this.fps;
    if (delta >= fpsInterval) {
      then = now - (delta % fpsInterval);
      this.addActiveFrameIndex();
      await this.draw();
    }
    this.reqId = requestAnimationFrame(this.spriteAnimate.bind(this, then));
  }
  private async draw() {
    const { context, frames, spriteImgPromise, activeFrameIndex } = this;
    if (activeFrameIndex >= frames) return;
    const spriteImgRef = await spriteImgPromise;
    const { width, height } = spriteImgRef;
    context.clearRect(0, 0, width, height);
    context.drawImage(
      spriteImgRef,
      (activeFrameIndex * width) / frames,
      0,
      width / frames,
      height,
      0,
      0,
      width / frames,
      height
    );
  }

  play() {
    this.aniStop = false;
    this.spriteAnimate();
  }
  pause() {
    this.aniStop = true;
  }
  stop() {
    this.aniStop = true;
    setTimeout(() => {
      this.activeFrameIndex = 0;
      this.draw();
    }, 32);
  }
  destroy() {
    const { width, height } = this.canvas;
    this.aniStop = true;
    this.context.clearRect(0, 0, width, height);
    this.canvas.removeAttribute(CANVAS_CS_ID_KEY);
    this.reqId = 0;
  }
  reset(config: CanvasSpriteConfig) {
    this.destroy();
    this.init(config);
  }
}
