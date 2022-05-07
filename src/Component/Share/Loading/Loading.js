import React from 'react';

const Loading = () => {
    return (
        <div>
            <div className="mb-2  spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;