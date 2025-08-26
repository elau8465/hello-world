import { ApplicationConfig } from '@angular/core';
import { initializeApp, provideFirebaseApp, getApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth, connectAuthEmulator } from '@angular/fire/auth';
import { provideFirestore, getFirestore, connectFirestoreEmulator } from '@angular/fire/firestore';
import { provideFunctions, getFunctions, connectFunctionsEmulator} from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { provideStorage, getStorage, connectStorageEmulator } from '@angular/fire/storage';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';
import {
  ReCaptchaEnterpriseProvider,
  initializeAppCheck,
  provideAppCheck,
} from '@angular/fire/app-check';

declare global {
  var FIREBASE_APPCHECK_DEBUG_TOKEN: boolean;
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAppCheck(() => {
      const appCheck = initializeAppCheck(getApp(), {
        provider: new ReCaptchaEnterpriseProvider(environment.reCAPTCHAEnterpriseKey.key),
        isTokenAutoRefreshEnabled: true,
      });
      if (location.hostname === 'localhost') {
        self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
      }
      return appCheck;
    }),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideMessaging(() => getMessaging()),
    provideStorage(() => getStorage())
  ],
};
