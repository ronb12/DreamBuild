// Performance monitoring utilities
class PerformanceMonitor {
  constructor() {
    this.metrics = new Map();
    this.isEnabled = process.env.NODE_ENV === 'development';
  }

  // Start timing a performance metric
  startTiming(name) {
    if (!this.isEnabled) return;
    
    this.metrics.set(name, {
      startTime: performance.now(),
      endTime: null,
      duration: null
    });
  }

  // End timing a performance metric
  endTiming(name) {
    if (!this.isEnabled) return;
    
    const metric = this.metrics.get(name);
    if (metric) {
      metric.endTime = performance.now();
      metric.duration = metric.endTime - metric.startTime;
      
      // Log slow operations
      if (metric.duration > 1000) {
        console.warn(`Slow operation detected: ${name} took ${metric.duration.toFixed(2)}ms`);
      }
    }
  }

  // Get performance metrics
  getMetrics() {
    return Object.fromEntries(this.metrics);
  }

  // Clear all metrics
  clearMetrics() {
    this.metrics.clear();
  }

  // Measure function execution time
  async measureAsync(name, fn) {
    this.startTiming(name);
    try {
      const result = await fn();
      return result;
    } finally {
      this.endTiming(name);
    }
  }

  // Measure synchronous function execution time
  measureSync(name, fn) {
    this.startTiming(name);
    try {
      const result = fn();
      return result;
    } finally {
      this.endTiming(name);
    }
  }
}

// Create singleton instance
const performanceMonitor = new PerformanceMonitor();

// React hook for performance monitoring
export const usePerformanceMonitor = () => {
  return {
    startTiming: (name) => performanceMonitor.startTiming(name),
    endTiming: (name) => performanceMonitor.endTiming(name),
    measureAsync: (name, fn) => performanceMonitor.measureAsync(name, fn),
    measureSync: (name, fn) => performanceMonitor.measureSync(name, fn),
    getMetrics: () => performanceMonitor.getMetrics(),
    clearMetrics: () => performanceMonitor.clearMetrics()
  };
};

// Higher-order component for performance monitoring
export const withPerformanceMonitor = (WrappedComponent, componentName) => {
  return function PerformanceMonitoredComponent(props) {
    const monitor = usePerformanceMonitor();
    
    React.useEffect(() => {
      monitor.startTiming(`${componentName}-render`);
      return () => {
        monitor.endTiming(`${componentName}-render`);
      };
    });

    return <WrappedComponent {...props} />;
  };
};

export default performanceMonitor;
