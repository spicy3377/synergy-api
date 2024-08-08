import { Controller, Get } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get('total-talents')
  getTotalTalents() {
    return this.dashboardService.getTotalTalents();
  }

  @Get('talents-stats')
  getTalentsStats() {
    return this.dashboardService.getTalentsStats();
  }

  @Get('verified-talents')
  getVerifiedTalents() {
    return this.dashboardService.getVerifiedTalents();
  }
}
