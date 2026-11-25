const referral = { href: 'https://portal.incash.africa/refer-your-employer', label: 'Refer your employer' };
const portal = { href: 'https://portal.incash.africa/', label: 'Open Incash' };
const topUp = { href: '/salary-financing.html#salary-top-up', label: 'Read about Salary Top-Up' };

export const employeeFaqs = [
  { question: 'What is a salary advance?', answer: 'A salary advance lets you receive part of your pay before your usual payday. If your employer offers Incash, check your account for the amount you can request.' },
  { question: 'What is the repayment method for salary advances?', answer: 'Your employer deducts the advance from your pay and sends it to Incash through payroll.' },
  { question: 'Can I withdraw more than my salary when I apply for a salary advance?', answer: 'You can only request up to the amount available in your Incash account. That amount depends on the pay you have earned and the limits that apply to your account.' },
  { question: 'What is the repayment period for a salary advance?', answer: 'Incash describes payday as the usual settlement date. Check the repayment date shown for your request before confirming. Salary Top-Up has its own terms.' },
  { question: 'Does a salary advance affect my take-home salary after the pay period?', answer: 'Yes. Your payday payment is lower because you already received part of it.' },
  { question: 'Are there any benefits to taking a salary advance?', answer: 'Getting part of your pay early can help cover a bill between paydays. Check the cost and what will be left in your next pay before deciding how much to request.' },
  { question: 'How do I sign up for a salary advance in Nigeria?', answer: 'Check with HR that your employer offers Incash. Then create an account and verify your details.', link: portal },
  { question: 'Does Incash offer loans?', answer: 'Incash’s earned wage access service uses the pay you’ve already earned. Our team can explain the terms that apply to Salary Top-Up and other financing services.', link: topUp },
  { question: 'What is the repayment method and period?', answer: 'With an advance settled through payroll, your employer deducts it on the agreed payday. Review the date and the amount shown before you confirm.' },
  { question: 'How can I get started?', answer: 'If your employer offers Incash, sign in using the app or web portal. You can also use USSD by dialling *347*338#.', link: portal },
  { question: 'How can my company sign up for a salary advance?', answer: 'Refer your employer so Incash can speak with your HR or payroll team about getting set up.', link: referral },
  { question: 'What are the best salary advance apps and platforms in Nigeria?', answer: 'Start with the options your employer offers. Compare what you can access, any fees and what will be deducted on payday. Incash works with employers in Nigeria to offer early access to pay.' },
  { question: 'What is the difference between earned wage access (EWA) and salary advance?', answer: 'Earned wage access is tied to wages you have already earned. Salary advance is a broader term for receiving some of your salary early. Check your account for the limit and repayment terms that apply to your request.' },
  { question: 'Are there any earned wage access platforms in Nigeria?', answer: 'Yes. Incash offers earned wage access in Nigeria through participating employers.', link: { href: '/earned-wage-access-in-nigeria.html', label: 'See how Incash EWA works' } },
];

export const ewaFaqs = [
  { question: 'How can I get earned wage access in Nigeria?', answer: 'Ask your HR team whether your employer offers Incash. Once your employer is set up, create and verify your account to check what you can access.', link: portal },
  { question: 'Is earned wage access a loan?', answer: 'Incash EWA gives you early access to pay you’ve already earned. The service is interest-free, and a transaction fee may apply.' },
  { question: 'Which companies offer earned wage access in Nigeria?', answer: 'Incash works with employers in Nigeria. Your HR or payroll team can confirm whether your company is signed up.', link: referral },
  { question: 'Does earned wage access affect my monthly salary?', answer: 'The portion you receive early is deducted when your employer runs payroll. That reduces what lands in your account on payday.' },
  { question: 'Is earned wage access safe and compliant?', answer: 'Incash outlines how it handles your personal data in its Privacy Policy. Contact the team if you have questions about how the service works at your employer.', link: { href: '/privacypolicy.html', label: 'Read the Privacy Policy' } },
];

export const employerFaqs = [
  employeeFaqs[0],
  { question: 'How can I ensure that my employees use Incash responsibly?', answer: 'Agree on how much employees can request and how often they can use the service. Incash can review those limits with your team during onboarding.' },
  { question: 'What amount would I be charged, as an employer, if I choose Incash?', answer: 'Incash says employers can offer its earned wage access benefit at no cost. Employers can choose to cover some or all of an employee’s transaction fee. Ask Incash to confirm what applies to your arrangement.' },
  { question: 'Does Incash require any specific payroll system in order to provide its services?', answer: 'Incash supports manual and automated payroll. Discuss your setup with the team so you know how deductions and reconciliation will work.' },
  { question: 'When do employees pay back an advance?', answer: 'Your payroll team settles the advance on the agreed salary due date.' },
  { question: 'How can I get started?', answer: 'Start in the employer portal. Incash will ask for company information and guide your team through verification and onboarding.', link: { href: 'https://employer.incash.africa/login', label: 'Open the employer portal' } },
];
