import { CSSProperties, ReactNode } from 'react';

export type TPropsWithChildren<T = unknown> = T & { children?: ReactNode };

export type TPropsWithClassName<T = unknown> = T & { className?: string };

export type TPropsWithStyle<T = unknown> = T & { style?: CSSProperties };

export type TPropsWithComponent<T = unknown> = T &
  TPropsWithChildren &
  TPropsWithClassName &
  TPropsWithStyle;
