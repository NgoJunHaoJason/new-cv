import { Component } from "solid-js";
import { BiRegularWorld } from "solid-icons/bi";
import { styled } from "solid-styled-components";
import { useI18n } from "@solid-primitives/i18n";
import { enLocale, zhLocale } from "src/contexts/i18nContext";

const TranslateButton: Component = () => {
  const [t, { locale }] = useI18n();

  const onClick = () => {
    const currentLocale = locale();

    if (currentLocale === enLocale) {
      locale(zhLocale);
    } else if (currentLocale === zhLocale) {
      locale(enLocale);
    } else {
      throw Error(`Unknown locale: ${currentLocale}`);
    }
  };

  return (
    <StyledTranslateButton
      data-testid={translateButtonTestId}
      onClick={onClick}
    >
      <BiRegularWorld /> <ButtonContent>{t("header.translate")}</ButtonContent>
    </StyledTranslateButton>
  );
};

export default TranslateButton;

export const translateButtonTestId = "translate-button";

const StyledTranslateButton = styled.button`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1px;
  background-color: lightgray;
  border: 1px solid lightgray;
  border-bottom-right-radius: 4px;
  width: 80px;
  padding: 4px;
  display: flex;
`;

const ButtonContent = styled.div`
  line-height: 16px;
  margin-left: 10px;
`;
