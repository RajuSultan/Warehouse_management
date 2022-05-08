import React from 'react';

const Loading = () => {
    return (
        <div style={{ marginLeft: "50%", marginTop: "20%" }} className='ms-'>
            <div className="mb-2  spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;