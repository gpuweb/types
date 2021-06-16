type GPUBindingResource =
  | GPUSampler
  | GPUTextureView
  | GPUBufferBinding
  | GPUExternalTexture;
type GPUBufferDynamicOffset = number;
type GPUBufferUsageFlags = number;
type GPUColor =
  | Array<number>
  | GPUColorDict;
type GPUColorWriteFlags = number;
type GPUDepthBias = number;
type GPUError =
  | GPUOutOfMemoryError
  | GPUValidationError;
type GPUExtent3D =
  | Array<GPUIntegerCoordinate>
  | GPUExtent3DDict;
type GPUFlagsConstant = number;
type GPUIndex32 = number;
type GPUIntegerCoordinate = number;
type GPUMapModeFlags = number;
type GPUOrigin2D =
  | Array<GPUIntegerCoordinate>
  | GPUOrigin2DDict;
type GPUOrigin3D =
  | Array<GPUIntegerCoordinate>
  | GPUOrigin3DDict;
type GPUPipelineConstantValue = number;
type GPUSampleMask = number;
type GPUShaderStageFlags = number;
type GPUSignedOffset32 = number;
type GPUSize32 = number;
type GPUSize64 = number;
type GPUStencilValue = number;
type GPUTextureUsageFlags = number;
type GPUAddressMode =
  | "clamp-to-edge"
  | "repeat"
  | "mirror-repeat";
type GPUBlendFactor =
  | "zero"
  | "one"
  | "src"
  | "one-minus-src"
  | "src-alpha"
  | "one-minus-src-alpha"
  | "dst"
  | "one-minus-dst"
  | "dst-alpha"
  | "one-minus-dst-alpha"
  | "src-alpha-saturated"
  | "constant"
  | "one-minus-constant";
type GPUBlendOperation =
  | "add"
  | "subtract"
  | "reverse-subtract"
  | "min"
  | "max";
type GPUBufferBindingType =
  | "uniform"
  | "storage"
  | "read-only-storage";
type GPUCanvasCompositingAlphaMode =
  | "opaque"
  | "premultiplied";
type GPUCompareFunction =
  | "never"
  | "less"
  | "equal"
  | "less-equal"
  | "greater"
  | "not-equal"
  | "greater-equal"
  | "always";
type GPUCompilationMessageType =
  | "error"
  | "warning"
  | "info";
type GPUCullMode =
  | "none"
  | "front"
  | "back";
type GPUDeviceLostReason = "destroyed";
type GPUErrorFilter =
  | "out-of-memory"
  | "validation";
type GPUFeatureName =
  | "depth-clamping"
  | "depth24unorm-stencil8"
  | "depth32float-stencil8"
  | "pipeline-statistics-query"
  | "texture-compression-bc"
  | "timestamp-query";
type GPUFilterMode =
  | "nearest"
  | "linear";
type GPUFrontFace =
  | "ccw"
  | "cw";
type GPUIndexFormat =
  | "uint16"
  | "uint32";
type GPUInputStepMode =
  | "vertex"
  | "instance";
type GPULoadOp = "load";
type GPUPipelineStatisticName =
  | "vertex-shader-invocations"
  | "clipper-invocations"
  | "clipper-primitives-out"
  | "fragment-shader-invocations"
  | "compute-shader-invocations";
type GPUPowerPreference =
  | "low-power"
  | "high-performance";
type GPUPredefinedColorSpace = "srgb";
type GPUPrimitiveTopology =
  | "point-list"
  | "line-list"
  | "line-strip"
  | "triangle-list"
  | "triangle-strip";
type GPUQueryType =
  | "occlusion"
  | "pipeline-statistics"
  | "timestamp";
type GPUSamplerBindingType =
  | "filtering"
  | "non-filtering"
  | "comparison";
type GPUStencilOperation =
  | "keep"
  | "zero"
  | "replace"
  | "invert"
  | "increment-clamp"
  | "decrement-clamp"
  | "increment-wrap"
  | "decrement-wrap";
type GPUStorageTextureAccess =
  | "read-only"
  | "write-only";
type GPUStoreOp =
  | "store"
  | "discard";
type GPUTextureAspect =
  | "all"
  | "stencil-only"
  | "depth-only";
type GPUTextureDimension =
  | "1d"
  | "2d"
  | "3d";
type GPUTextureFormat =
  | "r8unorm"
  | "r8snorm"
  | "r8uint"
  | "r8sint"
  | "r16uint"
  | "r16sint"
  | "r16float"
  | "rg8unorm"
  | "rg8snorm"
  | "rg8uint"
  | "rg8sint"
  | "r32uint"
  | "r32sint"
  | "r32float"
  | "rg16uint"
  | "rg16sint"
  | "rg16float"
  | "rgba8unorm"
  | "rgba8unorm-srgb"
  | "rgba8snorm"
  | "rgba8uint"
  | "rgba8sint"
  | "bgra8unorm"
  | "bgra8unorm-srgb"
  | "rgb9e5ufloat"
  | "rgb10a2unorm"
  | "rg11b10ufloat"
  | "rg32uint"
  | "rg32sint"
  | "rg32float"
  | "rgba16uint"
  | "rgba16sint"
  | "rgba16float"
  | "rgba32uint"
  | "rgba32sint"
  | "rgba32float"
  | "stencil8"
  | "depth16unorm"
  | "depth24plus"
  | "depth24plus-stencil8"
  | "depth32float"
  | "bc1-rgba-unorm"
  | "bc1-rgba-unorm-srgb"
  | "bc2-rgba-unorm"
  | "bc2-rgba-unorm-srgb"
  | "bc3-rgba-unorm"
  | "bc3-rgba-unorm-srgb"
  | "bc4-r-unorm"
  | "bc4-r-snorm"
  | "bc5-rg-unorm"
  | "bc5-rg-snorm"
  | "bc6h-rgb-ufloat"
  | "bc6h-rgb-float"
  | "bc7-rgba-unorm"
  | "bc7-rgba-unorm-srgb"
  | "depth24unorm-stencil8"
  | "depth32float-stencil8";
type GPUTextureSampleType =
  | "float"
  | "unfilterable-float"
  | "depth"
  | "sint"
  | "uint";
type GPUTextureViewDimension =
  | "1d"
  | "2d"
  | "2d-array"
  | "cube"
  | "cube-array"
  | "3d";
type GPUVertexFormat =
  | "uint8x2"
  | "uint8x4"
  | "sint8x2"
  | "sint8x4"
  | "unorm8x2"
  | "unorm8x4"
  | "snorm8x2"
  | "snorm8x4"
  | "uint16x2"
  | "uint16x4"
  | "sint16x2"
  | "sint16x4"
  | "unorm16x2"
  | "unorm16x4"
  | "snorm16x2"
  | "snorm16x4"
  | "float16x2"
  | "float16x4"
  | "float32"
  | "float32x2"
  | "float32x3"
  | "float32x4"
  | "uint32"
  | "uint32x2"
  | "uint32x3"
  | "uint32x4"
  | "sint32"
  | "sint32x2"
  | "sint32x3"
  | "sint32x4";

interface GPUBindGroupDescriptor
  extends GPUObjectDescriptorBase {
  layout: GPUBindGroupLayout;
  entries: Array<GPUBindGroupEntry>;
}

interface GPUBindGroupEntry {
  binding: GPUIndex32;
  resource: GPUBindingResource;
}

interface GPUBindGroupLayoutDescriptor
  extends GPUObjectDescriptorBase {
  entries: Array<GPUBindGroupLayoutEntry>;
}

interface GPUBindGroupLayoutEntry {
  /**
   * A unique identifier for a resource binding within a
   * {@link GPUBindGroupLayoutEntry}, a corresponding {@link GPUBindGroupEntry},
   * and the {@link GPUShaderModule}s.
   */
  binding: GPUIndex32;
  /**
   * A bitset of the members of {@link GPUShaderStage}.
   * Each set bit indicates that a {@link GPUBindGroupLayoutEntry}'s resource
   * will be accessible from the associated shader stage.
   */
  visibility: GPUShaderStageFlags;
  /**
   * When not `undefined`, indicates the binding resource type for this {@link GPUBindGroupLayoutEntry}
   * is {@link GPUBufferBinding}.
   */
  buffer?: GPUBufferBindingLayout;
  /**
   * When not `undefined`, indicates the binding resource type for this {@link GPUBindGroupLayoutEntry}
   * is {@link GPUSampler}.
   */
  sampler?: GPUSamplerBindingLayout;
  /**
   * When not `undefined`, indicates the binding resource type for this {@link GPUBindGroupLayoutEntry}
   * is {@link GPUTextureView}.
   */
  texture?: GPUTextureBindingLayout;
  /**
   * When not `undefined`, indicates the binding resource type for this {@link GPUBindGroupLayoutEntry}
   * is {@link GPUTextureView}.
   */
  storageTexture?: GPUStorageTextureBindingLayout;
  /**
   * When not `undefined`, indicates the binding resource type for this {@link GPUBindGroupLayoutEntry}
   * is {@link GPUExternalTexture}.
   */
  externalTexture?: GPUExternalTextureBindingLayout;
}

