import React from 'react';

const HeroHeader = () => {
    return (
        <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url('data:image/jpeg;base64,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')` }}>
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex flex-col items-center justify-center text-center">
                <h1 className="text-5xl font-bold text-white mb-4">Hello there</h1>
                <p className="text-lg text-white mb-6 max-w-lg">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                <div className="relative w-full max-w-md">
                    <input
                        type="text"
                        className="w-full px-4 py-2 rounded-full text-gray-800 focus:outline-none"
                        placeholder="Search"
                    />
                    <button className="absolute right-0 top-0 h-full px-4 bg-gray-300 rounded-full text-gray-600 hover:bg-gray-400">
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                            <path d="M10 18c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm7.292-1.707c-.187.188-.511.188-.698 0l-4.013-4.014a6.961 6.961 0 0 1-3.581.93C5.268 13.209 2 9.941 2 6s3.268-7.209 7.292-7.209S16.584 2.268 16.584 6c0 1.199-.297 2.343-.816 3.381l4.01 4.01c.188.187.188.511 0 .698l-1.586 1.586zm-.586-4.707a7.963 7.963 0 0 0-1.88-2.48l1.414-1.415c1.463 1.463 2.352 3.399 2.352 5.495 0 2.094-.888 4.032-2.352 5.495l-1.414-1.414a7.963 7.963 0 0 0 1.88-2.48z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroHeader;
