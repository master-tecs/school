// import { Injectable } from '@nestjs/common';
// import { createTransport } from 'nodemailer';

// @Injectable()
// export class AppointmentService {
//   constructor() {
//     this.transporter = createTransport({
//       host: process.env.SMTP_HOST,
//       port: parseInt(process.env.SMTP_PORT),
//       secure: true,
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//       },
//     });
//   }

//   async bookAppointment(appointmentData) {
//     // Email to admin
//     await this.transporter.sendMail({
//       from: process.env.SMTP_FROM,
//       to: process.env.ADMIN_EMAIL,
//       subject: 'New Appointment Request',
//       html: `
//         <h2>New Appointment Request</h2>
//         <p><strong>Name:</strong> ${appointmentData.fullName}</p>
//         <p><strong>Phone:</strong> ${appointmentData.phone}</p>
//         <p><strong>Email:</strong> ${appointmentData.email}</p>
//         <p><strong>City:</strong> ${appointmentData.city}</p>
//         <p><strong>Study Abroad:</strong> ${appointmentData.studyAbroad}</p>
//         <p><strong>Course:</strong> ${appointmentData.course}</p>
//         <p><strong>Message:</strong> ${appointmentData.message || 'No message provided'}</p>
//       `,
//     });

//     // Confirmation email to user
//     await this.transporter.sendMail({
//       from: process.env.SMTP_FROM,
//       to: appointmentData.email,
//       subject: 'Appointment Confirmation',
//       html: `
//         <h2>Thank you for booking an appointment!</h2>
//         <p>Dear ${appointmentData.fullName},</p>
//         <p>We have received your appointment request and will get back to you within 24 hours.</p>
//         <p>Your details:</p>
//         <ul>
//           <li>Study Destination: ${appointmentData.studyAbroad}</li>
//           <li>Course Interest: ${appointmentData.course}</li>
//         </ul>
//         <p>Best regards,<br>Study Inspire Moon Team</p>
//       `,
//     });

//     return { success: true };
//   }
// }

