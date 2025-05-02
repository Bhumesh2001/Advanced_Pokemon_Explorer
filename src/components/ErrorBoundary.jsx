import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div role="alert" style={{ padding: '2rem', textAlign: 'center' }}>
            <h2>Something went wrong.</h2>
            {process.env.NODE_ENV === 'development' && (
                <pre style={{ color: 'red', marginTop: '1rem' }}>{error?.toString()}</pre>
            )}
            <button onClick={resetErrorBoundary} style={{ marginTop: '1rem' }}>
                Try Again
            </button>
        </div>
    );
}

export default function FunctionalErrorBoundary({ children }) {
    return (
        <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => {}}
        >
            {children}
        </ErrorBoundary>
    );
};
