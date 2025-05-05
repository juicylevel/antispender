import { useCallback, useMemo, useState } from 'react';

export const useModal = (initialState = false) => {
    const [open, setOpen] = useState(initialState);
    const show = useCallback(() => {
        setOpen(true);
    }, []);
    const close = useCallback(() => setOpen(false), []);
    const toggle = useCallback(() => setOpen((prev) => !prev), []);
    return useMemo(
        () => ({
            open,
            show,
            close,
            toggle,
            setOpen,
            onClose: close,
            onCancel: close,
        }),
        [open]
    );
};
