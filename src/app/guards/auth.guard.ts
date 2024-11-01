/* import { CanActivateFn } from '@angular/router';
export const authGuard: CanActivateFn = (route, state) => {
  return true;
};
 */

import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor() {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('ROUTE: ', route)
    console.log('STATE: ', state)


    return  true
  }

}