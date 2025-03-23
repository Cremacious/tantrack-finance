import { createFileRoute, Link } from '@tanstack/react-router';
import cover from '@/assets/cover.webp';
import { ChartColumnBigIcon } from 'lucide-react';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from '@clerk/tanstack-start';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="relative flex h-[calc(100vh-80px)] min-h-[400px] items-center justify-center">
      Hello
    </div>
  );
}
