/*
|--------------------------------------------------------------------------
| Validating Environment Variables
|--------------------------------------------------------------------------
|
| In this file we define the rules for validating environment variables.
| By performing validation we ensure that your application is running in
| a stable environment with correct configuration values.
|
| This file is read automatically by the framework during the boot lifecycle
| and hence do not rename or move this file to a different location.
|
*/

import Env from '@ioc:Adonis/Core/Env'

export default Env.rules({
  DB_CONNECTION: Env.schema.string(),

  // Variables for the MYSQL driver
  
      MYSQL_HOST: Env.schema.string({ format: 'host' }),
      MYSQL_PORT: Env.schema.number(),
      MYSQL_USER: Env.schema.string(),
      MYSQL_PASSWORD: Env.schema.string.optional(),
      MYSQL_DB_NAME: Env.schema.string(),
  
      // The MYSQL_HOST should always be present and formatted as a valid host.
      // The MYSQL_PORT should always be present and a valid number.
      // The MYSQL_USER and MYSQL_PASSWORD are required to authenticate with the database server. The password is marked as optional since many local database servers are configured to work without passwords.
      // The MYSQL_DB_NAME is the database name you want to connect with.
  
  // Variables for the PostgreSQL driver
  
    //  PG_HOST: Env.schema.string({ format: 'host' }),
    //  PG_PORT: Env.schema.number(),
    //  PG_USER: Env.schema.string(),
    // PG_PASSWORD: Env.schema.string.optional(),
    //  PG_DB_NAME: Env.schema.string(),
  
  // Variables for the MSSQL driver
  
  //    MSSQL_SERVER: Env.schema.string({ format: 'host' }),
  //    MSSQL_PORT: Env.schema.number(),
  //    MSSQL_USER: Env.schema.string(),
  //    MSSQL_PASSWORD: Env.schema.string.optional(),
  //    MSSQL_DB_NAME: Env.schema.string(),
  
  // Variables for the OracleDB driver
  
  //    ORACLE_HOST: Env.schema.string({ format: 'host' }),
  //    ORACLE_PORT: Env.schema.number(),
  //    ORACLE_USER: Env.schema.string(),
  //    ORACLE_PASSWORD: Env.schema.string.optional(),
  //    ORACLE_DB_NAME: Env.schema.string(),

  HOST: Env.schema.string({ format: 'host' }),
  PORT: Env.schema.number(),
  APP_KEY: Env.schema.string(),
  APP_NAME: Env.schema.string(),
  DRIVE_DISK: Env.schema.enum(['local'] as const),
  NODE_ENV: Env.schema.enum(['development', 'production', 'test'] as const),
})
