import { core } from '@tauri-apps/api';

export async function getSessionQRCode(): Promise<string> {
  return core.invoke('get_session_qr_code');
}
