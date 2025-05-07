import { ref, markRaw, h, render, provide, inject } from 'vue';
import Snackbar from '../components/Snackbar.vue';

export type SnackbarKind = 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'secondary';
export type SnackbarPosition = 'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export interface SnackbarOptions {
  message: string;
  title?: string;
  kind?: SnackbarKind;
  position?: SnackbarPosition;
  duration?: number;
  actionLabel?: string;
  showIcon?: boolean;
  dismissible?: boolean;
  autoClose?: boolean;
  onAction?: () => void;
  onDismiss?: () => void;
  onClose?: () => void;
}

const SNACKBAR_KEY = Symbol('snackbar');

class SnackbarService {
  private snackbarContainer: HTMLElement | null = null;
  private activeSnackbars = ref<Record<string, { show: boolean; id: string }>>({});

  constructor() {
    // Create container for snackbars if it doesn't exist
    if (typeof document !== 'undefined') {
      this.createContainer();
    }
  }

  private createContainer() {
    if (!this.snackbarContainer) {
      this.snackbarContainer = document.createElement('div');
      this.snackbarContainer.id = 'snackbar-container';
      document.body.appendChild(this.snackbarContainer);
    }
  }

  show(optionsOrMessage: SnackbarOptions | string): string {
    const options = typeof optionsOrMessage === 'string' 
      ? { message: optionsOrMessage } 
      : optionsOrMessage;
    
    // Generate unique ID for this snackbar
    const id = `snackbar-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    
    // Create a div for this specific snackbar
    const snackbarWrapper = document.createElement('div');
    snackbarWrapper.id = id;
    
    // Make sure container exists
    this.createContainer();
    
    // Add to container
    this.snackbarContainer!.appendChild(snackbarWrapper);
    
    // Track this snackbar
    this.activeSnackbars.value[id] = { show: true, id };
    
    // Create vnode
    const vnode = h(markRaw(Snackbar), {
      modelValue: true,
      'onUpdate:modelValue': (val: boolean) => {
        this.activeSnackbars.value[id].show = val;
        if (!val) {
          this.cleanupSnackbar(id);
        }
      },
      message: options.message,
      title: options.title,
      kind: options.kind || 'primary',
      position: options.position || 'bottom',
      duration: options.duration,
      actionLabel: options.actionLabel,
      showIcon: options.showIcon,
      dismissible: options.dismissible,
      autoClose: options.autoClose,
      onAction: () => {
        options.onAction?.();
      },
      onDismiss: () => {
        options.onDismiss?.();
      },
      onClose: () => {
        options.onClose?.();
        this.cleanupSnackbar(id);
      }
    });
    
    // Render to the DOM
    render(vnode, snackbarWrapper);
    
    return id;
  }
  
  success(message: string, options: Partial<SnackbarOptions> = {}): string {
    return this.show({
      message,
      kind: 'success',
      ...options
    });
  }
  
  error(message: string, options: Partial<SnackbarOptions> = {}): string {
    return this.show({
      message,
      kind: 'danger',
      ...options
    });
  }
  
  info(message: string, options: Partial<SnackbarOptions> = {}): string {
    return this.show({
      message,
      kind: 'info',
      ...options
    });
  }
  
  warning(message: string, options: Partial<SnackbarOptions> = {}): string {
    return this.show({
      message,
      kind: 'warning',
      ...options
    });
  }
  
  close(id: string): void {
    if (this.activeSnackbars.value[id]) {
      this.activeSnackbars.value[id].show = false;
      this.cleanupSnackbar(id);
    }
  }
  
  closeAll(): void {
    Object.keys(this.activeSnackbars.value).forEach(id => {
      this.close(id);
    });
  }
  
  private cleanupSnackbar(id: string): void {
    // Remove from DOM
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        render(null, element);
        element.remove();
      }
      
      // Clean up tracking
      if (this.activeSnackbars.value[id]) {
        const copy = { ...this.activeSnackbars.value };
        delete copy[id];
        this.activeSnackbars.value = copy;
      }
    }, 300); // Allow animations to complete
  }
}

// Create a global instance
const globalSnackbarService = new SnackbarService();

// Provider for global service
export function provideSnackbar() {
  provide(SNACKBAR_KEY, globalSnackbarService);
  return globalSnackbarService;
}

// Hook to use the service
export function useSnackbar(): SnackbarService {
  const service = inject<SnackbarService>(SNACKBAR_KEY);
  
  // Return global service if not provided
  return service || globalSnackbarService;
}

export default useSnackbar;