interface GPUBlendComponent {
  srcFactor?: GPUBlendFactor;
  dstFactor?: GPUBlendFactor;
  operation?: GPUBlendOperation;
}

interface GPUBlendState {
  color: GPUBlendComponent;
  alpha: GPUBlendComponent;
}

interface GPUBufferBinding {
  buffer: GPUBuffer;
  offset?: GPUSize64;
  size?: GPUSize64;
}

interface GPUBufferBindingLayout {
  /**
   * Indicates the type required for buffers bound to this bindings.
   */
  type?: GPUBufferBindingType;
  /**
   * Indicates whether this binding requires a dynamic offset.
   */
  hasDynamicOffset?: boolean;
  /**
   * May be used to indicate the minimum buffer binding size.
   */
  minBindingSize?: GPUSize64;
}

interface GPUBufferDescriptor
  extends GPUObjectDescriptorBase {
  size: GPUSize64;
  usage: GPUBufferUsageFlags;
  mappedAtCreation?: boolean;
}

interface GPUColorDict {
  r: number;
  g: number;
  b: number;
  a: number;
}

interface GPUColorTargetState {
  format: GPUTextureFormat;
  blend?: GPUBlendState;
  writeMask?: GPUColorWriteFlags;
}

type GPUCommandBufferDescriptor = GPUObjectDescriptorBase;

interface GPUCommandEncoderDescriptor
  extends GPUObjectDescriptorBase {
  /**
   * Enable measurement of the GPU execution time of the entire command buffer.
   */
  measureExecutionTime?: boolean;
}

type GPUComputePassDescriptor = GPUObjectDescriptorBase;

interface GPUComputePipelineDescriptor
  extends GPUPipelineDescriptorBase {
  compute: GPUProgrammableStage;
}

interface GPUDepthStencilState {
  format: GPUTextureFormat;
  depthWriteEnabled?: boolean;
  depthCompare?: GPUCompareFunction;
  stencilFront?: GPUStencilFaceState;
  stencilBack?: GPUStencilFaceState;
  stencilReadMask?: GPUStencilValue;
  stencilWriteMask?: GPUStencilValue;
  depthBias?: GPUDepthBias;
  depthBiasSlopeScale?: number;
  depthBiasClamp?: number;
}

interface GPUDeviceDescriptor
  extends GPUObjectDescriptorBase {
  /**
   * Specifies the features that are required by the device request.
   * The request will fail if the adapter cannot provide these features.
   * Exactly the specified set of features, and no more or less, will be allowed in validation
   * of API calls on the resulting device.
   */
  requiredFeatures?: Array<GPUFeatureName>;
  /**
   * Specifies the limits that are required by the device request.
   * The request will fail if the adapter cannot provide these limits.
   * Each key must be the name of a member of supported limits.
   * Exactly the specified limits, and no limit/better or worse,
   * will be allowed in validation of API calls on the resulting device.
   * <!-- If we ever need limit types other than GPUSize32, we can change the value type to
   * `double` or `any` in the future and write out the type conversion explicitly (by reference
   * to WebIDL spec). Or change the entire type to `any` and add back a `dictionary GPULimits`
   * and define the conversion of the whole object by reference to WebIDL. -->
   */
  requiredLimits?: Record<
    string,
    GPUSize32
  >;
}

interface GPUExtent3DDict {
  width: GPUIntegerCoordinate;
  height?: GPUIntegerCoordinate;
  depthOrArrayLayers?: GPUIntegerCoordinate;
}

interface GPUExternalTextureBindingLayout {}

interface GPUExternalTextureDescriptor
  extends GPUObjectDescriptorBase {
  source: HTMLVideoElement;
  colorSpace?: GPUPredefinedColorSpace;
}

interface GPUFragmentState
  extends GPUProgrammableStage {
  targets: Array<GPUColorTargetState>;
}

interface GPUImageCopyBuffer
  extends GPUImageDataLayout {
  buffer: GPUBuffer;
}

interface GPUImageCopyExternalImage {
  /**
   * The source of the image copy. The copy source data is captured at the moment that
   * {@link GPUQueue#copyExternalImageToTexture} is issued.
   */
  source:
    | ImageBitmap
    | HTMLCanvasElement
    | OffscreenCanvas;
  /**
   * Defines the origin of the copy - the minimum corner of the source sub-region to copy from.
   * Together with `copySize`, defines the full copy sub-region.
   */
  origin?: GPUOrigin2D;
}

interface GPUImageCopyTexture {
  /**
   * Texture to copy to/from.
   */
  texture: GPUTexture;
  /**
   * Mip-map level of the {@link GPUImageCopyTexture#texture} to copy to/from.
   */
  mipLevel?: GPUIntegerCoordinate;
  /**
   * Defines the origin of the copy - the minimum corner of the texture sub-region to copy to/from.
   * Together with `copySize`, defines the full copy sub-region.
   */
  origin?: GPUOrigin3D;
  /**
   * Defines which aspects of the {@link GPUImageCopyTexture#texture} to copy to/from.
   */
  aspect?: GPUTextureAspect;
}

interface GPUImageCopyTextureTagged
  extends GPUImageCopyTexture {
  /**
   * Describes the color space and encoding used to encode data into the destination texture.
   * Note:
   * If {@link GPUImageCopyTextureTagged#colorSpace} matches the source image, no conversion occurs.
   * {@link ImageBitmap} color space tagging and conversion can be controlled via {@link ImageBitmapOptions}.
   */
  colorSpace?: GPUPredefinedColorSpace;
  /**
   * Describes whether the data written into the texture should be have its RGB channels
   * premultiplied by the alpha channel, or not.
   * If this option is set to `true` and the {@link GPUImageCopyExternalImage#source} is also
   * premultiplied, the source RGB values must be preserved even if they exceed their
   * corresponding alpha values.
   * Note:
   * If {@link GPUImageCopyTextureTagged#premultipliedAlpha} matches the source image, no conversion occurs.
   * 2d canvases are [[html#premultiplied-alpha-and-the-2d-rendering-context|always premultiplied]],
   * while WebGL canvases can be controlled via <l spec=html>WebGLContextAttributes</l>.
   * {@link ImageBitmap} premultiplication can be controlled via {@link ImageBitmapOptions}.
   */
  premultipliedAlpha?: boolean;
}

interface GPUImageDataLayout {
  offset?: GPUSize64;
  /**
   * The stride, in bytes, between the beginning of each block row and the subsequent block row.
   * Required if there are multiple block rows (i.e. the height or depth is more than one block).
   */
  bytesPerRow?: GPUSize32;
  /**
   * Number of block rows per single image of the texture.
   * {@link GPUImageDataLayout#rowsPerImage} &times;
   * {@link GPUImageDataLayout#bytesPerRow} is the stride, in bytes, between the beginning of each image of data and the subsequent image.
   * Required if there are multiple images (i.e. the depth is more than one).
   */
  rowsPerImage?: GPUSize32;
}

interface GPUMultisampleState {
  count?: GPUSize32;
  mask?: GPUSampleMask;
  alphaToCoverageEnabled?: boolean;
}

interface GPUObjectDescriptorBase {
  /**
   * The initial value of {@link GPUObjectBase#label|GPUObjectBase.label}.
   */
  label?: string;
}

interface GPUOrigin2DDict {
  x?: GPUIntegerCoordinate;
  y?: GPUIntegerCoordinate;
}

interface GPUOrigin3DDict {
  x?: GPUIntegerCoordinate;
  y?: GPUIntegerCoordinate;
  z?: GPUIntegerCoordinate;
}

interface GPUPipelineDescriptorBase
  extends GPUObjectDescriptorBase {
  layout?: GPUPipelineLayout;
}

interface GPUPipelineLayoutDescriptor
  extends GPUObjectDescriptorBase {
  bindGroupLayouts: Array<GPUBindGroupLayout>;
}

interface GPUPresentationConfiguration
  extends GPUObjectDescriptorBase {
  device: GPUDevice;
  format: GPUTextureFormat;
  usage?: GPUTextureUsageFlags;
  compositingAlphaMode?: GPUCanvasCompositingAlphaMode;
  size?: GPUExtent3D;
}

