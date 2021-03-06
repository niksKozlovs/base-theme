/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */

import WishlistReducer, { PRODUCTS_IN_WISHLIST } from './Wishlist.reducer';
import WishlistDispatcher from './Wishlist.dispatcher';
import {
    ADD_ITEM_TO_WISHLIST,
    REMOVE_ITEM_FROM_WISHLIST,
    UPDATE_ALL_PRODUCTS_IN_WISHLIST,
    addItemToWishlist,
    removeItemFromWishlist,
    updateAllProductsInWishlist
} from './Wishlist.action';

export {
    WishlistReducer,
    WishlistDispatcher,
    PRODUCTS_IN_WISHLIST,
    ADD_ITEM_TO_WISHLIST,
    REMOVE_ITEM_FROM_WISHLIST,
    UPDATE_ALL_PRODUCTS_IN_WISHLIST,
    addItemToWishlist,
    removeItemFromWishlist,
    updateAllProductsInWishlist
};
