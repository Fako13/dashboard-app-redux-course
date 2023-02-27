import { FC } from 'react';

type StackProps = {
	pos?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const Stack: FC<StackProps> = ({ children, pos }) => (
	<div
		className="stack"
		style={{
			justifyContent: pos === 'center' ? 'center' : `flex-${pos}`,
		}}
	>
		{children}
	</div>
);

export { Stack };