interface GPUPrimitiveState {
  topology?: GPUPrimitiveTopology;
  stripIndexFormat?: GPUIndexFormat;
  frontFace?: GPUFrontFace;
  cullMode?: GPUCullMode;
  clampDepth?: boolean;
}

interface GPUProgrammableStage {
  module: GPUShaderModule;
  entryPoint: string;
  constants?: Record<
    string,
    GPUPipelineConstantValue
  >;
}

interface GPUQuerySetDescriptor
  extends GPUObjectDescriptorBase {
  /**
   * The type of queries managed by {@link GPUQuerySet}.
   */
  type: GPUQueryType;
  /**
   * The number of queries managed by {@link GPUQuerySet}.
   */
  count: GPUSize32;
  /**
   * The set of {@link GPUPipelineStatisticName} values in this sequence defines which pipeline statistics will be returned in the new query set.
   */
  pipelineStatistics?: Array<GPUPipelineStatisticName>;
}

type GPURenderBundleDescriptor = GPUObjectDescriptorBase;

interface GPURenderBundleEncoderDescriptor
  extends GPUObjectDescriptorBase {
  colorFormats: Array<GPUTextureFormat>;
  depthStencilFormat?: GPUTextureFormat;
  sampleCount?: GPUSize32;
}

interface GPURenderPassColorAttachment {
  /**
   * A {@link GPUTextureView} describing the texture subresource that will be output to for this
   * color attachment.
   */
  view: GPUTextureView;
  /**
   * A {@link GPUTextureView} describing the texture subresource that will receive the resolved
   * output for this color attachment if {@link GPURenderPassColorAttachment#view} is
   * multisampled.
   */
  resolveTarget?: GPUTextureView;
  /**
   * If a {@link GPULoadOp}, indicates the load operation to perform on
   * {@link GPURenderPassColorAttachment#view} prior to executing the render pass.
   * If a {@link GPUColor}, indicates the value to clear {@link GPURenderPassColorAttachment#view}
   * to prior to executing the render pass.
   * Note: It is recommended to prefer a clear-value; see {@link GPULoadOp#"load"}.
   */
  loadValue:
    | GPULoadOp
    | GPUColor;
  /**
   * The store operation to perform on {@link GPURenderPassColorAttachment#view}
   * after executing the render pass.
   */
  storeOp: GPUStoreOp;
}

interface GPURenderPassDepthStencilAttachment {
  /**
   * A {@link GPUTextureView} describing the texture subresource that will be output to
   * and read from for this depth/stencil attachment.
   */
  view: GPUTextureView;
  /**
   * If a {@link GPULoadOp}, indicates the load operation to perform on
   * {@link GPURenderPassDepthStencilAttachment#view}'s depth component prior to
   * executing the render pass.
   * If a `float`, indicates the value to clear {@link GPURenderPassDepthStencilAttachment#view}'s
   * depth component to prior to executing the render pass.
   * Note: It is recommended to prefer a clear-value; see {@link GPULoadOp#"load"}.
   */
  depthLoadValue:
    | GPULoadOp
    | number;
  /**
   * The store operation to perform on {@link GPURenderPassDepthStencilAttachment#view}'s
   * depth component after executing the render pass.
   * Note: It is recommended to prefer a clear-value; see {@link GPULoadOp#"load"}.
   */
  depthStoreOp: GPUStoreOp;
  /**
   * Indicates that the depth component of {@link GPURenderPassDepthStencilAttachment#view}
   * is read only.
   */
  depthReadOnly?: boolean;
  /**
   * If a {@link GPULoadOp}, indicates the load operation to perform on
   * {@link GPURenderPassDepthStencilAttachment#view}'s stencil component prior to
   * executing the render pass.
   * If a {@link GPUStencilValue}, indicates the value to clear
   * {@link GPURenderPassDepthStencilAttachment#view}'s stencil component to prior to
   * executing the render pass.
   */
  stencilLoadValue:
    | GPULoadOp
    | GPUStencilValue;
  /**
   * The store operation to perform on {@link GPURenderPassDepthStencilAttachment#view}'s
   * stencil component after executing the render pass.
   */
  stencilStoreOp: GPUStoreOp;
  /**
   * Indicates that the stencil component of {@link GPURenderPassDepthStencilAttachment#view}
   * is read only.
   */
  stencilReadOnly?: boolean;
}

interface GPURenderPassDescriptor
  extends GPUObjectDescriptorBase {
  /**
   * The set of {@link GPURenderPassColorAttachment} values in this sequence defines which
   * color attachments will be output to when executing this render pass.
   */
  colorAttachments: Array<GPURenderPassColorAttachment>;
  /**
   * The {@link GPURenderPassDepthStencilAttachment} value that defines the depth/stencil
   * attachment that will be output to and tested against when executing this render pass.
   */
  depthStencilAttachment?: GPURenderPassDepthStencilAttachment;
  /**
   * The {@link GPUQuerySet} value defines where the occlusion query results will be stored for this pass.
   */
  occlusionQuerySet?: GPUQuerySet;
}

interface GPURenderPipelineDescriptor
  extends GPUPipelineDescriptorBase {
  vertex: GPUVertexState;
  primitive?: GPUPrimitiveState;
  depthStencil?: GPUDepthStencilState;
  multisample?: GPUMultisampleState;
  fragment?: GPUFragmentState;
}

interface GPURequestAdapterOptions {
  powerPreference?: GPUPowerPreference;
  forceSoftware?: boolean;
}

interface GPUSamplerBindingLayout {
  /**
   * Indicates the required type of a sampler bound to this bindings.
   */
  type?: GPUSamplerBindingType;
}

interface GPUSamplerDescriptor
  extends GPUObjectDescriptorBase {
  addressModeU?: GPUAddressMode;
  addressModeV?: GPUAddressMode;
  addressModeW?: GPUAddressMode;
  magFilter?: GPUFilterMode;
  minFilter?: GPUFilterMode;
  mipmapFilter?: GPUFilterMode;
  lodMinClamp?: number;
  lodMaxClamp?: number;
  compare?: GPUCompareFunction;
  maxAnisotropy?: number;
}

interface GPUShaderModuleDescriptor
  extends GPUObjectDescriptorBase {
  code: string;
  sourceMap?: any;
}

interface GPUStencilFaceState {
  compare?: GPUCompareFunction;
  failOp?: GPUStencilOperation;
  depthFailOp?: GPUStencilOperation;
  passOp?: GPUStencilOperation;
}

interface GPUStorageTextureBindingLayout {
  /**
   * Indicates whether texture views bound to this binding will be bound for read-only or
   * write-only access.
   */
  access: GPUStorageTextureAccess;
  /**
   * The required {@link GPUTextureViewDescriptor#format} of texture views bound to this binding.
   */
  format: GPUTextureFormat;
  /**
   * Indicates the required {@link GPUTextureViewDescriptor#dimension} for texture views bound to
   * this binding.
   * Note:
   * This enables Metal-based WebGPU implementations to back the respective bind groups with
   * `MTLArgumentBuffer` objects that are more efficient to bind at run-time.
   */
  viewDimension?: GPUTextureViewDimension;
}

interface GPUTextureBindingLayout {
  /**
   * Indicates the type required for texture views bound to this binding.
   */
  sampleType?: GPUTextureSampleType;
  /**
   * Indicates the required {@link GPUTextureViewDescriptor#dimension} for texture views bound to
   * this binding.
   * Note:
   * This enables Metal-based WebGPU implementations to back the respective bind groups with
   * `MTLArgumentBuffer` objects that are more efficient to bind at run-time.
   */
  viewDimension?: GPUTextureViewDimension;
  /**
   * Inicates whether or not texture views bound to this binding must be multisampled.
   */
  multisampled?: boolean;
}

interface GPUTextureDescriptor
  extends GPUObjectDescriptorBase {
  size: GPUExtent3D;
  mipLevelCount?: GPUIntegerCoordinate;
  sampleCount?: GPUSize32;
  dimension?: GPUTextureDimension;
  format: GPUTextureFormat;
  usage: GPUTextureUsageFlags;
}

interface GPUTextureViewDescriptor
  extends GPUObjectDescriptorBase {
  format?: GPUTextureFormat;
  dimension?: GPUTextureViewDimension;
  aspect?: GPUTextureAspect;
  baseMipLevel?: GPUIntegerCoordinate;
  mipLevelCount?: GPUIntegerCoordinate;
  baseArrayLayer?: GPUIntegerCoordinate;
  arrayLayerCount?: GPUIntegerCoordinate;
}

