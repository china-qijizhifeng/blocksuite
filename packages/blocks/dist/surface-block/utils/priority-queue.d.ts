type PriorityQueueNode<T, K> = {
    value: T;
    priority: K;
};
export declare class PriorityQueue<T, K> {
    private _compare;
    heap: PriorityQueueNode<T, K>[];
    constructor(_compare: (a: K, b: K) => number);
    enqueue(value: T, priority: K): void;
    dequeue(): T | null;
    empty(): boolean;
    bubbleUp(index?: number): void;
    bubbleDown(): void;
}
export {};
//# sourceMappingURL=priority-queue.d.ts.map