import '@testing-library/jest-dom/vitest'

/** ResizeObserver mock for jsdom environment */
class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.ResizeObserver = ResizeObserverMock