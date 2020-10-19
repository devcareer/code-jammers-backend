import { Router } from "express";
import newsletter from "../../controllers/newsletter/newsletter";
import subscriber from "../../controllers/newsletter/subscriber";

const router = Router();
router.get("/newsletter/subscribers", subscriber.allSubscribers);
router.post("/newsletter/subscribe", subscriber.subscribe);
router.delete("/newsletter/unsubscribe", subscriber.unsubscribe);
router.post("/newsletter/create_newsletter", newsletter.createNewsletter);

export default router;
