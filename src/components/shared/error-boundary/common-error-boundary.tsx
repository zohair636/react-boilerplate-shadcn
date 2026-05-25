import { Component, type ErrorInfo } from "react";
import type { Props, State } from "./common-error-boundary.types";

class CommonErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <p></p>;
    }

    return this.props.children;
  }
}

export default CommonErrorBoundary;
