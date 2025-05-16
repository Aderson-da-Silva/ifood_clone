import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from 'src/modules/user/user.module';
import { SharedModule } from 'src/modules/shared/shared.module';

@Module({
  imports: [UserModule, SharedModule],
  providers: [AuthService]
})
export class AuthModule {}
