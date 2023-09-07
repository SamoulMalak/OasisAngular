import { CanActivateFn } from '@angular/router';

export const userauthenticatGuard: CanActivateFn = (route, state) => {
  return true;
};
