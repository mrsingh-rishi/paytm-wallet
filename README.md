# PayTM Wallet

The Wallet App is a web application inspired by platforms like Paytm, designed to facilitate seamless financial transactions between users and merchants. This project utilizes a modern tech stack and focuses on providing a secure, user-friendly experience for managing digital finances.

## Demo



https://github.com/mrsingh-rishi/paytm-wallet/assets/59289499/987cebcd-3c0c-4fb9-8c58-400e77a88bd2



## Features

- **User App**: Allows users to perform various financial transactions, including:
  - Phone number OTP validation
  - Peer-to-peer money transfers
  - Wallet top-ups
  - Merchant payments via QR code scanning - Will Update soon
  - Transaction history tracking
  
- **Merchant App**: Provides merchants with the ability to:
  - Sign in using OAuth (Google and GitHub)
  - Receive payments from users and other merchants
  
- **Bank Webhooks**: Two Express servers handle bank webhooks for adding money to the wallet and bank account, ensuring secure and efficient transaction processing.

- **Dummy Netbanking App**: Simulates real-world netbanking interactions to enhance system testing and validation.
  - Allows users to initiate transactions from their bank accounts.
  - Upon transaction completion, calls the webhook to notify the system.
  - Enables thorough testing of webhook handling mechanisms for secure and efficient transaction processing.


## Tech Stack

- **Frontend**:
  - Next.js: React framework for building the user interface
  - Tailwind CSS: Utility-first CSS framework for styling
  
- **Backend**:
  - Express.js: Node.js framework for building robust APIs
  - Prisma: Database toolkit for working with PostgreSQL
  - PostgreSQL: Reliable and scalable relational database management system
  
- **Authentication**:
  - Phone number OTP validation using Firebase Authentication.
  - OAuth sign-ins for merchants using `next-auth`, supporting OAuth providers such as Google and GitHub.
  
## Installation

1. **Clone the repository**:
   
   ```bash
   git clone https://github.com/mrsingh-rishi/paytm-wallet.git
   ```
2. **Navigate to the project directory**:

   ```bash
   cd paytm-wallet
   ```
3. **Install dependencies**:

   ```bash
   npm install
   ```
4. **Generate Prisma Client**:

   To generate the Prisma Client, run the following command:

   ```bash
   npm run db:generate
   ```
5. **Rename .env.example to .env and add your environment variables**:

   Before running the application, rename the `.env.example` file to `.env`. Then, open the `.env` file and add your environment variables. These variables may include API keys, database connection strings, and any other configuration settings required for your application to function properly.

6. **Run the development server**:

   To start the development server and run the application locally, use the following command:

   ```bash
   npm run dev
   ```
## Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

Please ensure that your pull request adheres to the following guidelines:
- Explain the purpose of the change and provide context.
- Keep the scope of your changes as narrow as possible.
- Test your changes thoroughly before submitting a pull request.
- Follow the existing code style and conventions.

## License

This project is licensed under the [MIT License](LICENSE).
