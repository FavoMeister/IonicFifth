import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.burguer',
  appName: 'Brguer Queen',
  webDir: 'www',
  plugins: {
    "CapacitorHttp": {
      "enabled": true
    }
  }
};

export default config;
