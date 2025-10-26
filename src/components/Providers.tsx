"use client";

import React from 'react';
import { HeroUIProvider } from '@heroui/react';

/**
 * Client-side wrapper for providers that require React context
 * Keep this as a Client Component so imports like createContext run on the client.
 */
export default function Providers({ children }: { children: React.ReactNode }) {
    return <HeroUIProvider>{children}</HeroUIProvider>;
}
