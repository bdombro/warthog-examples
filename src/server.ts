import 'reflect-metadata';
import { DefaultNamingStrategy } from 'typeorm';
import { Server } from 'warthog';

export function getServer(AppOptions = {}) {
  return new Server(
    {
      introspection: true,
      openPlayground: false,
      warthogImportPath: 'warthog',
      ...AppOptions
    },
    {
      // Make sure TypeORM does not auto-update the DB schema so that we know our CLI commands
      // are making the changes
      synchronize: false,

      // Reset Warthog table naming strategy to default Typeorm. Warthog by default uses a custom
      // naming strategy, which is challenging to get working with the Typeorm CLI and our
      // environmental variable strategy. I also don't see any benefit to Warthog's.
      namingStrategy: new DefaultNamingStrategy()
    }
  );
}
