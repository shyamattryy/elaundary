import nodemailer from "nodemailer";

export default async (req, res) => {
  const { name, email, country, city, phone } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // user: 'shyamattryy@gmail.com',
      // pass: 'zsibiqyspqoncofw'
      user: 'elaundarysolution@gmail.com',
      pass: 'gmdedxwumzplaoic'
    }
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "info@omrasolutions.com",
      cc: 'sachin@omrasolutions.com',
      bcc: 'alka@omrasolutions.com',
      bcc: 'anupam.singh@epicglobal.co.in',
      // to: "shyamsinghattry@gmail.com",
      // cc: 'shyamattryy@gmail.com',
   
      subject: `Contact form submission from ${name}`,
      html: `<p>You have a contact form submission</p>
      <p><strong>Name: </strong> ${name}</p>
        <p><strong>Email: </strong> ${email}</p>
        <p><strong>country: </strong> ${country}</p>
        <p><strong>city: </strong> ${city}</p>
        <p><strong>phone: </strong> ${phone}</p>
      `
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
};