// AllowSharedBufferSource wasn't introduced until TypeScript 5.2.
// But it also didn't include SharedArrayBuffer in the union.
// This broke in ES2024 when ArrayBuffer gained some properties that SharedArrayBuffer didn't.
// So, we use our own definition for AllowSharedBufferSource.

type GPUAllowSharedBufferSource =

    | BufferSource
    | SharedArrayBuffer;

// Stronger typing for getContext()

interface HTMLCanvasElement {
  getContext(
    contextId:
      | "webgpu"
  ): GPUCanvasContext | null;
}
interface OffscreenCanvas {
  getContext(
    contextId:
      | "webgpu"
  ): GPUCanvasContext | null;
}

// Defined as an empty interface here to prevent errors when using these types in a worker.

interface HTMLVideoElement {}

// Strict types defined to help developers catch a common class of errors.
// This interface defines depth as an undefined, which will cause a type check failure if someone
// attempts to set depth rather than depthOrArrayLayers on a GPUExtent3D (an easy mistake to make.)

type GPUOrigin2DStrict =

    | Iterable<GPUIntegerCoordinate>
    | GPUOrigin2DDictStrict;
interface GPUOrigin2DDictStrict
  extends GPUOrigin2DDict {
  /** @deprecated Does not exist for GPUOrigin2D. */
  z?: undefined;
}
type GPUExtent3DStrict =

    | Iterable<GPUIntegerCoordinate>
    | GPUExtent3DDictStrict;
interface GPUExtent3DDictStrict
  extends GPUExtent3DDict {
  /** @deprecated The correct name is `depthOrArrayLayers`. */
  depth?: undefined;
}

// Stronger typing for event listeners.

/** @internal */
interface __GPUDeviceEventMap {
  uncapturederror: GPUUncapturedErrorEvent;
}

// Extensions to the generated definition below.
interface GPUDevice {
  addEventListener<
    K extends keyof __GPUDeviceEventMap
  >(
    type: K,
    listener: (
      this: GPUDevice,
      ev: __GPUDeviceEventMap[K]
    ) => any,
    options?:
      | boolean
      | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?:
      | boolean
      | AddEventListenerOptions
  ): void;
  removeEventListener<
    K extends keyof __GPUDeviceEventMap
  >(
    type: K,
    listener: (
      this: GPUDevice,
      ev: __GPUDeviceEventMap[K]
    ) => any,
    options?:
      | boolean
      | EventListenerOptions
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?:
      | boolean
      | EventListenerOptions
  ): void;
}

interface GPUCanvasConfigurationOut
  extends Required<
    Omit<
      GPUCanvasConfiguration,
      "toneMapping"
    >
  > {
  /** {@inheritDoc GPUCanvasConfiguration.viewFormats} */
  viewFormats: GPUTextureFormat[];
  /**
   * {@inheritDoc GPUCanvasConfiguration.toneMapping}
   */
  toneMapping?: GPUCanvasToneMapping;
}

/** @deprecated Use {@link GPUTexelCopyBufferLayout} */
type GPUImageDataLayout =
  GPUTexelCopyBufferLayout;
/** @deprecated Use {@link GPUTexelCopyBufferInfo} */
type GPUImageCopyBuffer =
  GPUTexelCopyBufferInfo;
/** @deprecated Use {@link GPUTexelCopyTextureInfo} */
type GPUImageCopyTexture =
  GPUTexelCopyTextureInfo;
/** @deprecated Use {@link GPUCopyExternalImageDestInfo} */
type GPUImageCopyTextureTagged =
  GPUCopyExternalImageDestInfo;
/** @deprecated Use {@link GPUCopyExternalImageSourceInfo} */
type GPUImageCopyExternalImage =
  GPUCopyExternalImageSourceInfo;
/** @deprecated Use {@link GPUCopyExternalImageSource} */
type GPUImageCopyExternalImageSource =
  GPUCopyExternalImageSource;
