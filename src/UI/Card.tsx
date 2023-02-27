import { FC } from 'react';

type CardProps = {
	isFeatured?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const Card: FC<CardProps> = ({ children, isFeatured, className }) => {
	return (
		<div
			className={`card${isFeatured ? ' card--featured' : ''}${
				className ? ' ' + className : ''
			}`}
		>
			{children}
		</div>
	);
};

export { Card };