interface GPUUncapturedErrorEventInit
  extends EventInit {
  error: GPUError;
}

interface GPUVertexAttribute {
  format: GPUVertexFormat;
  offset: GPUSize64;
  shaderLocation: GPUIndex32;
}

interface GPUVertexBufferLayout {
  arrayStride: GPUSize64;
  stepMode?: GPUInputStepMode;
  attributes: Array<GPUVertexAttribute>;
}

interface GPUVertexState
  extends GPUProgrammableStage {
  buffers?: Array<GPUVertexBufferLayout | null>;
}

interface GPUObjectBase {
  /**
   * A label which can be used by development tools (such as error/warning messages,
   * browser developer tools, or platform debugging utilities) to identify the underlying
   * internal object to the developer.
   * It has no specified format, and therefore cannot be reliably machine-parsed.
   * In any given situation, the user agent may or may not choose to use this label.
   */
  label:
    | string
    | null;
}

interface GPUPipelineBase {
  /**
   * Gets a {@link GPUBindGroupLayout} that is compatible with the {@link GPUPipelineBase}'s
   * {@link GPUBindGroupLayout} at `index`.
   * @param index - Index into the pipeline layout's {@link GPUPipelineLayout#[[bindGroupLayouts]]}
   * 	sequence.
   */
  getBindGroupLayout(
    index: number
  ): GPUBindGroupLayout;
}

interface GPUProgrammablePassEncoder {
  /**
   * Sets the current {@link GPUBindGroup} for the given index.
   * @param index - The index to set the bind group at.
   * @param bindGroup - Bind group to use for subsequent render or compute commands.
   * 	<!--The overload appears to be confusing bikeshed, and it ends up expecting this to
   * 	define the arguments for the 5-arg variant of the method, despite the "for"
   * 	explicitly pointing at the 3-arg variant.-->
   * @param dynamicOffsets - Array containing buffer offsets in bytes for each entry in
   * 	`bindGroup` marked as {@link GPUBindGroupLayoutEntry#buffer}.{@link GPUBufferBindingLayout#hasDynamicOffset}.-->
   */
  setBindGroup(
    index: GPUIndex32,
    bindGroup: GPUBindGroup,
    dynamicOffsets?: Array<GPUBufferDynamicOffset>
  ): undefined;
  /**
   * Sets the current {@link GPUBindGroup} for the given index, specifying dynamic offsets as a subset
   * of a {@link Uint32Array}.
   * @param index - The index to set the bind group at.
   * @param bindGroup - Bind group to use for subsequent render or compute commands.
   * @param dynamicOffsetsData - Array containing buffer offsets in bytes for each entry in
   * 	`bindGroup` marked as {@link GPUBindGroupLayoutEntry#buffer}.{@link GPUBufferBindingLayout#hasDynamicOffset}.
   * @param dynamicOffsetsDataStart - Offset in elements into `dynamicOffsetsData` where the
   * 	buffer offset data begins.
   * @param dynamicOffsetsDataLength - Number of buffer offsets to read from `dynamicOffsetsData`.
   */
  setBindGroup(
    index: GPUIndex32,
    bindGroup: GPUBindGroup,
    dynamicOffsetsData: Uint32Array,
    dynamicOffsetsDataStart: GPUSize64,
    dynamicOffsetsDataLength: GPUSize32
  ): undefined;
  /**
   * Marks the beginning of a labeled group of commands for the {@link GPUProgrammablePassEncoder}.
   * @param groupLabel - The label for the command group.
   */
  pushDebugGroup(
    groupLabel: string
  ): undefined;
  /**
   * Marks the end of a labeled group of commands for the {@link GPUProgrammablePassEncoder}.
   */
  popDebugGroup(): undefined;
  /**
   * Inserts a single debug marker label into the {@link GPUProgrammablePassEncoder}'s commands sequence.
   * @param markerLabel - The label to insert.
   */
  insertDebugMarker(
    markerLabel: string
  ): undefined;
}

interface GPURenderEncoderBase {
  /**
   * Sets the current {@link GPURenderPipeline}.
   * @param pipeline - The render pipeline to use for subsequent drawing commands.
   */
  setPipeline(
    pipeline: GPURenderPipeline
  ): undefined;
  /**
   * Sets the current index buffer.
   * @param buffer - Buffer containing index data to use for subsequent drawing commands.
   * @param indexFormat - Format of the index data contained in `buffer`.
   * @param offset - Offset in bytes into `buffer` where the index data begins.
   * @param size - Size in bytes of the index data in `buffer`.
   * 	If `0`, `buffer.size` - `offset` is used.
   */
  setIndexBuffer(
    buffer: GPUBuffer,
    indexFormat: GPUIndexFormat,
    offset?: GPUSize64,
    size?: GPUSize64
  ): undefined;
  /**
   * Sets the current vertex buffer for the given slot.
   * @param slot - The vertex buffer slot to set the vertex buffer for.
   * @param buffer - Buffer containing vertex data to use for subsequent drawing commands.
   * @param offset - Offset in bytes into `buffer` where the vertex data begins.
   * @param size - Size in bytes of the vertex data in `buffer`.
   * 	If `0`, `buffer.size` - `offset` is used.
   */
  setVertexBuffer(
    slot: GPUIndex32,
    buffer: GPUBuffer,
    offset?: GPUSize64,
    size?: GPUSize64
  ): undefined;
  /**
   * Draws primitives.
   * See [[#rendering-operations]] for the detailed specification.
   * @param vertexCount - The number of vertices to draw.
   * @param instanceCount - The number of instances to draw.
   * @param firstVertex - Offset into the vertex buffers, in vertices, to begin drawing from.
   * @param firstInstance - First instance to draw.
   */
  draw(
    vertexCount: GPUSize32,
    instanceCount?: GPUSize32,
    firstVertex?: GPUSize32,
    firstInstance?: GPUSize32
  ): undefined;
  /**
   * Draws indexed primitives.
   * See [[#rendering-operations]] for the detailed specification.
   * @param indexCount - The number of indices to draw.
   * @param instanceCount - The number of instances to draw.
   * @param firstIndex - Offset into the index buffer, in indices, begin drawing from.
   * @param baseVertex - Added to each index value before indexing into the vertex buffers.
   * @param firstInstance - First instance to draw.
   */
  drawIndexed(
    indexCount: GPUSize32,
    instanceCount?: GPUSize32,
    firstIndex?: GPUSize32,
    baseVertex?: GPUSignedOffset32,
    firstInstance?: GPUSize32
  ): undefined;
  /**
   * Draws primitives using parameters read from a {@link GPUBuffer}.
   * See [[#rendering-operations]] for the detailed specification.
   * packed block of **four 32-bit unsigned integer values (16 bytes total)**, given in the same
   * order as the arguments for {@link GPURenderEncoderBase#draw}. For example:
   * @param indirectBuffer - Buffer containing the indirect draw parameters.
   * @param indirectOffset - Offset in bytes into `indirectBuffer` where the drawing data begins.
   */
  drawIndirect(
    indirectBuffer: GPUBuffer,
    indirectOffset: GPUSize64
  ): undefined;
  /**
   * Draws indexed primitives using parameters read from a {@link GPUBuffer}.
   * See [[#rendering-operations]] for the detailed specification.
   * tightly packed block of **five 32-bit unsigned integer values (20 bytes total)**, given in
   * the same order as the arguments for {@link GPURenderEncoderBase#drawIndexed}. For example:
   * @param indirectBuffer - Buffer containing the indirect drawIndexed parameters.
   * @param indirectOffset - Offset in bytes into `indirectBuffer` where the drawing data begins.
   */
  drawIndexedIndirect(
    indirectBuffer: GPUBuffer,
    indirectOffset: GPUSize64
  ): undefined;
}

interface NavigatorGPU {
  readonly gpu: GPU;
}

interface GPU {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPU";
  /**
   * Requests an adapter from the user agent.
   * The user agent chooses whether to return an adapter, and, if so,
   * chooses according to the provided options.
   * @param options - Criteria used to select the adapter.
   */
  requestAdapter(
    options?: GPURequestAdapterOptions
  ): Promise<GPUAdapter | null>;
}

declare var GPU: {
  prototype: GPU;
};

