module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'ID113464_docker.db.webhosting.be'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'ID113464_docker'),
        username: env('DATABASE_USERNAME', 'ID113464_docker'),
        password: env('DATABASE_PASSWORD', 'Respons123'),
        ssl: env.bool('DATABASE_SSL', true),
      },
      options: {}
    },
  },
});
