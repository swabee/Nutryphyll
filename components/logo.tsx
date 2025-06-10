import clsx from 'clsx';

export const Logo = ({ className }: { className?: string }) => {
  return <img src="./np-logo.png" alt="Logo" className={clsx('h-5 w-auto', className)} />;
};
