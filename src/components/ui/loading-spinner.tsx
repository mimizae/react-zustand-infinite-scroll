// 공통 원형 베이스
const spinnerCircleBase = 'absolute top-0 left-0 w-full h-full border-4 rounded-full';

// 색상만 다른 원
const spinnerBg = `${spinnerCircleBase} border-primary-50`;

const spinnerSpin = `${spinnerCircleBase} border-primary-300 border-t-transparent animate-spin`;

export const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="relative w-16 h-16">
        <div className={spinnerBg} />
        <div className={spinnerSpin} />
      </div>
    </div>
  );
};
