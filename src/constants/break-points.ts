/**
 * Tailwind CSS 기본 breakpoint 기준 기기별 사이즈
 * @see https://tailwindcss.com/docs/screens
 */

export const BREAKPOINTS = {
  /** 모바일 기준: 0px ~ 639px */
  MOBILE: {
    min: 0,
    max: 639,
  },
  /** 태블릿 (Small) 기준: 640px ~ 767px */
  SM: {
    min: 640,
    max: 767,
  },
  /** 태블릿 (Medium) 기준: 768px ~ 1023px */
  MD: {
    min: 768,
    max: 1023,
  },
  /** 데스크탑 (Large) 기준: 1024px ~ 1279px */
  LG: {
    min: 1024,
    max: 1279,
  },
  /** 데스크탑 (Extra Large) 기준: 1280px ~ 1535px */
  XL: {
    min: 1280,
    max: 1535,
  },
  /** 데스크탑 (2Extra Large) 기준: 1536px 이상 */
  "2XL": {
    min: 1536,
    max: Infinity,
  },
} as const;

export type DeviceType = keyof typeof BREAKPOINTS;