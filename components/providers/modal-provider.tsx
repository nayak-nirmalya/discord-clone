"use client";

import React, { useEffect, useState } from "react";

import { CreateServerModal } from "@/components/modals/create-server-modal";

export function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <CreateServerModal />
    </>
  );
}
