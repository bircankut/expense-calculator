export function generateId(length = 40): string {
    var arr = new Uint8Array(length / 2)
    window.crypto.getRandomValues(arr)
    return Array.from(arr, (val) => val.toString(16).padStart(2, "0")).join('')
}
