import { useEffect, useRef } from 'react';

export function useWebSocket(url: string) {
  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    // WebSocket connection logic for Daphne will go here
  }, [url]);

  return ws;
}
