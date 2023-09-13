import React, { Component, ErrorInfo } from 'react';
import { TErrorBoundaryProps, TErrorBoundaryState } from './ErrorBoundary.types';

class ErrorBoundary extends Component<TErrorBoundaryProps, TErrorBoundaryState> {
  public state: TErrorBoundaryState = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): TErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallBack ?? <h1>Something is Wrong!</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
