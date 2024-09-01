import { CanActivateFn,Router,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
export const authGuardGuard: CanActivateFn = (route:ActivatedRouteSnapshot,
   state:RouterStateSnapshot) => {
  return true;
};
