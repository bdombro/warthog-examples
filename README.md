# Setup

Run `yarn bootstrap && yarn start`

# Bootstrapping the App

Running `yarn bootstrap` will do the following:

- Install packages
- Create the example DB
- Generate code in `generated` folder


# Typeorm Command Examples

- To bypass migrations and force a sync of schema
`yarn typeorm:cli schema:sync`

- Drop schema
`yarn typeorm:cli schema:drop`

- To create a shell of a migration
`yarn typeorm:cli migration:create -n <name of migration>`

- To generate a migration automatically
`yarn typeorm:cli migration:generate -n <name of migration>`

- Migrations are ran by default at start using .env, but you can manually run them with this command
`yarn typeorm:cli migration:run`

- Revert migration
`yarn typeorm:cli migration:revert`

- Query
`yarn typeorm:cli query 'select * from user;'`

- Test?
`yarn typeorm:cli schema:log`

