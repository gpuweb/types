// https://github.com/gpuweb/gpuweb/blob/01b20b4ad93fabae1e8e0d7752515f69708d33e0/spec/index.bs

// tslint:disable:variable-name

// String enums
export const enum ExtensionName {
  TextureCompressionBC = 'texture-compression-bc',
}
export const enum AddressMode {
  ClampToEdge = 'clamp-to-edge',
  Repeat = 'repeat',
  MirrorRepeat = 'mirror-repeat',
}
export const enum BindingType {
  UniformBuffer = 'uniform-buffer',
  StorageBuffer = 'storage-buffer',
  ReadonlyStorageBuffer = 'readonly-storage-buffer',
  Sampler = 'sampler',
  ComparisonSampler = 'comparison-sampler',
  SampledTexture = 'sampled-texture',
  ReadonlyStorageTexture = 'readonly-storage-texture',
  WriteonlyStorageTexture = 'writeonly-storage-texture',
}
export const enum BlendFactor {
  Zero = 'zero',
  One = 'one',
  SrcColor = 'src-color',
  OneMinusSrcColor = 'one-minus-src-color',
  SrcAlpha = 'src-alpha',
  OneMinusSrcAlpha = 'one-minus-src-alpha',
  DstColor = 'dst-color',
  OneMinusDstColor = 'one-minus-dst-color',
  DstAlpha = 'dst-alpha',
  OneMinusDstAlpha = 'one-minus-dst-alpha',
  SrcAlphaSaturated = 'src-alpha-saturated',
  BlendColor = 'blend-color',
  OneMinusBlendColor = 'one-minus-blend-color',
}
export const enum BlendOperation {
  Add = 'add',
  Subtract = 'subtract',
  ReverseSubtract = 'reverse-subtract',
  Min = 'min',
  Max = 'max',
}
export const enum CompareFunction {
  Never = 'never',
  Less = 'less',
  Equal = 'equal',
  LessEqual = 'less-equal',
  Greater = 'greater',
  NotEqual = 'not-equal',
  GreaterEqual = 'greater-equal',
  Always = 'always',
}
export const enum CullMode {
  None = 'none',
  Front = 'front',
  Back = 'back',
}
export const enum FilterMode {
  Nearest = 'nearest',
  Linear = 'linear',
}
export const enum FrontFace {
  CCW = 'ccw',
  CW = 'cw',
}
export const enum IndexFormat {
  Uint16 = 'uint16',
  Uint32 = 'uint32',
}
export const enum InputStepMode {
  Vertex = 'vertex',
  Instance = 'instance',
}
export const enum LoadOp {
  Load = 'load',
}
export const enum PrimitiveTopology {
  PointList = 'point-list',
  LineList = 'line-list',
  LineStrip = 'line-strip',
  TriangleList = 'triangle-list',
  TriangleStrip = 'triangle-strip',
}
export const enum StencilOperation {
  Keep = 'keep',
  Zero = 'zero',
  Replace = 'replace',
  Invert = 'invert',
  IncrementClamp = 'increment-clamp',
  DecrementClamp = 'decrement-clamp',
  IncrementWrap = 'increment-wrap',
  DecrementWrap = 'decrement-wrap',
}
export const enum StoreOp {
  Store = 'store',
  Clear = 'clear',
}
export const enum TextureDimension {
  E1d = '1d',
  E2d = '2d',
  E3d = '3d',
}
export const enum TextureFormat {
  R8Unorm = 'r8unorm',
  R8Snorm = 'r8snorm',
  R8Uint = 'r8uint',
  R8Sint = 'r8sint',
  R16Uint = 'r16uint',
  R16Sint = 'r16sint',
  R16Float = 'r16float',
  RG8Unorm = 'rg8unorm',
  RG8Snorm = 'rg8snorm',
  RG8Uint = 'rg8uint',
  RG8Sint = 'rg8sint',
  R32Uint = 'r32uint',
  R32Sint = 'r32sint',
  R32Float = 'r32float',
  RG16Uint = 'rg16uint',
  RG16Sint = 'rg16sint',
  RG16Float = 'rg16float',
  RGBA8Unorm = 'rgba8unorm',
  RGBA8UnormSRGB = 'rgba8unorm-srgb',
  RGBA8Snorm = 'rgba8snorm',
  RGBA8Uint = 'rgba8uint',
  RGBA8Sint = 'rgba8sint',
  BGRA8Unorm = 'bgra8unorm',
  BGRA8UnormSRGB = 'bgra8unorm-srgb',
  RGB10A2Unorm = 'rgb10a2unorm',
  RG11B10Float = 'rg11b10float',
  RG32Uint = 'rg32uint',
  RG32Sint = 'rg32sint',
  RG32Float = 'rg32float',
  RGBA16Uint = 'rgba16uint',
  RGBA16Sint = 'rgba16sint',
  RGBA16Float = 'rgba16float',
  RGBA32Uint = 'rgba32uint',
  RGBA32Sint = 'rgba32sint',
  RGBA32Float = 'rgba32float',
  Depth32Float = 'depth32float',
  Depth24Plus = 'depth24plus',
  Depth24PlusStencil8 = 'depth24plus-stencil8',
}
export const enum TextureComponentType {
  Float = 'float',
  Sint = 'sint',
  Uint = 'uint',
}
export const enum TextureViewDimension {
  E1d = '1d',
  E2d = '2d',
  E2dArray = '2d-array',
  Cube = 'cube',
  CubeArray = 'cube-array',
  E3d = '3d',
}
export const enum VertexFormat {
  Uchar2 = 'uchar2',
  Uchar4 = 'uchar4',
  Char2 = 'char2',
  Char4 = 'char4',
  Uchar2Norm = 'uchar2norm',
  Uchar4Norm = 'uchar4norm',
  Char2Norm = 'char2norm',
  Char4Norm = 'char4norm',
  Ushort2 = 'ushort2',
  Ushort4 = 'ushort4',
  Short2 = 'short2',
  Short4 = 'short4',
  Ushort2Norm = 'ushort2norm',
  Ushort4Norm = 'ushort4norm',
  Short2Norm = 'short2norm',
  Short4Norm = 'short4norm',
  Half2 = 'half2',
  Half4 = 'half4',
  Float = 'float',
  Float2 = 'float2',
  Float3 = 'float3',
  Float4 = 'float4',
  Uint = 'uint',
  Uint2 = 'uint2',
  Uint3 = 'uint3',
  Uint4 = 'uint4',
  Int = 'int',
  Int2 = 'int2',
  Int3 = 'int3',
  Int4 = 'int4',
}
export const enum TextureAspect {
  All = 'all',
  StencilOnly = 'stencil-only',
  DepthOnly = 'depth-only',
}
export const enum CompilationMessageType {
  Error = 'error',
  Warning = 'warning',
  Info = 'info',
}
export const enum QueryType {
  Occlusion = 'occlusion',
}

// Bit fields
export const enum BufferUsage {
  MapRead = 0x0001,
  MapWrite = 0x0002,
  CopySrc = 0x0004,
  CopyDst = 0x0008,
  Index = 0x0010,
  Vertex = 0x0020,
  Uniform = 0x0040,
  Storage = 0x0080,
  Indirect = 0x0100,
  QueryResolve = 0x0200,
}
export const enum ColorWrite {
  Red = 0x1,
  Green = 0x2,
  Blue = 0x4,
  Alpha = 0x8,
  All = 0xf,
}
export const enum ShaderStage {
  Vertex = 0x1,
  Fragment = 0x2,
  Compute = 0x4,
}
export const enum TextureUsage {
  CopySrc = 0x01,
  CopyDst = 0x02,
  Sampled = 0x04,
  Storage = 0x08,
  OutputAttachment = 0x10,
}
export const enum MapMode {
  Read = 0x01,
  Write = 0x02,
}
