export function test_writeBuffer(q: GPUQueue, b: GPUBuffer, sab: SharedArrayBuffer) {
    q.writeBuffer(b, 0, sab);
}
