"use client";

import { PropsWithChildren, useEffect, useState } from "react";

type Props = PropsWithChildren;

const ClientOnly: React.FC<Props> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;
  return <>{children}</>;
};

export default ClientOnly;
