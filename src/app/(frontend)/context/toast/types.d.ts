export type ToastConfig = {
    visible: boolean;
    type: "error" | "success" | "warning" | "info" | null;
    toastMessage: string
};

export type TToastType = "error" | "success" | "warning" | "info" | null;
export type ToasContextValue = {
    setToastProperties: Dispatch<SetStateAction<ToastConfig>>;
};
