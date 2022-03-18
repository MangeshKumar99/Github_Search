import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../app/profile.service';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profile: any;
  username: any;
  totalRecords: any;
  page: any = 1;
  choice: any;
  repo: any;
  chooseType: any;
  user: any;
  ngUnsubscribe= new Subject<any>();

  constructor(private profileService: ProfileService, private route: Router) {}

  findProfile(username: any, opt: any) {
    if (opt == 'user') {
      this.chooseType = true;
      this.profileService.getProfileInfo(username).pipe(takeUntil(this.ngUnsubscribe)).subscribe((profile) => {
        this.profile = profile;
        this.totalRecords = this.profile.items.length;
      });
    } else {
      this.chooseType = false;
      this.profileService.getRepositoryInfo(username).subscribe((profile) => {
        this.repo = profile;
        this.totalRecords = this.repo.items.length;
      });
    }
  }
  onSelect(user: any) {
    this.route.navigate(['/user', user]);
  }
  onClick(user: any, repo: any) {
    this.route.navigate(['./repo', user, repo]);
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
