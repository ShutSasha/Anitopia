import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { RolesService } from './roles.service'
import { CreateRoleDto } from './dto/create-role.dto'
import { RoleDocument } from './roles.schema'

@Controller('roles')
export class RolesController {
  constructor(private readonly roleService: RolesService) {}

  @Post()
  create(@Body() dto: CreateRoleDto): Promise<RoleDocument> {
    return this.roleService.createRole(dto)
  }

  @Get('/:value')
  getByValue(@Param('value') value: string): Promise<RoleDocument> {
    return this.roleService.getRoleByValue(value)
  }
}
