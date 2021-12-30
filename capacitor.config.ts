import { CapacitorConfig } from '@capacitor/cli';
import { url } from 'inspector';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'zet',
  webDir: 'build',
  bundledWebRuntime: false,
  // server: {
  //   url: "http://192.168.56.1:8100",
  //   cleartext: true
  // }
};

export default config;
