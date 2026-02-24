import React from 'react'

const SectionHeader = ({subheader, title, header, headerColor}) => {
  return (
    <div>
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mx-auto mb-6">
          <span className="w-2 h-2 bg-fuchsia-600 rounded-full animate-pulse"></span>
          {title}
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          {header}
          <span className="bg-clip-text text-transparent bg-linear-to-br from-purple-700 to-fuchsia-500">
            {headerColor}
          </span>
        </h2>

        <p className="text-gray-600 text-base sm:text-lg">{subheader}</p>
      </div>
    </div>
  );
}

export default SectionHeader