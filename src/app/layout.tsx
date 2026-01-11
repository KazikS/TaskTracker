import type { Metadata } from "next";
import { Provider } from "@/shared/theme/provider";
import Header from "@/components/ui/Header";
import { Box, Flex } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "Таск-трекер | sabkazz",
  description: "Персональный таск-трекер",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="light" suppressHydrationWarning>
      <body>
        <Provider>
          <Flex direction="column" minH="100vh" bg="pageBg">
            <Header />
            <Box
              as="main"
              flex="1"
              margin="auto"
              maxW="1200px"
              w="full"
              px="8"
              py="6"
            >
              {children}
            </Box>
          </Flex>
        </Provider>
      </body>
    </html>
  );
}
