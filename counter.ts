namespace counter {
    let counter = 0;
    export function addOne (): number {
        counter += 1
        return counter
    }
}