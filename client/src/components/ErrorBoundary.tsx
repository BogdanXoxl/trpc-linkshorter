import React from "react";

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error(">>>" + error, errorInfo);
    this.setState({ hasError: true });
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      window.location.pathname = "/";
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
