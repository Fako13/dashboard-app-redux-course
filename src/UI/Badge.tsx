import { FC } from 'react';
import { ReactComponent as Remove } from '../assets/images/icon-remove.svg';

type BadgeProps = {
	variant?: 'basic' | 'clearable' | 'rounded';
	colorScheme?: 'light' | 'primary' | 'dark';
	onClear?: () => void;
	onClick?: () => void;
} & React.HTMLAttributes<HTMLDivElement>;

const Badge: FC<BadgeProps> = ({
	variant = 'basic',
	colorScheme = 'light',
	children,
	onClear,
	onClick,
}) => (
	<div
		className={`badge badge--${variant} badge--${colorScheme}`}
		onClick={onClick}
	>
		<span>{children}</span>
		{variant === 'clearable' && (
			<div className="badge-remover" onClick={onClear}>
				<Remove />
			</div>
		)}
	</div>
);

export { Badge };
