import {Router} from 'express';
import { registerUser,loginUser,logoutUser,refreshAccessToken } from '../controllers/user.controller.js';
import { verifyJWT } from '../middleware/auth.middleware.js';
//payment
import { createOrder, checkOrderStatus } from '../controllers/payment.controller.js';
//seller
import { registerSeller,loginSeller,logoutSeller} from '../controllers/seller.controller.js';
//upload file
import { uploadedFiles } from '../controllers/upload.controller.js';
import { upload } from '../middleware/multer.middleware.js';
const router=Router();
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
//middleware is used
router.route("/logout").post(verifyJWT,logoutUser);
router.route("/refresh-token").post(refreshAccessToken);
//upload file
router.route("/upload").post( upload.array("files"), uploadedFiles);
  
//seller
router.route("/sellerregister").post(
   registerSeller);
router.route("/sellerlogin").post(loginSeller);
router.route("/sellerlogout").post(verifyJWT,logoutSeller);
router.route("/order").post(createOrder);
router.route("/status").get(checkOrderStatus);

export default router;