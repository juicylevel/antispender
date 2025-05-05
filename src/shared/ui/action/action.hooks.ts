import { ActionRenderer } from './action.types';

export const useActionTrigger = (
    children: ActionRenderer,
    onTrigger: () => void,
) => {
    return children({ onTrigger });
};
