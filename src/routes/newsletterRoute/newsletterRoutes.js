import { Router } from "express";
import Newsletters from "../../controllers/newsletter/newsletter";
import subscriber from "../../controllers/newsletter/subscriber";
import Authentication from "../../middlewares/authenticate";

const router = Router();
const { createNewsletter } = Newsletters;
const { verifyAdmin, verifyToken } = Authentication;
router.get("/newsletter/subscribers", subscriber.allSubscribers);
router.get("/subscriber/verify/:email", subscriber.verifySubscriber);
router.post("/newsletter/subscribe", subscriber.createSubscriber);
router.delete("/newsletter/unsubscribe", subscriber.unsubscribe);
router.post("/newsletter/admin/create_newsletter", verifyToken, verifyAdmin, createNewsletter);

export default router;