interface GPUAdapter {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUAdapter";
  /**
   * A human-readable name identifying the adapter.
   * The contents are implementation-defined.
   */
  readonly name: string;
  /**
   * The set of values in `this`.{@link GPUAdapter#[[adapter]]}.{@link adapter#[[features]]}.
   */
  readonly features: GPUSupportedFeatures;
  /**
   * The limits in `this`.{@link GPUAdapter#[[adapter]]}.{@link adapter#[[limits]]}.
   */
  readonly limits: GPUSupportedLimits;
  /**
   * Returns the value of {@link GPUAdapter#[[adapter]]}.{@link adapter#[[software]]}.
   */
  readonly isSoftware: boolean;
  /**
   * Requests a device from the adapter.
   * @param descriptor - Description of the {@link GPUDevice} to request.
   */
  requestDevice(
    descriptor?: GPUDeviceDescriptor
  ): Promise<GPUDevice>;
}

declare var GPUAdapter: {
  prototype: GPUAdapter;
};

interface GPUBindGroup
  extends GPUObjectBase {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUBindGroup";
}

declare var GPUBindGroup: {
  prototype: GPUBindGroup;
};

interface GPUBindGroupLayout
  extends GPUObjectBase {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUBindGroupLayout";
}

declare var GPUBindGroupLayout: {
  prototype: GPUBindGroupLayout;
};

interface GPUBuffer
  extends GPUObjectBase {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUBuffer";
  /**
   * Maps the given range of the {@link GPUBuffer} and resolves the returned {@link Promise} when the
   * {@link GPUBuffer}'s content is ready to be accessed with {@link GPUBuffer#getMappedRange}.
   * @param mode - Whether the buffer should be mapped for reading or writing.
   * @param offset - Offset in bytes into the buffer to the start of the range to map.
   * @param size - Size in bytes of the range to map.
   */
  mapAsync(
    mode: GPUMapModeFlags,
    offset?: GPUSize64,
    size?: GPUSize64
  ): Promise<undefined>;
  /**
   * Returns a {@link ArrayBuffer} with the contents of the {@link GPUBuffer} in the given mapped range.
   * @param offset - Offset in bytes into the buffer to return buffer contents from.
   * @param size - Size in bytes of the {@link ArrayBuffer} to return.
   */
  getMappedRange(
    offset?: GPUSize64,
    size?: GPUSize64
  ): ArrayBuffer;
  /**
   * Unmaps the mapped range of the {@link GPUBuffer} and makes it's contents available for use by the
   * GPU again.
   */
  unmap(): undefined;
  /**
   * Destroys the {@link GPUBuffer}.
   */
  destroy(): undefined;
}

declare var GPUBuffer: {
  prototype: GPUBuffer;
};

interface GPUBufferUsage {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUBufferUsage";
  readonly MAP_READ: GPUFlagsConstant;
  readonly MAP_WRITE: GPUFlagsConstant;
  readonly COPY_SRC: GPUFlagsConstant;
  readonly COPY_DST: GPUFlagsConstant;
  readonly INDEX: GPUFlagsConstant;
  readonly VERTEX: GPUFlagsConstant;
  readonly UNIFORM: GPUFlagsConstant;
  readonly STORAGE: GPUFlagsConstant;
  readonly INDIRECT: GPUFlagsConstant;
  readonly QUERY_RESOLVE: GPUFlagsConstant;
}

declare var GPUBufferUsage: {
  prototype: GPUBufferUsage;
  readonly MAP_READ: GPUFlagsConstant;
  readonly MAP_WRITE: GPUFlagsConstant;
  readonly COPY_SRC: GPUFlagsConstant;
  readonly COPY_DST: GPUFlagsConstant;
  readonly INDEX: GPUFlagsConstant;
  readonly VERTEX: GPUFlagsConstant;
  readonly UNIFORM: GPUFlagsConstant;
  readonly STORAGE: GPUFlagsConstant;
  readonly INDIRECT: GPUFlagsConstant;
  readonly QUERY_RESOLVE: GPUFlagsConstant;
};

interface GPUColorWrite {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUColorWrite";
  readonly RED: GPUFlagsConstant;
  readonly GREEN: GPUFlagsConstant;
  readonly BLUE: GPUFlagsConstant;
  readonly ALPHA: GPUFlagsConstant;
  readonly ALL: GPUFlagsConstant;
}

declare var GPUColorWrite: {
  prototype: GPUColorWrite;
  readonly RED: GPUFlagsConstant;
  readonly GREEN: GPUFlagsConstant;
  readonly BLUE: GPUFlagsConstant;
  readonly ALPHA: GPUFlagsConstant;
  readonly ALL: GPUFlagsConstant;
};

interface GPUCommandBuffer
  extends GPUObjectBase {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUCommandBuffer";
  /**
   * The total time, in seconds, that the GPU took to execute this command buffer.
   * Note:
   * If {@link GPUCommandEncoderDescriptor#measureExecutionTime} is `true`,
   * this resolves after the command buffer executes.
   * Otherwise, this rejects with an {@link OperationError}.
   * <div class=issue>
   * Specify the creation and resolution of the promise.
   * In {@link GPUCommandEncoder#finish}, it should be specified that a
   * new promise is created and stored in this attribute.
   * The promise starts rejected if {@link GPUCommandEncoderDescriptor#measureExecutionTime}
   * is `false`. If the finish() fails, then the promise resolves to 0.
   * In {@link GPUQueue#submit}, it should be specified that (if
   * {@link GPUCommandEncoderDescriptor#measureExecutionTime} is set), work
   * is issued to read back the execution time, and, when that completes,
   * the promise is resolved with that value.
   * If the submit() fails, then the promise resolves to 0.
   * </div>
   */
  readonly executionTime: Promise<number>;
}

declare var GPUCommandBuffer: {
  prototype: GPUCommandBuffer;
};

interface GPUCommandEncoder
  extends GPUObjectBase {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUCommandEncoder";
  /**
   * Begins encoding a render pass described by `descriptor`.
   * @param descriptor - Description of the {@link GPURenderPassEncoder} to create.
   */
  beginRenderPass(
    descriptor: GPURenderPassDescriptor
  ): GPURenderPassEncoder;
  /**
   * Begins encoding a compute pass described by `descriptor`.
   * 	descriptor:
   */
  beginComputePass(
    descriptor?: GPUComputePassDescriptor
  ): GPUComputePassEncoder;
  /**
   * Encode a command into the {@link GPUCommandEncoder} that copies data from a sub-region of a
   * {@link GPUBuffer} to a sub-region of another {@link GPUBuffer}.
   * @param source - The {@link GPUBuffer} to copy from.
   * @param sourceOffset - Offset in bytes into `source` to begin copying from.
   * @param destination - The {@link GPUBuffer} to copy to.
   * @param destinationOffset - Offset in bytes into `destination` to place the copied data.
   * @param size - Bytes to copy.
   */
  copyBufferToBuffer(
    source: GPUBuffer,
    sourceOffset: GPUSize64,
    destination: GPUBuffer,
    destinationOffset: GPUSize64,
    size: GPUSize64
  ): undefined;
  /**
   * Encode a command into the {@link GPUCommandEncoder} that copies data from a sub-region of a
   * {@link GPUBuffer} to a sub-region of one or multiple continuous texture subresources.
   * @param source - Combined with `copySize`, defines the region of the source buffer.
   * @param destination - Combined with `copySize`, defines the region of the destination texture subresource.
   * 	`copySize`:
   */
  copyBufferToTexture(
    source: GPUImageCopyBuffer,
    destination: GPUImageCopyTexture,
    copySize: GPUExtent3D
  ): undefined;
  /**
   * Encode a command into the {@link GPUCommandEncoder} that copies data from a sub-region of one or
   * multiple continuous texture subresourcesto a sub-region of a {@link GPUBuffer}.
   * @param source - Combined with `copySize`, defines the region of the source texture subresources.
   * @param destination - Combined with `copySize`, defines the region of the destination buffer.
   * 	`copySize`:
   */
  copyTextureToBuffer(
    source: GPUImageCopyTexture,
    destination: GPUImageCopyBuffer,
    copySize: GPUExtent3D
  ): undefined;
  /**
   * Encode a command into the {@link GPUCommandEncoder} that copies data from a sub-region of one
   * or multiple contiguous texture subresources to another sub-region of one or
   * multiple continuous texture subresources.
   * @param source - Combined with `copySize`, defines the region of the source texture subresources.
   * @param destination - Combined with `copySize`, defines the region of the destination texture subresources.
   * 	`copySize`:
   */
  copyTextureToTexture(
    source: GPUImageCopyTexture,
    destination: GPUImageCopyTexture,
    copySize: GPUExtent3D
  ): undefined;
  /**
   * Marks the beginning of a labeled group of commands for the {@link GPUCommandEncoder}.
   * @param groupLabel - The label for the command group.
   */
  pushDebugGroup(
    groupLabel: string
  ): undefined;
  /**
   * Marks the end of a labeled group of commands for the {@link GPUCommandEncoder}.
   */
  popDebugGroup(): undefined;
  /**
   * Marks a point in a stream of commands with a label string.
   * @param markerLabel - The label to insert.
   */
  insertDebugMarker(
    markerLabel: string
  ): undefined;
  /**
   * Writes a timestamp value into `querySet` when all previous commands have completed executing.
   * @param querySet - The query set that will store the timestamp values.
   * @param queryIndex - The index of the query in the query set.
   */
  writeTimestamp(
    querySet: GPUQuerySet,
    queryIndex: GPUSize32
  ): undefined;
  /**
   * 	querySet:
   * 	firstQuery:
   * 	queryCount:
   * 	destination:
   * 	destinationOffset:
   */
  resolveQuerySet(
    querySet: GPUQuerySet,
    firstQuery: GPUSize32,
    queryCount: GPUSize32,
    destination: GPUBuffer,
    destinationOffset: GPUSize64
  ): undefined;
  /**
   * Completes recording of the commands sequence and returns a corresponding {@link GPUCommandBuffer}.
   * 	descriptor:
   */
  finish(
    descriptor?: GPUCommandBufferDescriptor
  ): GPUCommandBuffer;
}

