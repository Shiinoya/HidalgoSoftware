import { browser } from '$app/environment';
import { setLocalStorage, getLocalStorage } from '$lib/utils/localStorage.svelte';

type Player = {
  name: string;
  time: number;
  icon?: string;
  color?: string;
};

export const players = $state<Player[]>([]);

// get & hydrate players
if (browser) {
  const saved: Player[] = getLocalStorage('players') ?? [];

  if (saved) {
    players.length = 0; // clear array but maintain reactivity across components
    players.push(...saved);
  }
}

// set players
export function syncPlayers(): void {
  $effect(() => {
    if (browser) setLocalStorage('players', players);
  });
}
