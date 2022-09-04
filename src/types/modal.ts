export interface IModal {
  onClose?: VoidFunction;
  visible?: boolean;
}

export type OpenModal<T> = (params: T) => void;