declare var GPUCommandEncoder: {
  prototype: GPUCommandEncoder;
};

interface GPUCompilationInfo {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUCompilationInfo";
  readonly messages: ReadonlyArray<GPUCompilationMessage>;
}

declare var GPUCompilationInfo: {
  prototype: GPUCompilationInfo;
};

interface GPUCompilationMessage {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUCompilationMessage";
  /**
   * A human-readable string containing the message generated during the shader compilation.
   *
   */
  readonly message: string;
  /**
   * The severity level of the message.
   */
  readonly type: GPUCompilationMessageType;
  /**
   * The line number in the shader {@link GPUShaderModuleDescriptor#code} the
   * {@link GPUCompilationMessage#message} corresponds to. Value is one-based, such that a lineNum of
   * `1` indicates the first line of the shader {@link GPUShaderModuleDescriptor#code}.
   *
   * If the {@link GPUCompilationMessage#message} corresponds to a substring this points to
   * the line on which the substring begins. Must be `0` if the {@link GPUCompilationMessage#message}
   * does not correspond to any specific point in the shader {@link GPUShaderModuleDescriptor#code}.
   * Issue: Reference WGSL spec when it [defines what a line is](https://gpuweb.github.io/gpuweb/wgsl/#comments).
   */
  readonly lineNum: number;
  /**
   * The offset, in UTF-16 code units, from the beginning of line {@link GPUCompilationMessage#lineNum}
   * of the shader {@link GPUShaderModuleDescriptor#code} to the point or beginning of the substring
   * that the {@link GPUCompilationMessage#message} corresponds to. Value is one-based, such that a
   * {@link GPUCompilationMessage#linePos} of `1` indicates the first character of the line.
   * If {@link GPUCompilationMessage#message} corresponds to a substring this points to the
   * first UTF-16 code unit of the substring. Must be `0` if the {@link GPUCompilationMessage#message}
   * does not correspond to any specific point in the shader {@link GPUShaderModuleDescriptor#code}.
   */
  readonly linePos: number;
  /**
   * The offset from the beginning of the shader {@link GPUShaderModuleDescriptor#code} in UTF-16
   * code units to the point or beginning of the substring that {@link GPUCompilationMessage#message}
   * corresponds to. Must reference the same position as {@link GPUCompilationMessage#lineNum} and
   * {@link GPUCompilationMessage#linePos}. Must be `0` if the {@link GPUCompilationMessage#message}
   * does not correspond to any specific point in the shader {@link GPUShaderModuleDescriptor#code}.
   */
  readonly offset: number;
  /**
   * The number of UTF-16 code units in the substring that {@link GPUCompilationMessage#message}
   * corresponds to. If the message does not correspond with a substring then
   * {@link GPUCompilationMessage#length} must be 0.
   */
  readonly length: number;
}

declare var GPUCompilationMessage: {
  prototype: GPUCompilationMessage;
};

interface GPUComputePassEncoder
  extends GPUObjectBase,
    GPUProgrammablePassEncoder {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUComputePassEncoder";
  /**
   * Sets the current {@link GPUComputePipeline}.
   * @param pipeline - The compute pipeline to use for subsequent dispatch commands.
   */
  setPipeline(
    pipeline: GPUComputePipeline
  ): undefined;
  /**
   * Dispatch work to be performed with the current {@link GPUComputePipeline}.
   * See [[#computing-operations]] for the detailed specification.
   * @param x - X dimension of the grid of workgroups to dispatch.
   * @param y - Y dimension of the grid of workgroups to dispatch.
   * @param z - Z dimension of the grid of workgroups to dispatch.
   */
  dispatch(
    x: GPUSize32,
    y?: GPUSize32,
    z?: GPUSize32
  ): undefined;
  /**
   * Dispatch work to be performed with the current {@link GPUComputePipeline} using parameters read
   * from a {@link GPUBuffer}.
   * See [[#computing-operations]] for the detailed specification.
   * packed block of **three 32-bit unsigned integer values (12 bytes total)**, given in the same
   * order as the arguments for {@link GPUComputePassEncoder#dispatch}. For example:
   * @param indirectBuffer - Buffer containing the indirect dispatch parameters.
   * @param indirectOffset - Offset in bytes into `indirectBuffer` where the dispatch data begins.
   */
  dispatchIndirect(
    indirectBuffer: GPUBuffer,
    indirectOffset: GPUSize64
  ): undefined;
  /**
   * 	querySet:
   * 	queryIndex:
   */
  beginPipelineStatisticsQuery(
    querySet: GPUQuerySet,
    queryIndex: GPUSize32
  ): undefined;
  /**
   */
  endPipelineStatisticsQuery(): undefined;
  /**
   * Writes a timestamp value into `querySet` when all previous commands have completed executing.
   * @param querySet - The query set that will store the timestamp values.
   * @param queryIndex - The index of the query in the query set.
   */
  writeTimestamp(
    querySet: GPUQuerySet,
    queryIndex: GPUSize32
  ): undefined;
  /**
   * Completes recording of the compute pass commands sequence.
   */
  endPass(): undefined;
}

declare var GPUComputePassEncoder: {
  prototype: GPUComputePassEncoder;
};

interface GPUComputePipeline
  extends GPUObjectBase,
    GPUPipelineBase {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUComputePipeline";
}

declare var GPUComputePipeline: {
  prototype: GPUComputePipeline;
};

