import React, { Suspense, FC } from "react";
import { TIconName } from "./Icon.types";

export type TIconSize = "xs" | "sm" | "md" | "lg" | string;

export interface TIconComponent {
  name: TIconName;
  title?: string;
  id?: string;
  size?: TIconSize;
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
}

export type IconSizeOptions = { [key in TIconSize]: number };
export type IconNameOptions = { [key in TIconName]: any };

import { lazyImports as lazyImportsSolid } from "./icons/solid/lazy-imports";
import { lazyImports as lazyImportsRegular } from "./icons/regular/lazy-imports";
import { lazyImports as lazyImportsBrands } from "./icons/brands/lazy-imports";

const getIcons = (name: TIconName) => {
  const icons: Partial<IconNameOptions> = Object.assign(
    {},
    lazyImportsSolid,
    lazyImportsRegular,
    lazyImportsBrands
  );

  if (icons[name]) {
    return icons[name];
  }
  return null;
};

const getSize = (size: TIconSize) => {
  const sizes: IconSizeOptions = {
    xs: 16,
    sm: 24,
    md: 36,
    lg: 48,
  };
  return sizes[size] || size;
};

const Icon: FC<TIconComponent> = (props) => {
  const { name, size = "1em", width, height } = props;
  const Component = getIcons(name);
  const dimensions = getSize(size);
  const w = width ? width : dimensions;
  const h = height ? width : dimensions;

  if (!name) {
    return null;
  }

  return (
    <Suspense fallback="">
      <Component {...props} width={w} height={h} />
    </Suspense>
  );
};

export default Icon;
