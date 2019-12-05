import React, { Suspense } from 'react';

const withLazyLoading = (WrappedCmp) => {
    return class extends React.Component {
        render() {
            return (
                <Suspense fallback={<p>Loading...</p>}>
                    <WrappedCmp {...this.props} />
                </Suspense>
            )
        }
    }
}

export default withLazyLoading;