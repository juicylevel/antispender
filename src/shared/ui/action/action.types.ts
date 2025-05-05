import { ReactNode } from 'react';

export type ActionRenderer = ({
    onTrigger,
}: {
    onTrigger: () => void;
}) => ReactNode;

export type ActionProps<P = unknown> = {
    children: ActionRenderer;
    onComplete?: (payload?: P) => void;
};
