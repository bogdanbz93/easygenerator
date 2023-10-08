import {
  Body,
  Controller,
  Post,
  Req,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { Response, Request } from 'express';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private jwtService: JwtService,
  ) {}

  @Post('/signup')
  async signUp(
    @Body() signUpDto: SignUpDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const jwt = await this.authService.signUp(signUpDto);
    response.cookie('jwt', jwt, { httpOnly: true });
    return {
      message: 'You are now registered.',
    };
  }

  @Post('/login')
  async login(
    @Body() loginDto: LoginDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const jwt = await this.authService.login(loginDto);
    response.cookie('jwt', jwt, { httpOnly: true });
    return {
      message: 'You are now authenticated.',
    };
  }

  @Post('logout')
  async logout(
    @Res({ passthrough: true }) response: Response,
    @Req() request: Request,
  ) {
    const cookie = request.cookies['jwt'];

    if (!cookie) throw new UnauthorizedException('You are not logged in!');

    const { token } = cookie;
    const data = await this.jwtService.verifyAsync(token);

    if (!data) throw new UnauthorizedException('The JWT cannot be verified!');
    response.clearCookie('jwt');
    return {
      message: 'You are now logged out.',
    };
  }
}
