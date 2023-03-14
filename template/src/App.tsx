/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { MantineProvider, Text, Center, AppShell } from '@mantine/core';

import React from 'react';

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AppShell>
        <Center>
          <Text size="xl">Hello world</Text>
        </Center>
      </AppShell>
    </MantineProvider>
  );
}
