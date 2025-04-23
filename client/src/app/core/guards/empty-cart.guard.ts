import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {SnackbarService} from '../services/snackbar.service';
import {CartService} from '../services/cart.service';

export const emptyCartGuard: CanActivateFn = (route, state) => {
  const snack = inject(SnackbarService)
  const cartService = inject(CartService)
  const router = inject(Router)

  if (!cartService.itemCount() || cartService.itemCount() === 0) {
    snack.error("Your cart is empty")
    router.navigateByUrl('/cart')
    return false
  }

  return true
};
