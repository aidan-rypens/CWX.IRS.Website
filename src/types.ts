export type Breakpoint = "phone" | "tablet" | "laptop" | "desktop";

export type Breakpoints<T> = Partial<Record<Breakpoint, T>>;

export type Text = "text-small" | "text-medium" | "text-large" | "text-xlarge";
