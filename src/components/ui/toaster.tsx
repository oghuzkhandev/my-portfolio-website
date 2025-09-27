import { useToast } from "@/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({
        id,
        title,
        description,
        action,
        duration,
        ...props
      }) {
        return (
          <Toast
            key={id}
            {...props}
            duration={duration ?? 5000}
            className="relative bg-white/90 backdrop-blur-md border border-gray-200 
                       shadow-lg rounded-xl px-5 py-4 text-gray-900 flex items-start"
          >
            <div className="grid gap-1 pr-6">
              {title && (
                <ToastTitle className="font-semibold text-gray-900">
                  {title}
                </ToastTitle>
              )}
              {description && (
                <ToastDescription className="text-sm text-gray-600">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose className="absolute top-3 right-3 text-gray-500 hover:text-gray-800" />
          </Toast>
        );
      })}
      <ToastViewport
        className="fixed top-6 left-1/2 -translate-x-1/2 
                   flex flex-col gap-3 z-[9999] w-full max-w-sm"
      />
    </ToastProvider>
  );
}
