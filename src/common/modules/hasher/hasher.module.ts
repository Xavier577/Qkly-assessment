import { DynamicModule, Module } from '@nestjs/common';
import { HasherModuleOptions } from './hasher.interface';
import { HasherService } from './hasher.service';
import { HASHER_MODULE_OPTIONS } from './hasher.symbol';

@Module({
  providers: [HasherService],
})
export class HasherModule {
  static register(options: HasherModuleOptions): DynamicModule {
    return {
      module: HasherModule,
      providers: [
        {
          provide: HASHER_MODULE_OPTIONS,
          useValue: options,
        },
        HasherService,
      ],
      exports: [HasherService],
    };
  }
}
