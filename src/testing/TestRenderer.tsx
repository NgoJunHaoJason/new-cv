import { I18nContext } from '@solid-primitives/i18n'
import { type JSXElement } from 'solid-js'
import { render } from 'solid-testing-library'
import i18nContext from 'src/contexts/i18nContext'

export const renderWithProviders = (component: JSXElement): unknown =>
  render(() => (
    <I18nContext.Provider value={i18nContext}>{component}</I18nContext.Provider>
  ))

// vi.mock("@solid-primitives/i18n", async (importOriginal) => {
//   const actual: any = await importOriginal();

//   const mockT = vi.fn().mockReturnValue("translated-value");
//   const mockLocale = vi.fn().mockReturnValue("current-locale");

//   const mockUseI18n = vi.fn().mockReturnValue([mockT, { locale: mockLocale }]);
//   return {
//     ...actual,
//     useI18n: mockUseI18n,
//   };
// });
