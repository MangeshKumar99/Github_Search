import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css'],
})
export class ProfileDetailsComponent implements OnInit {
  user: any;
  userRepos: any;
  details: any;
  ngUnsubscribe= new Subject<any>();

  constructor(
    private profileService: ProfileService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.user = params.get('name');
      this.profileService.getUserDetails(this.user).pipe(takeUntil(this.ngUnsubscribe)).subscribe((data) => {
        this.details = data;
      });
      this.profileService.getUserRepos(this.user).pipe(takeUntil(this.ngUnsubscribe)).subscribe((data) => {
        this.userRepos = data;
      });
    });
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
