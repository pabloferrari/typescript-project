

You can now invoke the Prisma CLI by prefixing it with npx:

```
$ npx prisma 
```

Next, set up your Prisma project by creating your Prisma schema file with the following command:

```
$ npx prisma init 
```

This command does two things:

    * creates a new directory called prisma that contains a file called schema.prisma, which contains the Prisma schema with your database connection variable and schema models
    * creates the .env file in the root directory of the project, which is used for defining environment variables (such as your database connection)

Set DATABASE URL

    DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"

----------------------------------------------------------------------------------------------

Usage

  $ prisma [command]

Commands

            init   Setup Prisma for your app
        generate   Generate artifacts (e.g. Prisma Client)
              db   Manage your database schema and lifecycle
         migrate   Migrate your database
          studio   Browse your data with Prisma Studio
          format   Format your schema

Flags

     --preview-feature   Run Preview Prisma commands

Examples

  Setup a new Prisma project
  $ npx prisma init

  Generate artifacts (e.g. Prisma Client)
  $ npx prisma generate

  Browse your data
  $ npx prisma studio

  Create migrations from your Prisma schema, apply them to the database, generate artifacts (e.g. Prisma Client)
  $ npx prisma migrate dev

  Pull the schema from an existing database, updating the Prisma schema
  $ npx prisma db pull

  Push the Prisma schema state to the database
  $ npx prisma db push