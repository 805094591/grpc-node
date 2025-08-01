// Original file: null

export const SymbolVisibility = {
  VISIBILITY_UNSET: 'VISIBILITY_UNSET',
  VISIBILITY_LOCAL: 'VISIBILITY_LOCAL',
  VISIBILITY_EXPORT: 'VISIBILITY_EXPORT',
} as const;

export type ISymbolVisibility =
  | 'VISIBILITY_UNSET'
  | 0
  | 'VISIBILITY_LOCAL'
  | 1
  | 'VISIBILITY_EXPORT'
  | 2

export type OSymbolVisibility = typeof SymbolVisibility[keyof typeof SymbolVisibility]
