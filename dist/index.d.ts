// ****************************************************************
// NOTE:
// Every change to this file should be tracked here so that we know
// the exact status relative to the upstream spec (except bugfixes
// that bring the file in-line with this tracking).
// ****************************************************************
//
// This revision of the types is based on:
// https://github.com/gpuweb/gpuweb/blob/38236513beaf98e1579b212c0df6f33bd19691ab/spec/index.bs
// - except #494: reverted the addition of GPUAdapter.limits
// - except #591: removed Uint32Array from GPUShaderModuleDescriptor
// - except removal of old setIndexBuffer signature in #943
// - plus #873: added aspect back to GPUTextureCopyView
// - plus #971: added stencil8 to GPUTextureFormat
// - plus #1168: renamed OUTPUT_ATTACHMENT to RENDER_ATTACHMENT
// - plus #1367: renamed defaultQueue to queue
// - plus #1014: made bytesPerRow optional
// - plus #1375: renamed to GPUImageCopyX (but without removing old names)
// - plus #1390: renamed depth to depthOrArrayLayers
// - plus #1152+#1441: made height/depthOrArrayLayers optional
// - plus #1328: add texture dimension limits
// - plus #1322+#1469: rename vertex formats

export {};

declare global {
  // Appends members to the `Navigator` interface defined globally.
  export interface Navigator {
    readonly gpu: GPU | undefined;
  }

  export interface HTMLCanvasElement {
    getContext(contextId: "gpupresent"): GPUCanvasContext | null;
  }

  export interface GPUColorDict {
    a: number;
    b: number;
    g: number;
    r: number;
  }
  export type GPUColor = [number, number, number, number] | GPUColorDict;

  export interface GPUOrigin2DDict {
    x?: number;
    y?: number;
  }
  export type GPUOrigin2D = [number, number] | GPUOrigin2DDict;

  export interface GPUOrigin3DDict {
    x?: number;
    y?: number;
    z?: number;
  }
  export type GPUOrigin3D = number[] | GPUOrigin3DDict;

  export interface GPUExtent3DDict {
    width: number;
    height?: number;
    depthOrArrayLayers?: number;
  }
  export type GPUExtent3D = number[] | GPUExtent3DDict;

  interface GPUExtent3DDictStrict extends GPUExtent3DDict {
    depth?: undefined;
  }
  type GPUExtent3DStrict = number[] | GPUExtent3DDictStrict;

  export type GPUBindingResource =
    | GPUSampler
    | GPUTextureView
    | GPUBufferBinding;

  export type GPUExtensionName =
    | "texture-compression-bc"
    | "timestamp-query"
    | "pipeline-statistics-query"
    | "depth-clamping"
    | "depth24unorm-stencil8"
    | "depth32float-stencil8";
  export type GPUAddressMode = "clamp-to-edge" | "repeat" | "mirror-repeat";
  /** @deprecated */
  export type GPUBindingType =
    | "uniform-buffer"
    | "storage-buffer"
    | "readonly-storage-buffer"
    | "sampler"
    | "comparison-sampler"
    | "sampled-texture"
    | "multisampled-texture"
    | "readonly-storage-texture"
    | "writeonly-storage-texture";
  export type GPUBlendFactor =
    | "zero"
    | "one"
    | "src-color"
    | "one-minus-src-color"
    | "src-alpha"
    | "one-minus-src-alpha"
    | "dst-color"
    | "one-minus-dst-color"
    | "dst-alpha"
    | "one-minus-dst-alpha"
    | "src-alpha-saturated"
    | "blend-color"
    | "one-minus-blend-color";
  export type GPUBlendOperation =
    | "add"
    | "subtract"
    | "reverse-subtract"
    | "min"
    | "max";
  export type GPUBufferBindingType =
    | "uniform"
    | "storage"
    | "read-only-storage";
  export type GPUCompareFunction =
    | "never"
    | "less"
    | "equal"
    | "less-equal"
    | "greater"
    | "not-equal"
    | "greater-equal"
    | "always";
  export type GPUCullMode = "none" | "front" | "back";
  export type GPUFilterMode = "nearest" | "linear";
  export type GPUFrontFace = "ccw" | "cw";
  export type GPUIndexFormat = "uint16" | "uint32";
  export type GPUInputStepMode = "vertex" | "instance";
  export type GPULoadOp = "load";
  export type GPUPrimitiveTopology =
    | "point-list"
    | "line-list"
    | "line-strip"
    | "triangle-list"
    | "triangle-strip";
  export type GPUSamplerBindingType =
    | "filtering"
    | "non-filtering"
    | "comparison";
  export type GPUStencilOperation =
    | "keep"
    | "zero"
    | "replace"
    | "invert"
    | "increment-clamp"
    | "decrement-clamp"
    | "increment-wrap"
    | "decrement-wrap";
  export type GPUStorageTextureAccess = "read-only" | "write-only";
  export type GPUStoreOp = "store" | "clear";
  export type GPUTextureDimension = "1d" | "2d" | "3d";
  export type GPUTextureFormat =
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
    | "rgb10a2unorm"
    | "rg11b10ufloat"
    | "rgb9e5ufloat"
    | "rg32uint"
    | "rg32sint"
    | "rg32float"
    | "rgba16uint"
    | "rgba16sint"
    | "rgba16float"
    | "rgba32uint"
    | "rgba32sint"
    | "rgba32float"
    | "depth16unorm"
    | "depth32float"
    | "depth24plus"
    | "depth24plus-stencil8"
    | "stencil8"
    | "depth24unorm-stencil8"
    | "depth32float-stencil8"
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
    | "bc7-rgba-unorm-srgb";
  export type GPUTextureComponentType =
    | "float"
    | "sint"
    | "uint"
    | "depth-comparison";
  export type GPUTextureSampleType =
    | "float"
    | "unfilterable-float"
    | "depth"
    | "sint"
    | "uint";
  export type GPUTextureViewDimension =
    | "1d"
    | "2d"
    | "2d-array"
    | "cube"
    | "cube-array"
    | "3d";
  export type GPUVertexFormat =
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

  export type GPUTextureAspect = "all" | "stencil-only" | "depth-only";

  export type GPUBufferUsageFlags = number;
  export const GPUBufferUsage: {
    MAP_READ:      0x0001;
    MAP_WRITE:     0x0002;
    COPY_SRC:      0x0004;
    COPY_DST:      0x0008;
    INDEX:         0x0010;
    VERTEX:        0x0020;
    UNIFORM:       0x0040;
    STORAGE:       0x0080;
    INDIRECT:      0x0100;
    QUERY_RESOLVE: 0x0200;
  };

  export type GPUColorWriteFlags = number;
  export const GPUColorWrite: {
    RED:   0x1;
    GREEN: 0x2;
    BLUE:  0x4;
    ALPHA: 0x8;
    ALL:   0xf;
  };

  export type GPUShaderStageFlags = number;
  export const GPUShaderStage: {
    VERTEX:   0x1;
    FRAGMENT: 0x2;
    COMPUTE:  0x4;
  };

  export type GPUTextureUsageFlags = number;
  export const GPUTextureUsage: {
    COPY_SRC:          0x01;
    COPY_DST:          0x02;
    SAMPLED:           0x04;
    STORAGE:           0x08;
    RENDER_ATTACHMENT: 0x10;
  };

  export type GPUMapModeFlags = number;
  export const GPUMapMode: {
    READ:  0x1;
    WRITE: 0x2;
  };

  export interface GPUBindGroupEntry {
    binding: number;
    resource: GPUBindingResource;
  }

  export interface GPUBindGroupDescriptor extends GPUObjectDescriptorBase {
    layout: GPUBindGroupLayout;
    entries: Iterable<GPUBindGroupEntry>;
  }

  export interface GPUBindGroupLayoutEntry {
    binding: number;
    visibility: GPUShaderStageFlags;

    buffer?: GPUBufferBindingLayout;
    sampler?: GPUSamplerBindingLayout;
    texture?: GPUTextureBindingLayout;
    storageTexture?: GPUStorageTextureBindingLayout;

    /** @deprecated */
    type?: GPUBindingType;
    /** @deprecated */
    hasDynamicOffset?: boolean;
    /** @deprecated */
    minBufferBindingSize?: number;
    /** @deprecated */
    viewDimension?: GPUTextureViewDimension;
    /** @deprecated */
    textureComponentType?: GPUTextureComponentType;
    /** @deprecated */
    storageTextureFormat?: GPUTextureFormat;
  }

  export interface GPUBindGroupLayoutDescriptor
    extends GPUObjectDescriptorBase {
    entries: Iterable<GPUBindGroupLayoutEntry>;
  }

  export interface GPUBlendDescriptor {
    dstFactor?: GPUBlendFactor;
    operation?: GPUBlendOperation;
    srcFactor?: GPUBlendFactor;
  }

  export interface GPUBufferBindingLayout {
    type?: GPUBufferBindingType;
    hasDynamicOffset?: boolean;
    minBindingSize?: number;
  }

  export interface GPUColorStateDescriptor {
    format: GPUTextureFormat;

    alphaBlend?: GPUBlendDescriptor;
    colorBlend?: GPUBlendDescriptor;
    writeMask?: GPUColorWriteFlags;
  }

  export interface GPUBufferBinding {
    buffer: GPUBuffer;
    offset?: number;
    size?: number;
  }

  /** @deprecated */
  export type GPUTextureDataLayout = GPUImageDataLayout;
  export interface GPUImageDataLayout {
    offset?: number;
    bytesPerRow?: number;
    rowsPerImage?: number;
  }

  /** @deprecated */
  export type GPUBufferCopyView = GPUImageCopyBuffer;
  export interface GPUImageCopyBuffer extends GPUImageDataLayout {
    buffer: GPUBuffer;
  }

  /** @deprecated */
  export type GPUTextureCopyView = GPUImageCopyTexture;
  export interface GPUImageCopyTexture {
    texture: GPUTexture;
    mipLevel?: number;
    origin?: GPUOrigin3D;
    aspect?: GPUTextureAspect;
  }

  export interface GPUImageBitmapCopyView {
    imageBitmap: ImageBitmap;
    origin?: GPUOrigin2D;
  }

  export interface GPUBufferDescriptor extends GPUObjectDescriptorBase {
    size: number;
    usage: GPUBufferUsageFlags;
    mappedAtCreation?: boolean;
  }

  export interface GPUCommandEncoderDescriptor extends GPUObjectDescriptorBase {
    label?: string;

    measureExecutionTime?: boolean;
  }

  export interface GPUComputePipelineDescriptor
    extends GPUPipelineDescriptorBase {
    computeStage: GPUProgrammableStageDescriptor;
  }

  export interface GPUDepthStencilStateDescriptor {
    format: GPUTextureFormat;

    depthWriteEnabled?: boolean;
    depthCompare?: GPUCompareFunction;

    stencilFront?: GPUStencilStateFaceDescriptor;
    stencilBack?: GPUStencilStateFaceDescriptor;

    stencilReadMask?: number;
    stencilWriteMask?: number;
  }

  export interface GPUDeviceDescriptor extends GPUObjectDescriptorBase {
    extensions?: Iterable<GPUExtensionName>;
    limits?: GPULimits;
  }

  export interface GPUFenceDescriptor extends GPUObjectDescriptorBase {
    initialValue?: number;
    label?: string;
    signalQueue?: GPUQueue;
  }

  export interface GPUVertexAttributeDescriptor {
    format: GPUVertexFormat;
    offset: number;
    shaderLocation: number;
  }

  export interface GPUVertexBufferLayoutDescriptor {
    arrayStride: number;
    stepMode?: GPUInputStepMode;
    attributes: Iterable<GPUVertexAttributeDescriptor>;
  }

  export interface GPUVertexStateDescriptor {
    indexFormat?: GPUIndexFormat;
    vertexBuffers?: Iterable<GPUVertexBufferLayoutDescriptor>;
  }

  export interface GPULimits {
    maxTextureDimension1D?: number;
    maxTextureDimension2D?: number;
    maxTextureDimension3D?: number;
    maxTextureArrayLayers?: number;
    maxBindGroups?: number;
    maxDynamicUniformBuffersPerPipelineLayout?: number;
    maxDynamicStorageBuffersPerPipelineLayout?: number;
    maxSampledTexturesPerShaderStage?: number;
    maxSamplersPerShaderStage?: number;
    maxStorageBuffersPerShaderStage?: number;
    maxStorageTexturesPerShaderStage?: number;
    maxUniformBuffersPerShaderStage?: number;
    maxUniformBufferBindingSize?: number;
  }

  export interface GPUPipelineDescriptorBase {
    label?: string;
    layout?: GPUPipelineLayout;
  }

  export interface GPUPipelineLayoutDescriptor extends GPUObjectDescriptorBase {
    bindGroupLayouts: Iterable<GPUBindGroupLayout>;
  }

  export interface GPUProgrammableStageDescriptor {
    module: GPUShaderModule;
    entryPoint: string;
  }

  export interface GPURasterizationStateDescriptor {
    frontFace?: GPUFrontFace;
    cullMode?: GPUCullMode;
    clampDepth?: boolean;
    depthBias?: number;
    depthBiasSlopeScale?: number;
    depthBiasClamp?: number;
  }

  export interface GPURenderPassColorAttachmentDescriptor {
    attachment: GPUTextureView;
    resolveTarget?: GPUTextureView;

    loadValue: GPULoadOp | GPUColor;
    storeOp?: GPUStoreOp;
  }

  export interface GPURenderPassDepthStencilAttachmentDescriptor {
    attachment: GPUTextureView;

    depthLoadValue: GPULoadOp | number;
    depthStoreOp: GPUStoreOp;
    depthReadOnly?: boolean;

    stencilLoadValue: GPULoadOp | number;
    stencilStoreOp: GPUStoreOp;
    stencilReadOnly?: boolean;
  }

  export interface GPURenderPassDescriptor extends GPUObjectDescriptorBase {
    colorAttachments: Iterable<GPURenderPassColorAttachmentDescriptor>;
    depthStencilAttachment?: GPURenderPassDepthStencilAttachmentDescriptor;
    occlusionQuerySet?: GPUQuerySet;
  }

  export interface GPURenderPipelineDescriptor
    extends GPUPipelineDescriptorBase {
    vertexStage: GPUProgrammableStageDescriptor;
    fragmentStage?: GPUProgrammableStageDescriptor;

    primitiveTopology: GPUPrimitiveTopology;
    rasterizationState?: GPURasterizationStateDescriptor;
    colorStates: Iterable<GPUColorStateDescriptor>;
    depthStencilState?: GPUDepthStencilStateDescriptor;
    vertexState?: GPUVertexStateDescriptor;

    sampleCount?: number;
    sampleMask?: number;
    alphaToCoverageEnabled?: boolean;
  }

  export interface GPUSamplerDescriptor extends GPUObjectDescriptorBase {
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

  export interface GPUSamplerBindingLayout {
    type?: GPUSamplerBindingType;
  }

  export interface GPUShaderModuleDescriptor extends GPUObjectDescriptorBase {
    code: Uint32Array | string;
    label?: string;

    sourceMap?: object;
  }

  export interface GPUStencilStateFaceDescriptor {
    compare?: GPUCompareFunction;
    depthFailOp?: GPUStencilOperation;
    passOp?: GPUStencilOperation;
    failOp?: GPUStencilOperation;
  }

  export interface GPUStorageTextureBindingLayout {
    access: GPUStorageTextureAccess;
    format: GPUTextureFormat;
    viewDimension?: GPUTextureViewDimension;
  }

  export interface GPUSwapChainDescriptor extends GPUObjectDescriptorBase {
    device: GPUDevice;
    format: GPUTextureFormat;
    usage?: GPUTextureUsageFlags;
  }

  export interface GPUTextureBindingLayout {
    sampleType?: GPUTextureSampleType;
    viewDimension?: GPUTextureViewDimension;
    multisampled?: boolean;
  }

  export interface GPUTextureDescriptor extends GPUObjectDescriptorBase {
    size: GPUExtent3DStrict;
    mipLevelCount?: number;
    sampleCount?: number;
    dimension?: GPUTextureDimension;
    format: GPUTextureFormat;
    usage: GPUTextureUsageFlags;
  }

  export interface GPUTextureViewDescriptor extends GPUObjectDescriptorBase {
    format?: GPUTextureFormat;
    dimension?: GPUTextureViewDimension;
    aspect?: GPUTextureAspect;
    baseArrayLayer?: number;
    baseMipLevel?: number;
    arrayLayerCount?: number;
    mipLevelCount?: number;
  }

  export class GPUAdapter {
    // https://michalzalecki.com/nominal-typing-in-typescript/#approach-1-class-with-a-private-property
    private __brand: void;
    readonly name: string;
    readonly extensions: GPUExtensionName[];
    readonly limits: Required<GPULimits>;

    requestDevice(descriptor?: GPUDeviceDescriptor): Promise<GPUDevice | null>;
  }

  export class GPUBindGroup implements GPUObjectBase {
    private __brand: void;
    label: string | undefined;
  }

  export class GPUBindGroupLayout implements GPUObjectBase {
    private __brand: void;
    label: string | undefined;
  }

  export class GPUBuffer implements GPUObjectBase {
    private __brand: void;
    label: string | undefined;

    destroy(): void;
    unmap(): void;

    mapAsync(mode: GPUMapModeFlags, offset?: number, size?: number): Promise<void>;
    getMappedRange(offset?: number, size?: number): ArrayBuffer;
  }

  export class GPUCommandBuffer implements GPUObjectBase {
    private __brand: void;
    label: string | undefined;

    readonly executionTime: Promise<number>;
  }

  export interface GPUCommandBufferDescriptor extends GPUObjectDescriptorBase {}

  export class GPUCommandEncoder implements GPUObjectBase {
    private __brand: void;
    label: string | undefined;

    beginComputePass(
      descriptor?: GPUComputePassDescriptor
    ): GPUComputePassEncoder;
    beginRenderPass(descriptor: GPURenderPassDescriptor): GPURenderPassEncoder;
    copyBufferToBuffer(
      source: GPUBuffer,
      sourceOffset: number,
      destination: GPUBuffer,
      destinationOffset: number,
      size: number
    ): void;
    copyBufferToTexture(
      source: GPUBufferCopyView,
      destination: GPUTextureCopyView,
      copySize: GPUExtent3DStrict
    ): void;
    copyTextureToBuffer(
      source: GPUTextureCopyView,
      destination: GPUBufferCopyView,
      copySize: GPUExtent3DStrict
    ): void;
    copyTextureToTexture(
      source: GPUTextureCopyView,
      destination: GPUTextureCopyView,
      copySize: GPUExtent3DStrict
    ): void;
    finish(descriptor?: GPUCommandBufferDescriptor): GPUCommandBuffer;

    resolveQuerySet(querySet: GPUQuerySet, firstQuery: number, queryCount: number, destination: GPUBuffer, destinationOffset: number): void;
    writeTimestamp(querySet: GPUQuerySet, queryIndex: number): void;

    popDebugGroup(): void;
    pushDebugGroup(groupLabel: string): void;
    insertDebugMarker(markerLabel: string): void;
  }

  export interface GPUComputePassDescriptor extends GPUObjectDescriptorBase {}

  export class GPUComputePassEncoder implements GPUObjectBase, GPUProgrammablePassEncoder {
    private __brand: void;
    label: string | undefined;

    setBindGroup(
      index: number,
      bindGroup: GPUBindGroup,
      dynamicOffsets?: Iterable<number>
    ): void;

    setBindGroup(
      index: number,
      bindGroup: GPUBindGroup,
      dynamicOffsetsData: Uint32Array,
      dynamicOffsetsDataStart: number,
      dynamicOffsetsDataLength: number
    ): void;

    popDebugGroup(): void;
    pushDebugGroup(groupLabel: string): void;
    insertDebugMarker(markerLabel: string): void;

    setPipeline(pipeline: GPUComputePipeline): void;
    dispatch(x: number, y?: number, z?: number): void;
    dispatchIndirect(indirectBuffer: GPUBuffer, indirectOffset: number): void;

    writeTimestamp(querySet: GPUQuerySet, queryIndex: number): void;
    beginPipelineStatisticsQuery(querySet: GPUQuerySet, queryIndex: number): void;
    endPipelineStatisticsQuery(querySet: GPUQuerySet, queryIndex: number): void;

    endPass(): void;
  }

  export class GPUComputePipeline implements GPUPipelineBase {
    private __brand: void;
    label: string | undefined;

    getBindGroupLayout(index: number): GPUBindGroupLayout;
  }

  export interface GPUObjectBase {
    label: string | undefined;
  }

  export interface GPUObjectDescriptorBase {
    label?: string;
  }

  // SwapChain / CanvasContext
  export class GPUCanvasContext {
    private __brand: void;
    configureSwapChain(descriptor: GPUSwapChainDescriptor): GPUSwapChain;

    getSwapChainPreferredFormat(device: GPUDevice): Promise<GPUTextureFormat>;
  }

  export class GPUDevice extends EventTarget implements GPUObjectBase {
    private __brand: void;
    label: string | undefined;

    readonly adapter: GPUAdapter;
    readonly extensions: GPUExtensionName[];
    readonly limits: Required<GPULimits>;

    createBindGroup(descriptor: GPUBindGroupDescriptor): GPUBindGroup;
    createBindGroupLayout(
      descriptor: GPUBindGroupLayoutDescriptor
    ): GPUBindGroupLayout;
    createBuffer(descriptor: GPUBufferDescriptor): GPUBuffer;
    createPipelineLayout(
      descriptor: GPUPipelineLayoutDescriptor
    ): GPUPipelineLayout;
    createSampler(descriptor?: GPUSamplerDescriptor): GPUSampler;
    createShaderModule(descriptor: GPUShaderModuleDescriptor): GPUShaderModule;
    createTexture(descriptor: GPUTextureDescriptor): GPUTexture;

    createComputePipeline(
      descriptor: GPUComputePipelineDescriptor
    ): GPUComputePipeline;
    createRenderPipeline(
      descriptor: GPURenderPipelineDescriptor
    ): GPURenderPipeline;
    createReadyComputePipeline(
      descriptor: GPUComputePipelineDescriptor
    ): Promise<GPUComputePipeline>;
    createReadyRenderPipeline(
      descriptor: GPURenderPipelineDescriptor
    ): Promise<GPURenderPipeline>;

    createCommandEncoder(
      descriptor?: GPUCommandEncoderDescriptor
    ): GPUCommandEncoder;
    createRenderBundleEncoder(
      descriptor: GPURenderBundleEncoderDescriptor
    ): GPURenderBundleEncoder;

    createQuerySet(descriptor: GPUQuerySetDescriptor): GPUQuerySet;

    queue: GPUQueue;

    pushErrorScope(filter: GPUErrorFilter): void;
    popErrorScope(): Promise<GPUError | null>;
    onuncapturederror: Event | undefined;
    readonly lost: Promise<GPUDeviceLostInfo>;
  }

  export class GPUFence implements GPUObjectBase {
    private __brand: void;
    label: string | undefined;

    getCompletedValue(): number;
    onCompletion(completionValue: number): Promise<void>;
  }

  export interface GPUPipelineBase extends GPUObjectBase {
    getBindGroupLayout(index: number): GPUBindGroupLayout;
  }

  export class GPUPipelineLayout implements GPUObjectBase {
    private __brand: void;
    label: string | undefined;
  }

  export interface GPUProgrammablePassEncoder {
    setBindGroup(
      index: number,
      bindGroup: GPUBindGroup,
      dynamicOffsets?: Iterable<number>
    ): void;

    setBindGroup(
      index: number,
      bindGroup: GPUBindGroup,
      dynamicOffsetsData: Uint32Array,
      dynamicOffsetsDataStart: number,
      dynamicOffsetsDataLength: number
    ): void;

    popDebugGroup(): void;
    pushDebugGroup(groupLabel: string): void;
    insertDebugMarker(markerLabel: string): void;
  }

  export class GPUQueue implements GPUObjectBase {
    private __brand: void;
    label: string | undefined;

    signal(fence: GPUFence, signalValue: number): void;
    submit(commandBuffers: Iterable<GPUCommandBuffer>): void;
    createFence(descriptor?: GPUFenceDescriptor): GPUFence;

    writeBuffer(buffer: GPUBuffer,
                bufferOffset: number,
                data: BufferSource | SharedArrayBuffer,
                dataOffset?: number,
                size?: number): void;
    writeTexture(destination: GPUTextureCopyView,
                 data: BufferSource | SharedArrayBuffer,
                 dataLayout: GPUTextureDataLayout,
                 size: GPUExtent3DStrict): void;

    copyImageBitmapToTexture(
      source: GPUImageBitmapCopyView,
      destination: GPUTextureCopyView,
      copySize: GPUExtent3DStrict
    ): void;
  }

  type GPUQueryType =
    | "occlusion"
    | "timestamp"
    | "pipeline-statistics";
  type GPUPipelineStatisticName =
    | "vertex-shader-invocations"
    | "clipper-invocations"
    | "clipper-primitives-out"
    | "fragment-shader-invocations"
    | "compute-shader-invocations";

  export interface GPUQuerySetDescriptor extends GPUObjectDescriptorBase {
    type: GPUQueryType;
    count: number;
    pipelineStatistics?: Iterable<GPUPipelineStatisticName>;
  }

  export class GPUQuerySet implements GPUObjectBase {
    private __brand: void;
    label: string | undefined;

    destroy(): void;
  }

  export interface GPURenderEncoderBase {
    setPipeline(pipeline: GPURenderPipeline): void;

    setIndexBuffer(buffer: GPUBuffer, indexFormat: GPUIndexFormat, offset?: number, size?: number): void;
    setVertexBuffer(slot: number, buffer: GPUBuffer, offset?: number, size?: number): void;

    draw(
      vertexCount: number,
      instanceCount?: number,
      firstVertex?: number,
      firstInstance?: number
    ): void;
    drawIndexed(
      indexCount: number,
      instanceCount?: number,
      firstIndex?: number,
      baseVertex?: number,
      firstInstance?: number
    ): void;

    drawIndirect(indirectBuffer: GPUBuffer, indirectOffset: number): void;
    drawIndexedIndirect(
      indirectBuffer: GPUBuffer,
      indirectOffset: number
    ): void;
  }

  export class GPURenderPassEncoder implements GPUObjectBase, GPUProgrammablePassEncoder, GPURenderEncoderBase {
    private __brand: void;
    label: string | undefined;

    setBindGroup(
      index: number,
      bindGroup: GPUBindGroup,
      dynamicOffsets?: Iterable<number>
    ): void;

    setBindGroup(
      index: number,
      bindGroup: GPUBindGroup,
      dynamicOffsetsData: Uint32Array,
      dynamicOffsetsDataStart: number,
      dynamicOffsetsDataLength: number
    ): void;

    popDebugGroup(): void;
    pushDebugGroup(groupLabel: string): void;
    insertDebugMarker(markerLabel: string): void;

    setPipeline(pipeline: GPURenderPipeline): void;

    setIndexBuffer(buffer: GPUBuffer, indexFormat: GPUIndexFormat, offset?: number, size?: number): void;
    setVertexBuffer(slot: number, buffer: GPUBuffer, offset?: number): void;

    draw(
      vertexCount: number,
      instanceCount?: number,
      firstVertex?: number,
      firstInstance?: number
    ): void;
    drawIndexed(
      indexCount: number,
      instanceCount?: number,
      firstIndex?: number,
      baseVertex?: number,
      firstInstance?: number
    ): void;

    drawIndirect(indirectBuffer: GPUBuffer, indirectOffset: number): void;
    drawIndexedIndirect(
      indirectBuffer: GPUBuffer,
      indirectOffset: number
    ): void;

    setViewport(
      x: number,
      y: number,
      width: number,
      height: number,
      minDepth: number,
      maxDepth: number
    ): void;
    setScissorRect(x: number, y: number, width: number, height: number): void;

    setBlendColor(color: GPUColor): void;
    setStencilReference(reference: number): void;

    writeTimestamp(querySet: GPUQuerySet, queryIndex: number): void;
    beginOcclusionQuery(queryIndex: number): void;
    endOcclusionQuery(): void;
    beginPipelineStatisticsQuery(querySet: GPUQuerySet, queryIndex: number): void;
    endPipelineStatisticsQuery(querySet: GPUQuerySet, queryIndex: number): void;

    executeBundles(bundles: Iterable<GPURenderBundle>): void;
    endPass(): void;
  }

  export interface GPURenderBundleDescriptor extends GPUObjectDescriptorBase {}

  export class GPURenderBundle implements GPUObjectBase {
    private __brand: void;
    label: string | undefined;
  }

  export class GPURenderBundleEncoder implements GPURenderEncoderBase {
    private __brand: void;
    label: string | undefined;

    setBindGroup(
      index: number,
      bindGroup: GPUBindGroup,
      dynamicOffsets?: Iterable<number>
    ): void;

    setBindGroup(
      index: number,
      bindGroup: GPUBindGroup,
      dynamicOffsetsData: Uint32Array,
      dynamicOffsetsDataStart: number,
      dynamicOffsetsDataLength: number
    ): void;

    popDebugGroup(): void;
    pushDebugGroup(groupLabel: string): void;
    insertDebugMarker(markerLabel: string): void;

    setPipeline(pipeline: GPURenderPipeline): void;

    setIndexBuffer(buffer: GPUBuffer, indexFormat: GPUIndexFormat, offset?: number, size?: number): void;
    setVertexBuffer(slot: number, buffer: GPUBuffer, offset?: number, size?: number): void;

    draw(
      vertexCount: number,
      instanceCount?: number,
      firstVertex?: number,
      firstInstance?: number
    ): void;
    drawIndexed(
      indexCount: number,
      instanceCount?: number,
      firstIndex?: number,
      baseVertex?: number,
      firstInstance?: number
    ): void;

    drawIndirect(indirectBuffer: GPUBuffer, indirectOffset: number): void;
    drawIndexedIndirect(
      indirectBuffer: GPUBuffer,
      indirectOffset: number
    ): void;

    finish(descriptor?: GPURenderBundleDescriptor): GPURenderBundle;
  }

  export interface GPURenderBundleEncoderDescriptor extends GPUObjectDescriptorBase {
    colorFormats: Iterable<GPUTextureFormat>;
    depthStencilFormat?: GPUTextureFormat;
    sampleCount?: number;
  }

  export class GPURenderPipeline implements GPUPipelineBase {
    private __brand: void;
    label: string | undefined;

    getBindGroupLayout(index: number): GPUBindGroupLayout;
  }

  export class GPUSampler implements GPUObjectBase {
    private __brand: void;
    label: string | undefined;
  }

  export type GPUCompilationMessageType =
    | "error"
    | "warning"
    | "info";

  export class GPUCompilationMessage {
    private __brand: void;

    readonly message: string;
    readonly type: GPUCompilationMessageType;
    readonly lineNum: number;
    readonly linePos: number;
  }

  export class GPUCompilationInfo {
    private __brand: void;

    readonly messages: readonly GPUCompilationMessage[];
  }

  export class GPUShaderModule implements GPUObjectBase {
    private __brand: void;
    label: string | undefined;

    compilationInfo(): Promise<GPUCompilationInfo>;
  }

  export class GPUSwapChain implements GPUObjectBase {
    private __brand: void;
    label: string | undefined;

    getCurrentTexture(): GPUTexture;
  }

  export class GPUTexture implements GPUObjectBase {
    private __brand: void;
    label: string | undefined;

    createView(descriptor?: GPUTextureViewDescriptor): GPUTextureView;
    destroy(): void;
  }

  export class GPUTextureView implements GPUObjectBase {
    private __brand: void;
    label: string | undefined;
  }

  export type GPUPowerPreference = "low-power" | "high-performance";
  export interface GPURequestAdapterOptions {
    powerPreference?: GPUPowerPreference;
  }

  export class GPU {
    private __brand: void;
    requestAdapter(options?: GPURequestAdapterOptions): Promise<GPUAdapter | null>;
  }

  // ****************************************************************************
  // ERROR SCOPES
  // ****************************************************************************

  export type GPUErrorFilter = "out-of-memory" | "validation";

  export class GPUOutOfMemoryError {
    private __brand: void;
    constructor();
  }

  export class GPUValidationError {
    private __brand: void;
    constructor(message: string);
    readonly message: string;
  }

  export type GPUError = GPUOutOfMemoryError | GPUValidationError;

  // ****************************************************************************
  // TELEMETRY
  // ****************************************************************************

  export class GPUUncapturedErrorEvent extends Event {
    private __brand: void;
    constructor(
      type: string,
      gpuUncapturedErrorEventInitDict: GPUUncapturedErrorEventInit
    );
    readonly error: GPUError;
  }

  export interface GPUUncapturedErrorEventInit extends EventInit {
    error: GPUError;
  }

  export class GPUDeviceLostInfo {
    private __brand: void;
    readonly message: string;
  }
}
export {};