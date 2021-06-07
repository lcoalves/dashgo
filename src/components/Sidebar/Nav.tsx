import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine
} from "react-icons/ri";

import { Stack } from '@chakra-ui/react';

import { Section } from "./Section";
import { Link } from "./Link";

export function Nav() {
  return (
    <Stack spacing="12" align="flex-start">
      <Section title="GERAL">
        <Link href="/dashboard" icon={RiDashboardLine}>Dashboard</Link>
        <Link href="/users" icon={RiContactsLine}>Usuários</Link>
        <Link href="/cache-users" icon={RiContactsLine}>Usuários com cache</Link>
      </Section>

      <Section title="AUTOMAÇÃO">
        <Link href="/forms" icon={RiInputMethodLine}>Formulários</Link>
        <Link href="/automation" icon={RiGitMergeLine}>Automação</Link>
      </Section>
    </Stack>
  )
}