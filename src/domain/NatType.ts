export const NatType = {
    SNat: 'SNat',
    DNat: 'DNat'
} as const;
export type NatType = typeof NatType[keyof typeof NatType];