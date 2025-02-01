// *********************************************************************************************
// This file is manually-edited by diffing against an autogenerated file. See README.md.
// *********************************************************************************************

// *********************************************************************************************
// Manually-written
// *********************************************************************************************

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

// GPUExtent3DDictStrict is defined to help developers catch a common class of errors.
// This interface defines depth as an undefined, which will cause a type check failure if someone
// attempts to set depth rather than depthOrArrayLayers on a GPUExtent3D (an easy mistake to make.)
interface GPUExtent3DDictStrict
  extends GPUExtent3DDict {
  /** @deprecated The correct name is `depthOrArrayLayers`. */
  depth?: undefined;
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

interface GPUTextureDescriptor {
  /**
   * **PROPOSED** addition for Compatibility Mode:
   * <https://github.com/gpuweb/gpuweb/blob/main/proposals/compatibility-mode.md#1-texture-view-dimension-may-be-specified>
   *
   * > [In compatibility mode,]
   * > When specifying a texture, a textureBindingViewDimension property
   * > determines the views which can be bound from that texture for sampling.
   * > Binding a view of a different dimension for sampling than specified at
   * > texture creation time will cause a validation error.
   */
  textureBindingViewDimension?: GPUTextureViewDimension;
}

/** @internal */
interface __GPUDeviceEventMap {
  uncapturederror: GPUUncapturedErrorEvent;
}

interface GPUDevice {
  /**
   * An event handler IDL attribute for the {@link GPUDevice#uncapturederror} event type.
   */
  onuncapturederror:
    | ((
        this: GPUDevice,
        ev: GPUUncapturedErrorEvent
      ) => any)
    | null;

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

interface GPUTexelCopyBufferInfo
  extends GPUTexelCopyBufferLayout {
  /**
   * A buffer which either contains texel data to be copied or will store the texel data being
   * copied, depending on the method it is being passed to.
   */
  buffer: GPUBuffer;
}

interface GPUTexelCopyBufferLayout {
  /**
   * The offset, in bytes, from the beginning of the texel data source (such as a
   * {@link GPUTexelCopyBufferInfo#buffer|GPUTexelCopyBufferInfo.buffer}) to the start of the texel data
   * within that source.
   */
  offset?: GPUSize64;
  /**
   * The stride, in bytes, between the beginning of each texel block row and the subsequent
   * texel block row.
   * Required if there are multiple texel block rows (i.e. the copy height or depth is more
   * than one block).
   */
  bytesPerRow?: GPUSize32;
  /**
   * Number of texel block rows per single texel image of the texture.
   * {@link GPUTexelCopyBufferLayout#rowsPerImage} &times;
   * {@link GPUTexelCopyBufferLayout#bytesPerRow} is the stride, in bytes, between the beginning of each
   * texel image of data and the subsequent texel image.
   * Required if there are multiple texel images (i.e. the copy depth is more than one).
   */
  rowsPerImage?: GPUSize32;
}

interface GPUTexelCopyTextureInfo {
  /**
   * Texture to copy to/from.
   */
  texture: GPUTexture;
  /**
   * Mip-map level of the {@link GPUTexelCopyTextureInfo#texture} to copy to/from.
   */
  mipLevel?: GPUIntegerCoordinate;
  /**
   * Defines the origin of the copy - the minimum corner of the texture sub-region to copy to/from.
   * Together with `copySize`, defines the full copy sub-region.
   */
  origin?: GPUOrigin3D;
  /**
   * Defines which aspects of the {@link GPUTexelCopyTextureInfo#texture} to copy to/from.
   */
  aspect?: GPUTextureAspect;
}

interface GPUCopyExternalImageDestInfo
  extends GPUTexelCopyTextureInfo {
  /**
   * Describes the color space and encoding used to encode data into the destination texture.
   * This [[#color-space-conversions|may result]] in values outside of the range [0, 1]
   * being written to the target texture, if its format can represent them.
   * Otherwise, the results are clamped to the target texture format's range.
   * Note:
   * If {@link GPUCopyExternalImageDestInfo#colorSpace} matches the source image,
   * conversion may not be necessary. See [[#color-space-conversion-elision]].
   */
  colorSpace?: PredefinedColorSpace;
  /**
   * Describes whether the data written into the texture should have its RGB channels
   * premultiplied by the alpha channel, or not.
   * If this option is set to `true` and the {@link GPUCopyExternalImageSourceInfo#source} is also
   * premultiplied, the source RGB values must be preserved even if they exceed their
   * corresponding alpha values.
   * Note:
   * If {@link GPUCopyExternalImageDestInfo#premultipliedAlpha} matches the source image,
   * conversion may not be necessary. See [[#color-space-conversion-elision]].
   */
  premultipliedAlpha?: boolean;
}

interface GPUCopyExternalImageSourceInfo {
  /**
   * The source of the texel copy. The copy source data is captured at the moment that
   * {@link GPUQueue#copyExternalImageToTexture} is issued. Source size is determined as described
   * by the external source dimensions table.
   */
  source: GPUCopyExternalImageSource;
  /**
   * Defines the origin of the copy - the minimum (top-left) corner of the source sub-region to copy from.
   * Together with `copySize`, defines the full copy sub-region.
   */
  origin?: GPUOrigin2D;
  /**
   * Describes whether the source image is vertically flipped, or not.
   * If this option is set to `true`, the copy is flipped vertically: the bottom row of the source
   * region is copied into the first row of the destination region, and so on.
   * The {@link GPUCopyExternalImageSourceInfo#origin} option is still relative to the top-left corner
   * of the source image, increasing downward.
   */
  flipY?: boolean;
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
