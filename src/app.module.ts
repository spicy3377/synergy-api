import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TalentsModule } from './talents/talents.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'synergyy-staging.mysql.database.azure.com',
      port: 3306,
      username: 'cloud_user',
      password: 'synergyytalent123$',
      database: 'synergyy-staging',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TalentsModule,
  ],
})
export class AppModule {}
