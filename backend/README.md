# Backend

## MySQL setup

1. Create the database:

   ```sql
   CREATE DATABASE `product-app` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
   ```

2. Copy `.env.example` to `.env` and set the MySQL credentials.
3. Start the API with `npm run start:dev`.

`DB_SYNC=true` creates the `items` table automatically for local development. Keep
it disabled in production and manage schema changes with migrations.
