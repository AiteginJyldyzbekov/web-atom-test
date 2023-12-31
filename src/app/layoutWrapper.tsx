"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "@component/helpers/queryClientOptions";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </>
  );
}
