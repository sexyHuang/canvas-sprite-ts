interface CanvasSpriteConfig {
    canvas: HTMLCanvasElement;
    fps?: number;
    frames: number;
    imageUrl: string;
    loop?: number | boolean;
    autoPlay?: boolean;
}
declare class CanvasSprite {
    private canvas;
    private context;
    private frames;
    private fps;
    private spriteImgPromise;
    private activeFrameIndex;
    private reqId;
    private loop;
    private loopCount;
    private aniStop;
    private stopHack;
    onEnd: Function;
    onLoad: Function;
    onLoop: Function;
    constructor(config: CanvasSpriteConfig);
    private init;
    private addActiveFrameIndex;
    private spriteAnimate;
    private draw;
    play(): void;
    pause(): void;
    stop(): void;
    destroy(): void;
    reset(config: CanvasSpriteConfig): void;
}
export default CanvasSprite;