interface GPUDevice
  extends EventTarget,
    GPUObjectBase {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUDevice";
  /**
   * A set containing the {@link GPUFeatureName} values of the features
   * supported by the device (i.e. the ones with which it was created).
   */
  readonly features: GPUSupportedFeatures;
  /**
   * Exposes the limits supported by the device
   * (which are exactly the ones with which it was created).
   */
  readonly limits: GPUSupportedLimits;
  /**
   * The primary {@link GPUQueue} for this device.
   */
  readonly queue: GPUQueue;
  /**
   * Destroys the device, preventing further operations on it.
   * Outstanding asynchronous operations will fail.
   * Note:
   * Since no further operations can occur on this device, implementations can free resource
   * allocations and abort outstanding asynchronous operations immediately.
   */
  destroy(): undefined;
  /**
   * Creates a {@link GPUBuffer}.
   * @param descriptor - Description of the {@link GPUBuffer} to create.
   */
  createBuffer(
    descriptor: GPUBufferDescriptor
  ): GPUBuffer;
  /**
   * Creates a {@link GPUTexture}.
   * @param descriptor - Description of the {@link GPUTexture} to create.
   */
  createTexture(
    descriptor: GPUTextureDescriptor
  ): GPUTexture;
  /**
   * Creates a {@link GPUBindGroupLayout}.
   * @param descriptor - Description of the {@link GPUSampler} to create.
   */
  createSampler(
    descriptor?: GPUSamplerDescriptor
  ): GPUSampler;
  /**
   * Creates a {@link GPUExternalTexture} wrapping the provided image source.
   * @param descriptor - Provides the external image source object (and any creation options).
   */
  importExternalTexture(
    descriptor: GPUExternalTextureDescriptor
  ): GPUExternalTexture;
  /**
   * Creates a {@link GPUBindGroupLayout}.
   * @param descriptor - Description of the {@link GPUBindGroupLayout} to create.
   */
  createBindGroupLayout(
    descriptor: GPUBindGroupLayoutDescriptor
  ): GPUBindGroupLayout;
  /**
   * Creates a {@link GPUPipelineLayout}.
   * @param descriptor - Description of the {@link GPUPipelineLayout} to create.
   */
  createPipelineLayout(
    descriptor: GPUPipelineLayoutDescriptor
  ): GPUPipelineLayout;
  /**
   * Creates a {@link GPUBindGroup}.
   * @param descriptor - Description of the {@link GPUBindGroup} to create.
   */
  createBindGroup(
    descriptor: GPUBindGroupDescriptor
  ): GPUBindGroup;
  /**
   * Creates a {@link GPUShaderModule}.
   * @param descriptor - Description of the {@link GPUShaderModule} to create.
   */
  createShaderModule(
    descriptor: GPUShaderModuleDescriptor
  ): GPUShaderModule;
  /**
   * Creates a {@link GPUComputePipeline}.
   * @param descriptor - Description of the {@link GPUComputePipeline} to create.
   */
  createComputePipeline(
    descriptor: GPUComputePipelineDescriptor
  ): GPUComputePipeline;
  /**
   * Creates a {@link GPURenderPipeline}.
   * @param descriptor - Description of the {@link GPURenderPipeline} to create.
   */
  createRenderPipeline(
    descriptor: GPURenderPipelineDescriptor
  ): GPURenderPipeline;
  /**
   * Creates a {@link GPUComputePipeline}. The returned {@link Promise} resolves when the created pipeline
   * is ready to be used without additional delay.
   * If pipeline creation fails, the returned {@link Promise} rejects with an {@link OperationError}.
   * Note: Use of this method is preferred whenever possible, as it prevents blocking the
   * queue timeline work on pipeline compilation.
   * @param descriptor - Description of the {@link GPUComputePipeline} to create.
   */
  createComputePipelineAsync(
    descriptor: GPUComputePipelineDescriptor
  ): Promise<GPUComputePipeline>;
  /**
   * Creates a {@link GPURenderPipeline}. The returned {@link Promise} resolves when the created pipeline
   * is ready to be used without additional delay.
   * If pipeline creation fails, the returned {@link Promise} rejects with an {@link OperationError}.
   * Note: Use of this method is preferred whenever possible, as it prevents blocking the
   * queue timeline work on pipeline compilation.
   * @param descriptor - Description of the {@link GPURenderPipeline} to create.
   */
  createRenderPipelineAsync(
    descriptor: GPURenderPipelineDescriptor
  ): Promise<GPURenderPipeline>;
  /**
   * Creates a {@link GPUCommandEncoder}.
   * @param descriptor - Description of the {@link GPUCommandEncoder} to create.
   */
  createCommandEncoder(
    descriptor?: GPUCommandEncoderDescriptor
  ): GPUCommandEncoder;
  /**
   * Creates a {@link GPURenderBundleEncoder}.
   * @param descriptor - Description of the {@link GPURenderBundleEncoder} to create.
   */
  createRenderBundleEncoder(
    descriptor: GPURenderBundleEncoderDescriptor
  ): GPURenderBundleEncoder;
  /**
   * Creates a {@link GPUQuerySet}.
   * @param descriptor - Description of the {@link GPUQuerySet} to create.
   */
  createQuerySet(
    descriptor: GPUQuerySetDescriptor
  ): GPUQuerySet;
  readonly lost: Promise<GPUDeviceLostInfo>;
  /**
   * Issue: Define pushErrorScope.
   */
  pushErrorScope(
    filter: GPUErrorFilter
  ): undefined;
  /**
   * Issue: Define popErrorScope.
   * Rejects with {@link OperationError} if:
   * - The device is lost.
   * - There are no error scopes on the stack.
   */
  popErrorScope(): Promise<GPUError | null>;
  onuncapturederror: EventHandler;
}

declare var GPUDevice: {
  prototype: GPUDevice;
};

interface GPUDeviceLostInfo {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUDeviceLostInfo";
  readonly reason:
    | GPUDeviceLostReason
    | undefined;
  readonly message: string;
}

declare var GPUDeviceLostInfo: {
  prototype: GPUDeviceLostInfo;
};

interface GPUExternalTexture
  extends GPUObjectBase {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUExternalTexture";
}

declare var GPUExternalTexture: {
  prototype: GPUExternalTexture;
};

interface GPUMapMode {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUMapMode";
  readonly READ: GPUFlagsConstant;
  readonly WRITE: GPUFlagsConstant;
}

declare var GPUMapMode: {
  prototype: GPUMapMode;
  readonly READ: GPUFlagsConstant;
  readonly WRITE: GPUFlagsConstant;
};

interface GPUOutOfMemoryError {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUOutOfMemoryError";
}

declare var GPUOutOfMemoryError: {
  prototype: GPUOutOfMemoryError;
  new ();
};

interface GPUPipelineLayout
  extends GPUObjectBase {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUPipelineLayout";
}

declare var GPUPipelineLayout: {
  prototype: GPUPipelineLayout;
};

interface GPUPresentationContext {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUPresentationContext";
  /**
   * Configures the presentation context for this canvas. Destroys any textures produced with a
   * previous configuration.
   * @param configuration - Desired configuration for the presentation context.
   */
  configure(
    configuration: GPUPresentationConfiguration
  ): undefined;
  /**
   * Removes the presentation context configuration. Destroys any textures produced while configured.
   */
  unconfigure(): undefined;
  /**
   * Returns an optimal {@link GPUTextureFormat} to use with this presentation context and devices
   * created from the given adapter.
   * @param adapter - Adapter the format should be queried for.
   */
  getPreferredFormat(
    adapter: GPUAdapter
  ): GPUTextureFormat;
  /**
   * Get the {@link GPUTexture} that will be composited to the document by the {@link GPUPresentationContext}
   * next.
   * Note: Developers can expect that the same {@link GPUTexture} object will be returned by every
   * call to {@link GPUPresentationContext#getCurrentTexture} made within the same frame (i.e. between
   * invocations of Update the rendering) unless {@link GPUPresentationContext#configure} is called.
   */
  getCurrentTexture(): GPUTexture;
}

declare var GPUPresentationContext: {
  prototype: GPUPresentationContext;
};

interface GPUQuerySet
  extends GPUObjectBase {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUQuerySet";
  /**
   * Destroys the {@link GPUQuerySet}.
   */
  destroy(): undefined;
}

declare var GPUQuerySet: {
  prototype: GPUQuerySet;
};

interface GPUQueue
  extends GPUObjectBase {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUQueue";
  /**
   * Schedules the execution of the command buffers by the GPU on this queue.
   * 	`commandBuffers`:
   */
  submit(
    commandBuffers: Array<GPUCommandBuffer>
  ): undefined;
  /**
   * Returns a {@link Promise} that resolves once this queue finishes processing all the work submitted
   * up to this moment.
   */
  onSubmittedWorkDone(): Promise<undefined>;
  /**
   * Issues a write operation of the provided data into a {@link GPUBuffer}.
   * @param buffer - The buffer to write to.
   * @param bufferOffset - Offset in bytes into `buffer` to begin writing at.
   * @param data - Data to write into `buffer`.
   * @param dataOffset - Offset in into `data` to begin writing from. Given in elements if
   * 	`data` is a `TypedArray` and bytes otherwise.
   * @param size - Size of content to write from `data` to `buffer`. Given in elements if
   * 	`data` is a `TypedArray` and bytes otherwise.
   */
  writeBuffer(
    buffer: GPUBuffer,
    bufferOffset: GPUSize64,
    data: BufferSource,
    dataOffset?: GPUSize64,
    size?: GPUSize64
  ): undefined;
  /**
   * Issues a write operation of the provided data into a {@link GPUTexture}.
   * @param destination - The texture subresource and origin to write to.
   * @param data - Data to write into `destination`.
   * @param dataLayout - Layout of the content in `data`.
   * @param size - Extents of the content to write from `data` to `destination`.
   */
  writeTexture(
    destination: GPUImageCopyTexture,
    data: BufferSource,
    dataLayout: GPUImageDataLayout,
    size: GPUExtent3D
  ): undefined;
  /**
   * Issues a copy operation of the contents of a platform image/canvas
   * into the destination texture.
   * @param source - source image and origin to copy to `destination`.
   * @param destination - The texture subresource and origin to write to, and its encoding metadata.
   * @param copySize - Extents of the content to write from `source` to `destination`.
   */
  copyExternalImageToTexture(
    source: GPUImageCopyExternalImage,
    destination: GPUImageCopyTextureTagged,
    copySize: GPUExtent3D
  ): undefined;
}

declare var GPUQueue: {
  prototype: GPUQueue;
};

