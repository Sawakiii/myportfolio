const functions = require('firebase-functions');
const nodemailer = require("nodemailer");
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const adminEmail = functions.config().admin.email;


// 送信に使用するメールサーバーの設定
const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  }
});

// 管理者用のメールテンプレート
const adminContents = data => {
  return `以下内容でホームページよりお問い合わせを受けました。
お名前：
${data.name}
メールアドレス：
${data.email}
内容：
${data.content}
`;
};

exports.sendMail = functions.https.onCall((data, context) => {
  // 管理者へのメール設定
  let adminMail = {
    from: gmailEmail,
    to: adminEmail,
    subject: "ホームページお問い合わせ",
    text: adminContents(data)
  };

  // 問い合わせの方への確認メール設定
  let confirmMail = {
    from: gmailEmail,
    to: data.email,
    subject: "澤木愛輝へのお問い合わせ確認メール",
    text: `以下内容でお問い合わせをいただきました。
    お名前：
    ${data.name}
    メールアドレス：
    ${data.email}
    内容：
    ${data.content}
    `
  };

  // 管理者へのメール送信
  mailTransport.sendMail(adminMail, (err, info) => {
    if (err) {
      return console.error(`send failed. ${err}`);
    }
    // 問い合わせの方へのメール送信
    mailTransport.sendMail(confirmMail, (err, info) => {
      if (err) {
        return console.error(`send failed. ${err}`);
      }
      return console.log("send success to sender.");
    });
    return console.log("send success to admin.");
  });
});
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });