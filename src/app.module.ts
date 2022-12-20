import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from '@database/database.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './api/users/users.module';
import { StoresModule } from './api/stores/stores.module';
import { TokenizerModule } from './common/modules/tokenizer/tokenizer.module';
import { HasherModule } from './common/modules/hasher/hasher.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    UsersModule,
    StoresModule,
    TokenizerModule,
    HasherModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
