// https://github.com/gpuweb/gpuweb/blob/15dadf3f218f1c51ff31ce1976653a99189b41d1/design/sketch.webidl
// plus #249 (pre-land)
// plus #261 (pre-land)

export {};

declare global {

export type GPUBindingResource = GPUSampler | GPUTextureView | GPUBufferBinding;

export type GPUAddressMode =
  | "clamp-to-edge"
  | "repeat"
  | "mirror-repeat";
export type GPUBindingType =
  | "uniform-buffer"
  | "dynamic-uniform-buffer"
  | "sampler"
  | "sampled-texture"
  | "storage-buffer"
  | "dynamic-storage-buffer";
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
export type GPUCompareFunction =
  | "never"
  | "less"
  | "equal"
  | "lessEqual"
  | "greater"
  | "notEqual"
  | "greaterEqual"
  | "always";
export type GPUCullMode =
  | "none"
  | "front"
  | "back";
export type GPUFilterMode =
  | "nearest"
  | "linear";
export type GPUFrontFace =
  | "ccw"
  | "cw";
export type GPUIndexFormat =
  | "uint16"
  | "uint32";
export type GPUInputStepMode =
  | "vertex"
  | "instance";
export type GPULoadOp =
  | "clear"
  | "load";
export type GPUPrimitiveTopology =
  | "point-list"
  | "line-list"
  | "line-strip"
  | "triangle-list"
  | "triangle-strip";
export type GPUStencilOperation =
  | "keep"
  | "zero"
  | "replace"
  | "invert"
  | "increment-clamp"
  | "decrement-clamp"
  | "increment-wrap"
  | "decrement-wrap";
export type GPUStoreOp =
  | "store";
export type GPUTextureDimension =
  | "1d"
  | "2d"
  | "3d";
export type GPUTextureFormat =
  | "r8unorm"
  | "r8unorm-srgb"
  | "r8snorm"
  | "r8uint"
  | "r8sint"
  | "r16unorm"
  | "r16snorm"
  | "r16uint"
  | "r16sint"
  | "r16float"
  | "rg8unorm"
  | "rg8unorm-srgb"
  | "rg8snorm"
  | "rg8uint"
  | "rg8sint"
  | "b5g6r5unorm"
  | "r32uint"
  | "r32sint"
  | "r32float"
  | "rg16unorm"
  | "rg16snorm"
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
  | "rg11b10float"
  | "rg32uint"
  | "rg32sint"
  | "rg32float"
  | "rgba16unorm"
  | "rgba16snorm"
  | "rgba16uint"
  | "rgba16sint"
  | "rgba16float"
  | "rgba32uint"
  | "rgba32sint"
  | "rgba32float"
  | "depth32float"
  | "depth32float-stencil8";
export type GPUTextureViewDimension =
  | "1d"
  | "2d"
  | "2d-array"
  | "cube"
  | "cube-array"
  | "3d";
export type GPUVertexFormat =
  | "uchar2"
  | "uchar4"
  | "char2"
  | "char4"
  | "uchar2norm"
  | "uchar4norm"
  | "char2norm"
  | "char4norm"
  | "ushort2"
  | "ushort4"
  | "short2"
  | "short4"
  | "ushort2norm"
  | "ushort4norm"
  | "short2norm"
  | "short4norm"
  | "half2"
  | "half4"
  | "float"
  | "float2"
  | "float3"
  | "float4"
  | "uint"
  | "uint2"
  | "uint3"
  | "uint4"
  | "int"
  | "int2"
  | "int3"
  | "int4";

export type GPUBufferUsageFlags = number;
export enum GPUBufferUsage {
  NONE = 0,
  MAP_READ = 1,
  MAP_WRITE = 2,
  TRANSFER_SRC = 4,
  TRANSFER_DST = 8,
  INDEX = 16,
  VERTEX = 32,
  UNIFORM = 64,
  STORAGE = 128,
}

export type GPUColorWriteFlags = number;
export enum GPUColorWriteBits {
  NONE = 0,
  RED = 1,
  GREEN = 2,
  BLUE = 4,
  ALPHA = 8,
  ALL = 15,
}

export type GPUShaderStageFlags = number;
export enum GPUShaderStageBit {
  NONE = 0,
  VERTEX = 1,
  FRAGMENT = 2,
  COMPUTE = 4,
}

export type GPUTextureAspectFlags = number;
export enum GPUTextureAspect {
  COLOR = 1,
  DEPTH = 2,
  STENCIL = 4,
}

export type GPUTextureUsageFlags = number;
export enum GPUTextureUsage {
  NONE = 0,
  TRANSFER_SRC = 1,
  TRANSFER_DST = 2,
  SAMPLED = 4,
  STORAGE = 8,
  OUTPUT_ATTACHMENT = 16,
}

export interface GPUBindGroupBinding {
  binding: number;
  resource: GPUBindingResource;
}

export interface GPUBindGroupDescriptor {
  layout: GPUBindGroupLayout;
  bindings: GPUBindGroupBinding[];
}

export interface GPUBindGroupLayoutBinding {
  binding: number;
  visibility: GPUShaderStageFlags;
  type: GPUBindingType;
}

export interface GPUBindGroupLayoutDescriptor {
  bindings?: GPUBindGroupLayoutBinding[];
}

export interface GPUBlendDescriptor {
  dstFactor?: GPUBlendFactor;
  operation?: GPUBlendOperation;
  srcFactor?: GPUBlendFactor;
}

export interface GPUColorStateDescriptor {
  format: GPUTextureFormat;

  alphaBlend: GPUBlendDescriptor;
  colorBlend: GPUBlendDescriptor;
  writeMask?: GPUColorWriteFlags;
}

export interface GPUBufferBinding {
  buffer: GPUBuffer;
  offset?: number;
  size: number;
}

export interface GPUBufferCopyView {
  buffer: GPUBuffer;
  offset?: number;
  rowPitch: number;
  imageHeight: number;
}

export interface GPUBufferDescriptor {
  size: number;
  usage: GPUBufferUsageFlags;
}

export interface GPUColor {
  a: number;
  b: number;
  g: number;
  r: number;
}

export interface GPUCommandEncoderDescriptor {
  label?: string;
}

export interface GPUComputePipelineDescriptor extends GPUPipelineDescriptorBase {
  computeStage: GPUPipelineStageDescriptor;
}

export interface GPUDepthStencilStateDescriptor {
  format: GPUTextureFormat;

  depthWriteEnabled?: boolean;
  depthCompare?: GPUCompareFunction;

  stencilFront: GPUStencilStateFaceDescriptor;
  stencilBack: GPUStencilStateFaceDescriptor;

  stencilReadMask?: number;
  stencilWriteMask?: number;
}

export interface GPUDeviceDescriptor {
  extensions?: GPUExtensions;
  limits?: GPULimits;
}

export interface GPUExtensions {
  anisotropicFiltering?: boolean;
}

export interface GPUExtent3D {
  width: number;
  height: number;
  depth: number;
}

export interface GPUFenceDescriptor {
  initialValue?: number;
  label?: string;
  signalQueue?: GPUQueue;
}

export interface GPUVertexAttributeDescriptor {
  offset?: number;
  format: GPUVertexFormat;
  shaderLocation: number;
}

export interface GPUVertexBufferDescriptor {
  stride: number;
  stepMode?: GPUInputStepMode;
  attributeSet: GPUVertexAttributeDescriptor[];
}

export interface GPUVertexInputDescriptor {
  indexFormat: GPUIndexFormat;
  vertexBuffers: GPUVertexAttributeDescriptor[];
}

export interface GPULimits {
  maxBindGroups?: number;
}

export interface GPUOrigin3D {
  x?: number;
  y?: number;
  z?: number;
}

export interface GPUPipelineDescriptorBase {
  label?: string;
  layout: GPUPipelineLayout;
}

export interface GPUPipelineLayoutDescriptor {
  bindGroupLayouts: GPUBindGroupLayout[];
}

export interface GPUPipelineStageDescriptor {
  module: GPUShaderModule;
  entryPoint: string;
}

export interface GPURasterizationStateDescriptor {
  frontFace: GPUFrontFace;
  cullMode?: GPUCullMode;
  depthBias?: number;
  depthBiasSlopeScale?: number;
  depthBiasClamp?: number;
}

export interface GPURenderPassColorAttachmentDescriptor {
  attachment: GPUTextureView;
  resolveTarget?: GPUTextureView;

  loadOp: GPULoadOp;
  storeOp: GPUStoreOp;
  clearColor?: GPUColor;
}

export interface GPURenderPassDepthStencilAttachmentDescriptor {
  attachment: GPUTextureView;

  depthLoadOp: GPULoadOp;
  depthStoreOp: GPUStoreOp;
  clearDepth: number;

  stencilLoadOp: GPULoadOp;
  stencilStoreOp: GPUStoreOp;
  clearStencil?: number;
}

export interface GPURenderPassDescriptor {
  colorAttachments: GPURenderPassColorAttachmentDescriptor[];
  depthStencilAttachment?: GPURenderPassDepthStencilAttachmentDescriptor;
}

export interface GPURenderPipelineDescriptor extends GPUPipelineDescriptorBase {
  vertexStage: GPUPipelineStageDescriptor;
  fragmentStage?: GPUPipelineStageDescriptor;

  primitiveTopology: GPUPrimitiveTopology;
  rasterizationState: GPURasterizationStateDescriptor;
  colorStates: GPUColorStateDescriptor[];
  depthStencilState?: GPUDepthStencilStateDescriptor;
  vertexInput: GPUVertexInputDescriptor;

  sampleCount?: number;
}

export interface GPUSamplerDescriptor {
  compareFunction?: GPUCompareFunction;
  lodMaxClamp?: number;
  lodMinClamp?: number;
  magFilter?: GPUFilterMode;
  maxAnisotropy?: number;
  minFilter?: GPUFilterMode;
  mipmapFilter?: GPUFilterMode;
  addressModeU?: GPUAddressMode;
  addressModeV?: GPUAddressMode;
  addressModeW?: GPUAddressMode;
}

export interface GPUShaderModuleDescriptor {
  code: ArrayBufferView | string;
  label?: string;
}

export interface GPUStencilStateFaceDescriptor {
  compare?: GPUCompareFunction;
  depthFailOp?: GPUStencilOperation;
  passOp?: GPUStencilOperation;
  failOp?: GPUStencilOperation;
}

export interface GPUSwapChainDescriptor {
  device: GPUDevice;
  format: GPUTextureFormat;
  usage?: GPUTextureUsageFlags;
}

export interface GPUTextureCopyView {
  texture: GPUTexture;
  mipLevel?: number;
  arrayLayer?: number;
  origin?: GPUOrigin3D;
}

export interface GPUTextureDescriptor {
  size: GPUExtent3D;
  arrayLayerCount?: number;
  mipLevelCount?: number;
  sampleCount?: number;
  dimension?: GPUTextureDimension;
  format: GPUTextureFormat;
  usage: GPUTextureUsageFlags;
}

export interface GPUTextureViewDescriptor {
  aspect: GPUTextureAspectFlags;
  baseArrayLayer?: number;
  baseMipLevel?: number;
  dimension: GPUTextureViewDimension;
  format: GPUTextureFormat;
  arrayLayerCount?: number;
  mipLevelCount?: number;
}

export interface GPUAdapter {
  readonly extensions: GPUExtensions;
  readonly name: string;
  requestDevice(descriptor: GPUDeviceDescriptor): Promise<GPUDevice>;
}

export interface GPUBindGroup extends GPUDebugLabel {
}

export interface GPUBindGroupLayout extends GPUDebugLabel {
}

export interface GPUBuffer extends GPUDebugLabel {
  //readonly mapping: ArrayBuffer | null;
  destroy(): void;
  unmap(): void;

  mapWriteAsync(): Promise<ArrayBuffer>;
  mapReadAsync(): Promise<ArrayBuffer>;
  setSubData(offset: number, src: ArrayBufferView, srcOffset?: number, byteLength?: number): void;
}

export interface GPUCommandEncoder extends GPUDebugLabel {
  beginComputePass(): GPUComputePassEncoder;
  beginRenderPass(descriptor: GPURenderPassDescriptor): GPURenderPassEncoder;
  copyBufferToBuffer(src: GPUBuffer, srcOffset: number, dst: GPUBuffer, dstOffset: number, size: number): void;
  copyBufferToTexture(source: GPUBufferCopyView, destination: GPUTextureCopyView, copySize: GPUExtent3D): void;
  copyTextureToBuffer(source: GPUTextureCopyView, destination: GPUBufferCopyView, copySize: GPUExtent3D): void;
  copyTextureToTexture(source: GPUTextureCopyView, destination: GPUTextureCopyView, copySize: GPUExtent3D): void;
  finish(): GPUCommandBuffer;
}

export interface GPUCommandBuffer extends GPUDebugLabel {
}

export interface GPUComputePassEncoder extends GPUProgrammablePassEncoder {
  setPipeline(pipeline: GPUComputePipeline): void;
  dispatch(x: number, y: number, z: number): void;
}

export interface GPUComputePipeline extends GPUDebugLabel {
}

export interface GPUDebugLabel {
  label: string | undefined;
}

// SwapChain / CanvasContext
export interface GPUCanvasContext {
  configureSwapChain(descriptor: GPUSwapChainDescriptor): GPUSwapChain;

  getSwapChainPreferredFormat(device: GPUDevice): Promise<GPUTextureFormat>;
}

export interface GPUDevice {
  readonly adapter: GPUAdapter;
  readonly extensions: GPUExtensions;
  readonly limits: GPULimits;

  createBindGroup(descriptor: GPUBindGroupDescriptor): GPUBindGroup;
  createBindGroupLayout(descriptor: GPUBindGroupLayoutDescriptor): GPUBindGroupLayout;
  createBuffer(descriptor: GPUBufferDescriptor): GPUBuffer;
  //createBufferMapped(descriptor: GPUBufferDescriptor): GPUBuffer;
  //createBufferMappedAsync(descriptor: GPUBufferDescriptor): GPUBuffer;
  createCommandEncoder(descriptor: GPUCommandEncoderDescriptor): GPUCommandEncoder;
  createComputePipeline(descriptor: GPUComputePipelineDescriptor): GPUComputePipeline;
  createPipelineLayout(descriptor: GPUPipelineLayoutDescriptor): GPUPipelineLayout;
  createRenderPipeline(descriptor: GPURenderPipelineDescriptor): GPURenderPipeline;
  createSampler(descriptor: GPUSamplerDescriptor): GPUSampler;
  createShaderModule(descriptor: GPUShaderModuleDescriptor): GPUShaderModule;
  createTexture(descriptor: GPUTextureDescriptor): GPUTexture;

  getQueue(): GPUQueue;

  readonly lost: Promise<GPUDeviceLostInfo>;
}

export interface GPUFence extends GPUDebugLabel {
  getCompletedValue(): number;
  onCompletion(completionValue: number): Promise<void>;
}

export interface GPUPipelineLayout extends GPUDebugLabel {
}

export interface GPUProgrammablePassEncoder extends GPUDebugLabel {
  endPass(): void;
  insertDebugMarker(markerLabel: string): void;
  popDebugGroup(): void;
  pushDebugGroup(groupLabel: string): void;
  setBindGroup(index: number, bindGroup: GPUBindGroup): void;
}

export interface GPUQueue extends GPUDebugLabel {
  signal(fence: GPUFence, signalValue: number): void;
  submit(buffers: GPUCommandBuffer[]): void;
  createFence(descriptor: GPUFenceDescriptor): GPUFence;
}

export interface GPURenderPassEncoder extends GPUProgrammablePassEncoder {
  setPipeline(pipeline: GPURenderPipeline): void;
  draw(vertexCount: number, instanceCount: number, firstVertex: number, firstInstance: number): void;
  drawIndexed(indexCount: number, instanceCount: number, firstIndex: number, baseVertex: number, firstInstance: number): void;
  setBlendColor(color: GPUColor): void;
  setIndexBuffer(buffer: GPUBuffer, offset: number): void;
  setScissorRect(x: number, y: number, width: number, height: number): void;
  setStencilReference(reference: number): void;
  setVertexBuffers(startSlot: number, buffers: GPUBuffer[], offsets: number[]): void;
  setViewport(x: number, y: number, width: number, height: number, minDepth: number, maxDepth: number): void;
}

export interface GPURenderPipeline extends GPUDebugLabel {
}

export interface GPUSampler extends GPUDebugLabel {
}

export interface GPUShaderModule extends GPUDebugLabel {
}

export interface GPUSwapChain {
  getCurrentTexture(): GPUTexture;
}

export interface GPUTexture extends GPUDebugLabel {
  createDefaultView(): GPUTextureView;
  createView(desc: GPUTextureViewDescriptor): GPUTextureView;
  destroy(): void;
}

export interface GPUTextureView extends GPUDebugLabel {
}

export type GPUPowerPreference =
  | "low-power"
  | "high-performance";
export interface GPURequestAdapterOptions {
  powerPreference?: GPUPowerPreference;
}

export interface GPU {
  requestAdapter(options?: GPURequestAdapterOptions): Promise<GPUAdapter>;
}

// ****************************************************************************
// ERROR SCOPES
// ****************************************************************************

export type GPUErrorFilter = "none"
  | "out-of-memory"
  | "validation";

export class GPUOutOfMemoryError {
  constructor();
}

export class GPUValidationError {
  constructor(message: string);
  readonly message: string;
}

export type GPUError = GPUOutOfMemoryError | GPUValidationError;

export interface GPUDevice {
  pushErrorScope(filter: GPUErrorFilter): void;
  popErrorScope(): Promise<GPUError | null>;
}

// ****************************************************************************
// TELEMETRY
// ****************************************************************************
export interface GPUUncapturedErrorEvent extends Event {
  readonly error: GPUError;
}

export interface GPUUncapturedErrorEventInit extends EventInit {
  error: GPUError;
}

// TODO: is it possible to expose the EventTarget only on the main thread?
export interface GPUDevice extends EventTarget {
  onuncapturederror: Event | undefined;
}

export interface GPUDeviceLostInfo {
  readonly message: string;
}

export interface GPU {
  // May reject with DOMException  // TODO: DOMException("OperationError")?
  requestAdapter(options?: GPURequestAdapterOptions): Promise<GPUAdapter>;
}

export interface Navigator {
  readonly gpu: GPU | undefined;
}

}
