# Book Shop Application (B4A2V1)

This is a TypeScript-based Express application for managing a Book Shop, integrating MongoDB with Mongoose for data storage and validation. It provides RESTful APIs for managing books and orders with features like inventory control, custom error handling, and revenue calculation.

## Features

1. **Book Management**

   - Add new books.
   - Retrieve all books or filter them by search terms (title, author, or category).
   - View details of a specific book by ID.
   - Update book details.
   - Delete books.

2. **Order Management**

   - Place orders for books.
   - Automatically manage inventory (reduce quantity, toggle `inStock` status).
   - Handle insufficient stock scenarios.

3. **Revenue Calculation**

   - Calculate the total revenue generated from all orders using MongoDB aggregation.

4. **Custom Error Handling**

   - Unified and structured error responses.

5. **Best Practices**
   - Modular folder structure.
   - Prettier and ESLint for code quality.
   - Edge case handling with schema validation.

---

## Installation

### Prerequisites

- Node.js (>= 16.x)
- MongoDB (running locally or a connection string to a hosted database)

### Steps

1. Clone the repository:

   ```bash
   git clone <repository_url>
   cd book-shop-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and configure the following environment variables:

   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/bookshop
   ```

4. Start the server:
   ```bash
   npm run dev
   ```

---

## API Documentation

### **1. Book Management**

#### Add a New Book

- **Endpoint:** `POST /api/products`
- **Request Body:**
  ```json
  {
    "title": "Atomic Habits",
    "author": "James Clear",
    "price": 20,
    "category": "SelfDevelopment",
    "description": "An insightful book about building good habits.",
    "quantity": 50,
    "inStock": true
  }
  ```
- **Response:**
  ```json
  {
    "message": "Book created successfully",
    "success": true,
    "data": { ...bookDetails }
  }
  ```

#### Retrieve All Books

- **Endpoint:** `GET /api/products`
- **Query Parameters:**
  - `searchTerm`: Filter by title, author, or category. Example:
    - `/api/products?searchTerm=SelfDevelopment`
    - `/api/products?searchTerm=James Clear`
- **Response:**
  ```json
  {
    "message": "Books retrieved successfully",
    "success": true,
    "data": [ ...books ]
  }
  ```

#### Get Book by ID

- **Endpoint:** `GET /api/products/:productId`
- **Response:**
  ```json
  {
    "message": "Book retrieved successfully",
    "success": true,
    "data": { ...bookDetails }
  }
  ```

#### Update a Book

- **Endpoint:** `PUT /api/products/:productId`
- **Request Body:**
  ```json
  {
    "price": 25,
    "quantity": 40
  }
  ```
- **Response:**
  ```json
  {
    "message": "Book updated successfully",
    "success": true,
    "data": { ...updatedBookDetails }
  }
  ```

#### Delete a Book

- **Endpoint:** `DELETE /api/products/:productId`
- **Response:**
  ```json
  {
    "message": "Book deleted successfully",
    "success": true,
    "data": {}
  }
  ```

### **2. Order Management**

#### Place an Order

- **Endpoint:** `POST /api/orders`
- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "product": "648f31f2a3b1c7456f89e123",
    "quantity": 3,
    "totalPrice": 60
  }
  ```
- **Response:**
  ```json
  {
    "message": "Order created successfully",
    "success": true,
    "data": { ...orderDetails }
  }
  ```

### **3. Revenue Calculation**

#### Get Total Revenue

- **Endpoint:** `GET /api/orders/revenue`
- **Response:**
  ```json
  {
    "message": "Revenue calculated successfully",
    "success": true,
    "data": {
      "totalRevenue": 480
    }
  }
  ```

---

## Error Handling

All errors follow a unified format:

```json
{
  "message": "Validation failed",
  "success": false,
  "error": {
    "name": "ValidationError",
    "errors": { ...errorDetails }
  },
  "stack": "...stack trace..."
}
```

---

## Project Structure

```
book-shop-app/
├── src/
│   ├── app/
│   │   ├── config/             # App configuration files
│   │   ├── module/
│   │   │   ├── order/          # Order module
│   │   │   │   ├── interface/  # TypeScript interfaces
│   │   │   │   ├── model/      # Mongoose models
│   │   │   │   ├── service/    # Business logic
│   │   │   │   ├── controller/ # Route handlers
│   │   │   │   └── route/      # API routes
│   │   │   ├── product/        # Product module
│   │   │       ├── interface/  # TypeScript interfaces
│   │   │       ├── model/      # Mongoose models
│   │   │       ├── service/    # Business logic
│   │   │       ├── controller/ # Route handlers
│   │   │       └── route/      # API routes
│   │   ├── utils/              # Utility functions
│   └── app.ts                  # App initialization
├── server.ts                   # Server setup
├── .gitignore                  # Git ignore file
├── .prettierignore             # Prettier ignore file
├── .prettierrc                 # Prettier configuration
├── eslint.config.mjs           # ESLint configuration
├── package.json                # Dependencies and scripts
├── package-lock.json           # Lock file
├── tsconfig.json               # TypeScript configuration
```

---

## Dependencies

### Production Dependencies

- **`express`**: ^4.21.2
- **`mongoose`**: ^8.8.4
- **`dotenv`**: ^16.4.7
- **`cors`**: ^2.8.5
- **`zod`**: ^3.23.8

### Development Dependencies

- **`typescript`**: ^5.7.2
- **`ts-node-dev`**: ^2.0.0
- **`eslint`**: ^9.14.0 (Mandatory version for compatibility)
- **`eslint-config-prettier`**: ^9.1.0
- **`prettier`**: ^3.4.2
- **`@types/node`**: ^22.10.1
- **`@types/express`**: ^5.0.0
- **`@types/mongoose`**: ^5.11.97
- **`@types/cors`**: ^2.8.17

---

## Scripts

- **`npm run dev`**: Start the application in development mode.
- **`npm run build`**: Compile TypeScript files to JavaScript.
- **`npm start`**: Start the compiled application.
- **`npm run lint`**: Run ESLint for code quality checks.
- **`npm run lint:fix`**: Automatically fix ESLint issues.
- **`npm run format`**: Format code using Prettier.

---

## Contributing

Feel free to open issues or submit pull requests for improvements or bug fixes. Make sure to follow the existing code style and project structure.

---

## Contact

**MD SIAM ISLAM SAGOR**

- **Call**: +8801882-477336
- **Email**: mdsiamislamsagor@gmail.com
- **Portfolio**: [mdsiamislamsagor-dev.web.app](https://mdsiamislamsagor-dev.web.app)

---

## License

This project is currently unlicensed. If you intend to use it for commercial purposes, please contact me directly for permissions or collaboration.
