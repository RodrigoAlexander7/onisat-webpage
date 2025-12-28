'use client';

import Image from 'next/image';
import { clientEnv } from '@/config/env';

export default function GoogleSessionPill() {
  return (
    <button
      type="button"
      onClick={() => {
        window.location.href = `${clientEnv.apiUrl}/auth/google`;
      }}
      className="inline-flex items-center gap-x-3 border-2 px-7 py-2 rounded-full font-medium hover:bg-gray-50 transition"
    >
      <Image src="/googleLogo.svg" width={24} height={24} alt="Google logo" />
      <span className="whitespace-nowrap">Inicia sesión con Google</span>
    </button>
  );
}
