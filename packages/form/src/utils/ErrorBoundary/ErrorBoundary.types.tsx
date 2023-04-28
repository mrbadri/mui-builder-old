import { ReactNode } from 'react';

export interface TErrorBoundaryProps {
  children?: ReactNode;
  fallBack?: ReactNode;
}

export interface TErrorBoundaryState {
  hasError: boolean;
}
