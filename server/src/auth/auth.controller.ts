import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  async signUp(
    @Body()
    signUpDto: SignUpDto,
    @Res({ passthrough: true })
    response: Response,
  ) {
    const jwt = await this.authService.signUp(signUpDto);
    response.cookie('jwt', jwt, { httpOnly: true });
    return {
      message: 'You are now registered.',
    };
  }

  @Post('/login')
  async login(
    @Body()
    loginDto: LoginDto,
    @Res({ passthrough: true })
    response: Response,
  ) {
    const jwt = await this.authService.login(loginDto);
    response.cookie('jwt', jwt, { httpOnly: true });
    return {
      message: 'You are now authenticated.',
    };
  }

  @Post('logout')
  async logout(@Res({ passthrough: true }) response: Response) {
    response.clearCookie('jwt');
    return {
      message: 'You are now logged out.',
    };
  }
}
