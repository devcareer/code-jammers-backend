import dotenv from "dotenv";
import sgMail from "@sendgrid/mail";

dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
let hostURL = "https://know-africa.herokuapp.com";
if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test") {
  hostURL = `http://localhost:${process.env.PORT || 3000}`;
}

const msg = {
  from: `Know Africa Newsletter <${process.env.SENDGRID_EMAIL}>`,
  mail_settings: {
    sandbox_mode: {
      enable: false
    }
  }
};

/**

 */
export default class {
  // eslint-disable-next-line valid-jsdoc
  /**
   *
   */
  static sandboxMode() {
    msg.mail_settings.sandbox_mode.enable = true;
  }

  /**
   * @param {string} email - The subscriber's email
   * @param {string} name - The subscriber's name
   * @param {string} title - The newsletter's title
   * @param {string} message - newsletter message
   * @param {string} html - newsletter html content
   * @returns {object} Newsletter
   */
  static async sendNewsletter(email, name, title, message) {
    const link = `${hostURL}/api/v1/newsletter/unsubscribe/${email}`;
    msg.to = email;
    msg.subject = title;
    msg.text = message;
    msg.html = `<div style ="background-color: rgb(227, 223, 222); width:100%">
    <div style= "display: flex; padding-top: 50px; ">
    <div style= "line-height: 1.6; margin: auto; text-align: left; width: 50%; padding-top: 50px; background-color: white">
    <div style="margin: 10px">
        <p style ="text-align: center; font-size: 40px; margin: auto; width: 70%; padding-bottom:50px"> <strong>${title}</strong></p>
       </div> 
      <img  src="https://images.unsplash.com/photo-1497271679421-ce9c3d6a31da?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"alt="Know Africa" width="100%" height="333" >
       
        <p style="margin: 10px; padding-top:-10px">Dear <strong>${name}</strong>,</p>
      <div style="margin: 10px">
        ${message}
      </div>
      <div style= "padding-top:20px; margin-bottom: 20px; display:flex; margin-left:23%">
        <p style = "font-variant: small-caps; opacity: 0.5; margin: 10px;">Regards, Know Africa Team!</p>
      </div>
      </div>
      </div>
      <div style="width: 50%; margin-left:44%">
        <a href="${link}" style ="text-decoration: none; font-variant: small-caps; opacity: 0.9;  font-size: 15px; padding-top:50px; padding-bottom:80px; display: flex; text-align: center;">Unsubscribe &#128546;</a>
      </div>    
    </div>`;
    try {
      await sgMail.send(msg);
    } catch (err) {
      return err;
    }
  }

  /**
   * @param {string} email - The user's email
   * @param {string} User - The User's username
   * @param {string} fillroute - Specifies route for verification
   * @returns {object} Verification message
   */
  static async sendVerificationEmail(email, User, fillroute) {
    const link1 = `${hostURL}/api/v1/${fillroute}/verify/${email}`;
    const link2 = `${hostURL}/api/v1/newsletter/unsubscribe/${email}`;
    msg.to = email;
    msg.subject = "Welcome to Know Africa! Confirm Your Email";
    msg.html = `<div style ="background-color: rgb(227, 223, 222); width:100%">
    <div style= "display: flex; padding-top: 50px; ">
      <div style= "line-height: 1.6; margin: auto; text-align: left; width: 50%; padding-top: 50px; background-color: white; margin-bottom:20px;">
      <div><p style ="text-align: center; font-size: 40px; margin: auto; width: 70%; padding-bottom:50px">Welcom to Know Africa!</p></div>
      <p style="margin: 10px">Dear <strong>${User}</strong>,</p> 
      <div style="margin: 10px">
          <p>Thank you for joining Know Africa. We look forward to sharing the many beauties of Africa with you! <br> Please click the button below to confirm you own this email address</p>
        </div>
            <a href="${link1}" style ="text-decoration:none; padding:5px 15px;color:white;background-color:rgb(75,203,250);font-weight:bold; border-radius:30px;
            margin: 18px; width:40%;">Verify Me</a>
            <p style="margin: 10px">If this was not initiated by you, please click <a href="${link2}" style ="text-decoration: none;">here</a>.</p>
              <div style= "padding-top:20px; margin-bottom: 20px; display:flex; justify-content:center">
            <p style = "font-variant: small-caps; opacity: 0.5; margin: 10px;">Regards, Know Africa Team!</p>
          </div>
      </div>
  </div>`;
    try {
      await sgMail.send(msg);
    } catch (err) {
      return err;
    }
  }
}
