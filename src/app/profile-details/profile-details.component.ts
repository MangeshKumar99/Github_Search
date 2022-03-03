import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css'],
})
export class ProfileDetailsComponent implements OnInit {
  user: any;
  userRepos: any;
  details: any;

  constructor(
    private profileService: ProfileService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.user = params.get('name');
      this.profileService.getUserDetails(this.user).subscribe((data) => {
        this.details = data;
      });
      console.log(this.user);
      this.profileService.getUserRepos(this.user).subscribe((data) => {
        this.userRepos = data;
      });
    });
  }
}