interface GPURenderBundle
  extends GPUObjectBase {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPURenderBundle";
}

declare var GPURenderBundle: {
  prototype: GPURenderBundle;
};

interface GPURenderBundleEncoder
  extends GPUObjectBase,
    GPUProgrammablePassEncoder,
    GPURenderEncoderBase {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPURenderBundleEncoder";
  /**
   * Completes recording of the render bundle commands sequence.
   * 	descriptor:
   */
  finish(
    descriptor?: GPURenderBundleDescriptor
  ): GPURenderBundle;
}

declare var GPURenderBundleEncoder: {
  prototype: GPURenderBundleEncoder;
};

interface GPURenderPassEncoder
  extends GPUObjectBase,
    GPUProgrammablePassEncoder,
    GPURenderEncoderBase {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPURenderPassEncoder";
  /**
   * Sets the viewport used during the rasterization stage to linearly map from normalized device
   * coordinates to viewport coordinates.
   * @param x - Minimum X value of the viewport in pixels.
   * @param y - Minimum Y value of the viewport in pixels.
   * @param width - Width of the viewport in pixels.
   * @param height - Height of the viewport in pixels.
   * @param minDepth - Minimum depth value of the viewport.
   * @param maxDepth - Maximum depth value of the viewport.
   */
  setViewport(
    x: number,
    y: number,
    width: number,
    height: number,
    minDepth: number,
    maxDepth: number
  ): undefined;
  /**
   * Sets the scissor rectangle used during the rasterization stage.
   * After transformation into viewport coordinates any fragments which fall outside the scissor
   * rectangle will be discarded.
   * @param x - Minimum X value of the scissor rectangle in pixels.
   * @param y - Minimum Y value of the scissor rectangle in pixels.
   * @param width - Width of the scissor rectangle in pixels.
   * @param height - Height of the scissor rectangle in pixels.
   */
  setScissorRect(
    x: GPUIntegerCoordinate,
    y: GPUIntegerCoordinate,
    width: GPUIntegerCoordinate,
    height: GPUIntegerCoordinate
  ): undefined;
  /**
   * Sets the constant blend color and alpha values used with {@link GPUBlendFactor#"constant"}
   * and {@link GPUBlendFactor#"one-minus-constant"} {@link GPUBlendFactor}s.
   * @param color - The color to use when blending.
   */
  setBlendConstant(
    color: GPUColor
  ): undefined;
  /**
   * Sets the stencil reference value used during stencil tests with the the
   * {@link GPUStencilOperation#"replace"} {@link GPUStencilOperation}.
   * @param reference - The stencil reference value.
   */
  setStencilReference(
    reference: GPUStencilValue
  ): undefined;
  /**
   * @param queryIndex - The index of the query in the query set.
   */
  beginOcclusionQuery(
    queryIndex: GPUSize32
  ): undefined;
  /**
   */
  endOcclusionQuery(): undefined;
  /**
   * 	querySet:
   * 	queryIndex:
   */
  beginPipelineStatisticsQuery(
    querySet: GPUQuerySet,
    queryIndex: GPUSize32
  ): undefined;
  /**
   */
  endPipelineStatisticsQuery(): undefined;
  /**
   * Writes a timestamp value into `querySet` when all previous commands have completed executing.
   * @param querySet - The query set that will store the timestamp values.
   * @param queryIndex - The index of the query in the query set.
   */
  writeTimestamp(
    querySet: GPUQuerySet,
    queryIndex: GPUSize32
  ): undefined;
  /**
   * Executes the commands previously recorded into the given {@link GPURenderBundle}s as part of
   * this render pass.
   * When a {@link GPURenderBundle} is executed, it does not inherit the render pass's pipeline, bind
   * groups, or vertex and index buffers. After a {@link GPURenderBundle} has executed, the render
   * pass's pipeline, bind groups, and vertex and index buffers are cleared.
   * Note: state is cleared even if zero {@link GPURenderBundle|GPURenderBundles} are executed.
   * @param bundles - List of render bundles to execute.
   */
  executeBundles(
    bundles: Array<GPURenderBundle>
  ): undefined;
  /**
   * Completes recording of the render pass commands sequence.
   */
  endPass(): undefined;
}

declare var GPURenderPassEncoder: {
  prototype: GPURenderPassEncoder;
};

interface GPURenderPipeline
  extends GPUObjectBase,
    GPUPipelineBase {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPURenderPipeline";
}

declare var GPURenderPipeline: {
  prototype: GPURenderPipeline;
};

interface GPUSampler
  extends GPUObjectBase {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUSampler";
}

declare var GPUSampler: {
  prototype: GPUSampler;
};

interface GPUShaderModule
  extends GPUObjectBase {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUShaderModule";
  /**
   * Returns any messages generated during the {@link GPUShaderModule}'s compilation.
   */
  compilationInfo(): Promise<GPUCompilationInfo>;
}

declare var GPUShaderModule: {
  prototype: GPUShaderModule;
};

interface GPUShaderStage {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUShaderStage";
  readonly VERTEX: GPUFlagsConstant;
  readonly FRAGMENT: GPUFlagsConstant;
  readonly COMPUTE: GPUFlagsConstant;
}

declare var GPUShaderStage: {
  prototype: GPUShaderStage;
  readonly VERTEX: GPUFlagsConstant;
  readonly FRAGMENT: GPUFlagsConstant;
  readonly COMPUTE: GPUFlagsConstant;
};

type GPUSupportedFeatures = ReadonlySet<string>;

interface GPUSupportedLimits {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUSupportedLimits";
  readonly maxTextureDimension1D: number;
  readonly maxTextureDimension2D: number;
  readonly maxTextureDimension3D: number;
  readonly maxTextureArrayLayers: number;
  readonly maxBindGroups: number;
  readonly maxDynamicUniformBuffersPerPipelineLayout: number;
  readonly maxDynamicStorageBuffersPerPipelineLayout: number;
  readonly maxSampledTexturesPerShaderStage: number;
  readonly maxSamplersPerShaderStage: number;
  readonly maxStorageBuffersPerShaderStage: number;
  readonly maxStorageTexturesPerShaderStage: number;
  readonly maxUniformBuffersPerShaderStage: number;
  readonly maxUniformBufferBindingSize: number;
  readonly maxStorageBufferBindingSize: number;
  readonly maxVertexBuffers: number;
  readonly maxVertexAttributes: number;
  readonly maxVertexBufferArrayStride: number;
}

declare var GPUSupportedLimits: {
  prototype: GPUSupportedLimits;
};

interface GPUTexture
  extends GPUObjectBase {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUTexture";
  /**
   * Creates a {@link GPUTextureView}.
   * @param descriptor - Description of the {@link GPUTextureView} to create.
   */
  createView(
    descriptor?: GPUTextureViewDescriptor
  ): GPUTextureView;
  /**
   * Destroys the {@link GPUTexture}.
   */
  destroy(): undefined;
}

declare var GPUTexture: {
  prototype: GPUTexture;
};

interface GPUTextureUsage {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUTextureUsage";
  readonly COPY_SRC: GPUFlagsConstant;
  readonly COPY_DST: GPUFlagsConstant;
  readonly SAMPLED: GPUFlagsConstant;
  readonly STORAGE: GPUFlagsConstant;
  readonly RENDER_ATTACHMENT: GPUFlagsConstant;
}

declare var GPUTextureUsage: {
  prototype: GPUTextureUsage;
  readonly COPY_SRC: GPUFlagsConstant;
  readonly COPY_DST: GPUFlagsConstant;
  readonly SAMPLED: GPUFlagsConstant;
  readonly STORAGE: GPUFlagsConstant;
  readonly RENDER_ATTACHMENT: GPUFlagsConstant;
};

interface GPUTextureView
  extends GPUObjectBase {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUTextureView";
}

declare var GPUTextureView: {
  prototype: GPUTextureView;
};

interface GPUUncapturedErrorEvent
  extends Event {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUUncapturedErrorEvent";
  readonly error: GPUError;
}

declare var GPUUncapturedErrorEvent: {
  prototype: GPUUncapturedErrorEvent;
  new (
    type: string,
    gpuUncapturedErrorEventInitDict: GPUUncapturedErrorEventInit
  );
};

interface GPUValidationError {
  /**
   * Nominal type branding.
   * https://github.com/microsoft/TypeScript/pull/33038
   * @internal
   */
  readonly __brand: "GPUValidationError";
  readonly message: string;
}

declare var GPUValidationError: {
  prototype: GPUValidationError;
  new (
    message: string
  );
};

interface Navigator
  extends NavigatorGPU {}

interface WorkerNavigator
  extends NavigatorGPU {}
