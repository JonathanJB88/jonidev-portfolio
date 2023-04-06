class IntersectionObserverMock implements IntersectionObserver {
  readonly root: Element | null = null;
  readonly rootMargin: string = '';
  readonly thresholds: ReadonlyArray<number> = [];

  constructor(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {
    // Add any setup needed here
  }

  observe(target: Element): void {
    // Add any logic to simulate observing the target
  }

  unobserve(target: Element): void {
    // Add any logic to simulate unobserving the target
  }

  disconnect(): void {
    // Add any logic to simulate disconnecting the observer
  }

  takeRecords(): IntersectionObserverEntry[] {
    // Add any logic to simulate taking records
    return [];
  }
}

export default IntersectionObserverMock;
