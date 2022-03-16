

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