import { Stack, Box } from "@chakra-ui/react";
import { Item } from "./Item";

export function Pagination() {
  return (
    <Stack
      direction={['column', 'row']}
      mt="8"
      spacing="6"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <Item page="1" isCurrent />
        <Item page="2" />
        <Item page="3" />
        <Item page="4" />
        <Item page="5" />
        <Item page="6" />
      </Stack>
    </Stack>
  )
}