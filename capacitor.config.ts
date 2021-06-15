import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.tinder',
  appName: 'Tinder',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    url: "http://192.168.1.100:8080",
    cleartext: true
  }
};

export default config;
