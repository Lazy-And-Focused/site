import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-content hover:bg-primary-focus',
        secondary: 'bg-base-200 text-base-content hover:bg-base-300',
        outline: 'border border-primary text-primary hover:bg-primary/10',
        ghost: 'text-base-content hover:bg-base-200',
      },
      size: {
        sm: 'px-3 py-1.5',
        md: 'px-4 py-2',
        lg: 'px-6 py-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  ...props
}) => {
  return (
    <button
      className={twMerge(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
};