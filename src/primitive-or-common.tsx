import styled from "styled-components/native";
import {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  border,
  color,
  flexbox,
  layout,
  space,
  typography,
  TypographyProps,
} from "styled-system";

export const FlexView = styled.View<
  BorderProps & ColorProps & FlexboxProps & LayoutProps & SpaceProps
>`
${border}
${color}
${flexbox}
${layout}
${space}
`;

export interface BoxViewType
  extends BorderProps,
    ColorProps,
    LayoutProps,
    SpaceProps {}

export const BoxView = styled.View<BoxViewType>`
${border}
${color}
${layout}
${space}
`;

export const Text = styled.Text<
  BorderProps & ColorProps & LayoutProps & SpaceProps & TypographyProps
>`
${border}
${color}
${layout}
${space}
${typography}
`;
