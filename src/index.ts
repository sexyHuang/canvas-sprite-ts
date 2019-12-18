/*
 * @Author: Sexy
 * @Date: 2019-12-18 11:42:55
 * @LastEditors  : Sexy
 * @LastEditTime : 2019-12-18 17:24:07
 * @Description: file content
 */

import isCrossOrigin from './isCrossOrigin';
import tryFromCache from './tryFromCache';

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

interface CanvasSpriteConfig {
  canvas: HTMLCanvasElement;
  fps: number;
  frames: number;
  imageUrl: string;
}
class CanvasSprite {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private frames: number;
  private fps: number;
  private spriteImgPromise: Promise<HTMLImageElement>;
  constructor({ canvas, frames, imageUrl, fps = 24 }: CanvasSpriteConfig) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d') as CanvasRenderingContext2D;
    this.frames = frames;
    this.fps = fps;
    const imgPromise = loadImage(imageUrl);
    this.spriteImgPromise = imgPromise;
    imgPromise.then(spriteImg => {
      const cWidth = spriteImg.width / frames;
      const cHeight = spriteImg.height;
      canvas.width = cWidth;
      canvas.height = cHeight;
    });
  }
  private async draw(frameIndex: number) {
    const { context, frames } = this;
    if (frameIndex >= frames) return;
    const spriteImgRef = await this.spriteImgPromise;
    const { width, height } = spriteImgRef;
    context.clearRect(0, 0, width, height);
    context.drawImage(
      spriteImgRef,
      (frameIndex * width) / frames,
      0,
      width / frames,
      height,
      0,
      0,
      width / frames,
      height
    );
  }
}
