export type Breakpoint = "phone" | "tablet" | "laptop" | "desktop";

export type Breakpoints<T> = Partial<Record<Breakpoint, T>>;

export type TextType =
  | "text-small"
  | "text-medium"
  | "text-large"
  | "text-xlarge";

export type TextWeight =
  | "text-weight-bold"
  | "text-weight-semibold"
  | "text-weight-medium"
  | "text-weight-normal"
  | "text-weight-light";

export type TextStyle = "text-style-subheading";

export type TextColor =
  | "text-color-white"
  | "text-color-secondary"
  | "text-color-accent";
