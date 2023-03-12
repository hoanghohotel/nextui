import type {AriaLinkProps} from "@react-types/link";
import type {LinkVariantProps} from "@nextui-org/theme";

import {link} from "@nextui-org/theme";
import {useLink as useAriaLink} from "@react-aria/link";
import {HTMLNextUIProps, mapPropsVariants, PropGetter} from "@nextui-org/system";
import {useDOMRef} from "@nextui-org/dom-utils";
import {ReactRef} from "@nextui-org/shared-utils";
import {useMemo} from "react";

interface Props extends HTMLNextUIProps<"a">, LinkVariantProps {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLAnchorElement | null>;
  /**
   * Whether the link is external.
   * @default false
   */
  isExternal?: boolean;
  /**
   * Whether to show the icon when the link is external.
   * @default false
   */
  showAnchorIcon?: boolean;
  /**
   * The icon to display right after the link.
   * @default <LinkIcon />
   */
  anchorIcon?: React.ReactNode;
}

export type UseLinkProps = Props & AriaLinkProps;

export function useLink(originalProps: UseLinkProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, link.variantKeys);

  const {
    ref,
    as,
    children,
    anchorIcon,
    isExternal = false,
    showAnchorIcon = false,
    className,
    ...otherProps
  } = props;

  const Component = as || "a";

  const domRef = useDOMRef(ref);

  const {linkProps} = useAriaLink({...otherProps, elementType: `${as}`}, domRef);

  if (isExternal) {
    otherProps.rel = otherProps.rel ?? "noopener";
    otherProps.target = otherProps.target ?? "_blank";
  }

  if (as !== "a") {
    otherProps.role = "link";
  }

  const styles = useMemo(
    () =>
      link({
        ...variantProps,
        className,
      }),
    [...Object.values(variantProps), className],
  );

  const getLinkProps: PropGetter = () => {
    return {
      ref: domRef,
      className: styles,
      ...linkProps,
      ...otherProps,
    };
  };

  return {Component, children, anchorIcon, linkProps, showAnchorIcon, getLinkProps};
}

export type UseLinkReturn = ReturnType<typeof useLink>;