export class TalentStatsDto {
  name: string;
  data: number[];
}

export class TalentResponseDto {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  profile_photo: string;
  phone: string;
  about_you_completed: boolean;
  career_completed: boolean;
  credential_completed: boolean;
  career_profile_completed: boolean;
  current_salary: number;
  desired_salary: number;
  employment_type: string;
  employment_style: string;
  employment_search_status: string;
  professional_adventure: string;
  career_plan: string;
  career_achievement: string;
  career_quest: string;
  profile_complete: boolean;
  isVerified: boolean; // Maps to 'verified'
}
