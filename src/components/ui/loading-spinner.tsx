type SpinnerSize = 'page' | 'post';

const sizeMap = {
  page: 'w-16 h-16',
  post: 'w-8 h-8',
};

const wrapperPaddingMap = {
  page: 'py-8',
  post: 'py-4',
};

// 공통 원형 베이스
const spinnerCircleBase = 'absolute top-0 left-0 w-full h-full border-4 rounded-full';

const spinnerBg = `${spinnerCircleBase} border-primary-50`;
const spinnerSpin = `${spinnerCircleBase} border-primary-300 border-t-transparent animate-spin`;

interface LoadingSpinnerProps {
  size?: SpinnerSize;
}

export const LoadingSpinner = ({ size = 'page' }: LoadingSpinnerProps) => {
  return (
    <div className={`flex justify-center items-center ${wrapperPaddingMap[size]}`}>
      <div className={`relative ${sizeMap[size]}`}>
        <div className={spinnerBg} />
        <div className={spinnerSpin} />
      </div>
    </div>
  );
};
