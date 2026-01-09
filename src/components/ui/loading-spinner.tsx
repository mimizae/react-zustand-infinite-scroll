export const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="relative w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-primary-50 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-primary-300 rounded-full border-t-transparent animate-spin"></div>
      </div>
    </div>
  );
};

export const LoadingText = () => {
  return (
    <div className="flex justify-center items-center py-4">
      <p className="text-gray-300 text-sm animate-pulse">로딩 중...</p>
    </div>
  );
};
