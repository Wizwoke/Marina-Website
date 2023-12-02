import React from 'react';

function ImageModal({ imageSrc, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-opacity-75 fixed inset-0 bg-gray-700"></div>
      <div className="relative p-4 bg-white shadow-lg">
        <img src={imageSrc} alt="Modal Image" className="w-full h-auto" />
        <button
          className="mt-2 p-2 text-white bg-red-500 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default ImageModal;
