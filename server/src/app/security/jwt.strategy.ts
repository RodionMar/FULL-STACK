// ============================ Configs ====================================
import "dotenv/config";

// ============================ Passport ====================================
import { ExtractJwt, Strategy } from 'passport-jwt';

// ============================ Nest ====================================
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

// ============================ DTO ====================================
import { UserSessionDto } from "../users/dto/user-session.dto";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.PRIVATE_KEY,
    });
  }

  async validate(payload: UserSessionDto) {
    return UserSessionDto.fromJwt(payload);
  }
}