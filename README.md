# Wallet App

The Wallet App is a web application inspired by platforms like Paytm, designed to facilitate seamless financial transactions between users and merchants. This project utilizes a modern tech stack and focuses on providing a secure, user-friendly experience for managing digital finances.

## Features

- **User App**: Allows users to perform various financial transactions, including:
  - Phone number OTP validation
  - Peer-to-peer money transfers
  - Wallet top-ups
  - Merchant payments via QR code scanning
  - Transaction history tracking
  
- **Merchant App**: Provides merchants with the ability to:
  - Sign in using OAuth (Google and GitHub)
  - Receive payments from users and other merchants
  
- **Bank Webhooks**: Two Express servers handle bank webhooks for adding money to the wallet and bank account, ensuring secure and efficient transaction processing.

## Tech Stack

- **Frontend**:
  - Next.js: React framework for building the user interface
  - Tailwind CSS: Utility-first CSS framework for styling
  
- **Backend**:
  - Express.js: Node.js framework for building robust APIs
  - Prisma: Database toolkit for working with PostgreSQL
  - PostgreSQL: Reliable and scalable relational database management system
  
- **Authentication**:
  - Phone number OTP validation
  - OAuth sign-ins for merchants
  
## Installation

1. Clone the repository:

   ```bash
   https://github.com/mrsingh-rishi/paytm-wallet.git
   cd paytm-wallet
   npm install
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
